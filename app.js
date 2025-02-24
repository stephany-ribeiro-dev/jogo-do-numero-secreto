let listaNumeroSorteados = [];
let numeroLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function textoInicial() {
  exibirTexto('h1', 'Jogo do numero secreto');
  exibirTexto('p', 'Escolha um numero entre 1 e 10');
}
textoInicial();

function chute() {
  let chuteInput = document.querySelector('input').value;

  if (chuteInput == numSecreto) {
    exibirTexto('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas';
    let mensagem = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    exibirTexto('p', mensagem);
    console.log(chuteInput == numSecreto);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chuteInput > numSecreto) {
      exibirTexto('p', 'o numero secreto eh menor');
    } else {
      exibirTexto('p', 'o numero eh maior');
    }
    tentativas++;
    limparCampo();
    console.log(chuteInput > numSecreto);
  }
}

function gerarNumAleatorio() {
  let numerEscolhido = parseInt(Math.random() * 10 + 1);
  let quantDeElementosNaLista = listaNumeroSorteados.length;
  if (quantDeElementosNaLista == numeroLimite) {
    listaNumeroSorteados = [];
  }
  if (listaNumeroSorteados.includes(numerEscolhido)) {
    return gerarNumAleatorio();
  } else {
    listaNumeroSorteados.push(numerEscolhido);
    console.log(listaNumeroSorteados);
    return numerEscolhido;
  }
}

function limparCampo() {
  chuteInput = document.querySelector('input');
  chuteInput.value = '';
}

function reiniciar() {
  numSecreto = gerarNumAleatorio();
  limparCampo();
  tentativas = 1;
  textoInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

