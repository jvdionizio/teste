let a = "peão";
let b = a.toLowerCase();


switch (b){
  case "bispo":
    console.log(b + " -> " + "Para diagonal, indefinidamente");
    break;
  case "peão":
    console.log(b + " -> " + "Para frente, uma casa");
    break;
  case "pião":
    console.log("Acho que você quis dizer Peão. :)");
    break;
  case "torre":
    console.log(b + " -> " + "Para frente, indefinidamente");
    break;
  case "cavalo":
    console.log(b + " -> " + "Em L, para qualquer derição");
    break;
  case "rainha":
    console.log(b + " -> " + "Em todas as direções, indefinidamente")
    break;
  case "rei":
    console.log(b + " -> " + "Em todas as direções, uma casa")
    break;
  default :
    console.log("Erro. Essa não é uma peça de xadrez");
    break;
}
