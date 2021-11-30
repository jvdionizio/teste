let megaSenaNumbers = [];

let firstNumber = Math.floor(Math.random()*60)+1;
let secondNumber = Math.floor(Math.random()*60)+1;
let thirdNumber = Math.floor(Math.random()*60)+1;
let fourthNumber = Math.floor(Math.random()*60)+1;
let fifthNumber = Math.floor(Math.random()*60)+1;
let sixthNumber = Math.floor(Math.random()*60)+1;

megaSenaNumbers.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);

let firstPlay = [6, 27, 58, 12, 7, 60];
let secondPlay = [19, 32, 48 ,52, 10, 25];

let numberOfHits = 0;

for (let i = 0; i < megaSenaNumbers.length; i++){
  for (let j = 0; j < firstPlay.length; j++){
    if (megaSenaNumbers[i] === firstPlay[j]) {
      numberOfHits += 1;
    }
  }
}
console.log("Números sorteados " + megaSenaNumbers);

console.log("Nossas tentativas: " + firstPlay);

console.log("Quantos acertos: " + numberOfHits);