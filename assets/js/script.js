/* Menu Hamburguer */

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
}

/* Acessibilidade */

function increaseFontSize() {
    document.body.style.fontSize = "18px";
}

function decreaseFontSize() {
    document.body.style.fontSize = "14px";
}

function toggleContrast() {
    const body = document.body;
    body.classList.toggle("high-contrast");
}

/* Scrollbar */

const scrollbar = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
    // Mostrar a barrinha quando o usuário rolar a página
    scrollbar.style.opacity = "1";

    // Esconder a barrinha após um pequeno atraso (300ms) após a última interação do usuário
    clearTimeout(window.hideScrollbarTimeout);
    window.hideScrollbarTimeout = setTimeout(() => {
        scrollbar.style.opacity = "0.5";
    }, 300);
});

// Função para fechar o menu ao clicar fora
window.addEventListener("click", (event) => {
    if (!event.target.matches('.menu-icon') && !event.target.closest('.menu')) {
        const menu = document.querySelector('.menu');
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }
});

// Função para permitir a navegação com teclado
document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 13 || keyCode === 32) { // Tecla Enter ou Espaço para abrir o menu
        toggleMenu();
    } else if (keyCode === 27) { // Tecla Esc para fechar o menu
        const menu = document.querySelector('.menu');
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    } else if (keyCode === 9) { // Tecla Tab para navegar nos itens do menu
        const menu = document.querySelector('.menu');
        if (menu.classList.contains('open')) {
            const links = menu.querySelectorAll('a');
            const focusedItem = document.activeElement;
            const lastIndex = links.length - 1;
            let focusedIndex = Array.prototype.indexOf.call(links, focusedItem);
            if (event.shiftKey) { // Tecla Shift + Tab
                if (focusedIndex === 0) {
                    event.preventDefault();
                    links[lastIndex].focus();
                }
            } else { // Tecla Tab
                if (focusedIndex === lastIndex) {
                    event.preventDefault();
                    links[0].focus();
                }
            }
        }
    } else if (keyCode >= 49 && keyCode <= 57) { // Teclas numéricas de 1 a 9
        const num = keyCode - 48; // Converter código da tecla para número
        const pageLinks = document.querySelectorAll('.menu li a');
        if (num <= pageLinks.length) {
            window.location.href = pageLinks[num - 1].href; // Navegar para a página correspondente
        }
    }
});
