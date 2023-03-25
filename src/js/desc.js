const botoesCarrossel2 = document.querySelectorAll('.botao');
const descricoes = document.querySelectorAll('.descricao');

botoesCarrossel2.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        const descAtiva = document.querySelector('.selecionada');
        descAtiva.classList.remove('selecionada');
    
        descricoes[indice].classList.add('selecionada');
    })
})
