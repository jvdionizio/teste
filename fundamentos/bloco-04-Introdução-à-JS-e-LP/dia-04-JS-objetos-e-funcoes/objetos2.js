player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2, 
    silver: 3,
  },
};
let years = "";
let contador = 1;

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

function bestYears() {
  years += " " + player.bestInTheWorld[0]
  for (i = 1; i < player.bestInTheWorld.length; i++){
    years += ", " + player.bestInTheWorld[i];
    contador += 1;
  }
  return years;
}

bestYears();

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleteita a melhor do mundo " + contador + " vezes, em" + years);

console.log("A jogadora possui " + player.medals.golden + " de ouro e " + player.medals.silver + " de prata.");
