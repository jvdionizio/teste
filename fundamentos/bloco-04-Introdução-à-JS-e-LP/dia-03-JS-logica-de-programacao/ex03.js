let n = 5;
let espaco = " ";
let asterisco = "*"

if (n>1) {
  for (let i = 1; i <= n; i++){
    let linhaAsteriscos = "";
    for (let j = (n-i); j >= 0; j -= 1){
      linhaAsteriscos = linhaAsteriscos + espaco;
    }
    for (let k = 1; k <= i; k++){
      linhaAsteriscos = linhaAsteriscos + asterisco;
    }
    console.log(linhaAsteriscos);
  }
}
else {
  console.log("Seu n é menor que 1");
}