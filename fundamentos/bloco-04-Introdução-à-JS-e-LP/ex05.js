const a = -15;
const b = 60;
const c = 90;

if ( a < 0 || b < 0 || c < 0){
  console.log("Erro. Ângulo invalido, tente um ângulo positivo! :)");
}
else if (a + b + c === 180) {
  console.log("É um triângulo! :)");
}
else {
  console.log("Não é um triângulo :(");
}
