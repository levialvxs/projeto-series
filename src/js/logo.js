const botoesCarrossel3 = document.querySelectorAll('.botao');
const logo = document.querySelectorAll('.logo');

botoesCarrossel3.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        const logoAtiva = document.querySelector('.ativa2');
        logoAtiva.classList.remove('ativa2');
    
        logo[indice].classList.add('ativa2');
    })
})
