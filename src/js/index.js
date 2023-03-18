/* 
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista

passo 1 - pegar o elemento html da seta avançar;
passo 2 - identificar o clique do usuários na seta avançar;
passo 3 - fazer aparecer o próximo cartão da lista;
passo 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista

passo 1 - pegar o elemento html da seta voltar;
passo 2 - identificar o clique do usuários na seta voltar;
passo 3 - fazer aparecer o cartão anterior da lista;
passo 4 - buscar o cartão que está selecionado e esconder
*/

const btnAvancar = document.querySelector('.btn-avancar');
const btnVoltar = document.querySelector('.btn-voltar')
const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

btnAvancar.addEventListener('click', function() {
    if(cartaoAtual === cartoes.length - 1) {
        return;
    }

    cartaoAtual++
    
    esconderImagemAberta();
    mostrarImagem();
});

btnVoltar.addEventListener("click", function()  {
    if(cartaoAtual === 0){
        return
    }

    cartaoAtual--
    
    esconderImagemAberta();
    mostrarImagem();
    
   
});

function mostrarImagem() {
    cartoes[cartaoAtual].classList.add("selecionado");
};//pega o cartao atual da lista de cartões e coloca a classe 'selecionado' nele

function esconderImagemAberta() {
    const cartaoAberto = document.querySelector(".selecionado");
    cartaoAberto.classList.remove("selecionado");
};//salva em uma variavel a classe do elemento que estiver 'selecionado'. Pede para remover a seleção e desta forma o slider mudará tb