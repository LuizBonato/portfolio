function setupMenu() {
    let menu = document.querySelector('#menu-icone');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
}

function setupTyped() {
    const options = {
        strings: ["Desenvolvedor Backend", "Engenheiro Backend", "Desenvolvedor de Software" , "Desenvolvedor de Software Backend", "Desenvolvedor Python", "Desenvolvedor Python",],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    };

    const typed = new Typed(".multiple-text", options);
}

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    setupTyped();
});