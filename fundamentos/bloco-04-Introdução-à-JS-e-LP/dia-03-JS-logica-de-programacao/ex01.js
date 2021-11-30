let n = 5;
let asterisco = "*"
let linhaAsteriscos = "";

if (n>1) {
  for (let i = 1; i <= n; i++){{
    linhaAsteriscos = linhaAsteriscos + asterisco;
  }}
}
else {
  console.log("Seu n é menor que 1");
}

for (let j = 1; j <= n; j++){
  console.log(linhaAsteriscos);
}