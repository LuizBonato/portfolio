let menu = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar'); // Certifique-se de que o seletor está correto

// Alternar classes ao clicar no menu
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Corrigido para classList com "L" maiúsculo
    navbar.classList.toggle('active');
};

// Remover classes ao rolar a página
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Configuração do Typed.js
const typed = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'Backend Developer'], // Corrigido para manter consistência
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200, // Corrigido "backDeplay" para "backDelay"
    loop: true,
});
