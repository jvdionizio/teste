let n = 9;
let espaco = " ";
let asterisco = "*"

if (n>1 && n%2 == 1) {
  for (let i = 1; i <= n; i += 2){
    let linhaAsteriscos = "";
    for (let j = (n-i); j >= 0; j -= 2){
      linhaAsteriscos = linhaAsteriscos + espaco;
    }
    for (let k = 1; k <= i; k++){
      linhaAsteriscos = linhaAsteriscos + asterisco;
    }
    console.log(linhaAsteriscos);
  }
}
else {
  console.log("Seu n é menor que 1 ou é par");
}