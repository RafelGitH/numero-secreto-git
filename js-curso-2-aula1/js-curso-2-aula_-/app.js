let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

//Função com parâmetros
function exibeTextoJogo(tag, texto) {
    let campo = document.querySelector(tag); //Seleção da região estrutural do HTML que se mexe
    campo.innerHTML = texto; //Escrever no HTML 
}

//Função sem parâmetros
function exibirMensagemInicial(){
exibeTextoJogo('h1', 'Jogo do número secreto');
exibeTextoJogo('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    console.log(numeroSecreto);
    let chute = document.querySelector('input').value;
    if (numeroSecreto == chute) {
        exibeTextoJogo ('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `O número secreto é ${numeroSecreto} e você usou ${tentativas} ${palavraTentativa}`;
        exibeTextoJogo ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroSecreto > chute){
            exibeTextoJogo('p', 'Chute mais alto');
        } else {
            exibeTextoJogo('p', 'Chute mais baixo');
        }
        tentativas++;
        limparCampo();
    }
    if (chute > numeroLimite || chute < 1){
        exibeTextoJogo('h1', `O número escolhido deve estar entre 1 e ${numeroLimite}`)
    }
}

function gerarNumAleatorio() {
   numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeNumLista = numerosSorteados.length;

   if(quantidadeDeNumLista == numeroLimite){
      numerosSorteados = [];
   }

   if(numerosSorteados.includes(numeroEscolhido)){
    return gerarNumAleatorio();
   } else {
    numerosSorteados.push(numeroEscolhido)
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

