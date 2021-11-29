const valorCusto = 10;
const valorVenda = 20;
let impostoSobreCusto = valorCusto * 0.2;

let valorCustoTotal = valorCusto + impostoSobreCusto;
let lucro = valorVenda - valorCustoTotal
let lucroTotal = lucro * 1000;

if (valorCusto < 0 || valorVenda < 0){
  console.log("Erro um dos valores é menor que 0");
  return 0;
}
else {
  console.log("Você terá de lucro total " + lucroTotal);
}
