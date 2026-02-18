async function carregarNavbar() {
try {
const resposta = await fetch('../navbar.html');
const html = await resposta.text();
const placeholder = document.getElementById('navbar-placeholder');
if (placeholder) {
placeholder.innerHTML = html;
configurarMenuMobile();
}
} catch (erro) {
console.error('Erro:', erro);
}
}

function configurarMenuMobile() {
const botao = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menu = document.getElementById('navbar-default');
if (botao && menu) {
botao.addEventListener('click', function() {
menu.classList.toggle('hidden');
});
}
}

document.addEventListener('DOMContentLoaded', carregarNavbar);