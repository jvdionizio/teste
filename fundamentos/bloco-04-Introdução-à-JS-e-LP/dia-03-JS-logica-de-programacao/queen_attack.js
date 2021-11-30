//posição da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posição de uma outra peça
let posicaoPecaLinha = 1;
let posicaoPecaColuna = 1;

//variável que identifica se o ataque foi bem sucedido
let ataqueBemSucedido = false;

if (posicaoPecaLinha == posicaoRainhaLinha) {
  ataqueBemSucedido = true;
  console.log("Ataque bem sucedido na mesma linha");
} else if (posicaoPecaColuna == posicaoRainhaColuna) {
  ataqueBemSucedido = true;
  console.log("Ataque bem sucedido na mesma coluna");
}

for (let i = 1; i < 8; i++) {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna - i;

  if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
    ataqueBemSucedido = true;
    console.log("Ataque bem sucedido na diagonal inferior esquerda");
  }
}

for (let casas = 1; casas < 8; casas++) {
  let linhaRainha = posicaoRainhaLinha + casas;
  let colunaRainha = posicaoRainhaColuna + casas;

  if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
    ataqueBemSucedido = true;
    console.log("Ataque bem sucedido na diagonal superior direita");
  }
}
