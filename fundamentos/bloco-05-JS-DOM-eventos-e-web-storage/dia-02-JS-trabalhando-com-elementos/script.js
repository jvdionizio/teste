const pai = document.querySelector("#elementoOndeVoceEsta").parentElement;
pai.style.color = 'red'

document.querySelector("#primeiroFilhodoFilho").innerText = 'Primeiro filho pai, slc';

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').parentElement.firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling.nextElementSibling)

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

let irmão = document.createElement('div');
irmão.innerText = 'farofadagkay';
pai.appendChild(irmão);

let filhao= document.createElement('div');
filhao.innerText = 'é o filhão, né pai?';
filhao.style.margin = '30px';
filhao.className = 'filhas'
document.querySelector('#elementoOndeVoceEsta').appendChild(filhao);

let filho = document.createElement('div');
filho.innerText = 'é o filho do irmão do filhão, ai tomaaa!!!!';
filho.style.margin = '60px';
document.querySelector('#primeiroFilhodoFilho').appendChild(filho);

console.log(filho.parentElement.parentElement.nextElementSibling)

let filhao2 = document.querySelector('.filhas')
if (filhao2.innerText.includes('né')) {
  document.querySelector('#elementoOndeVoceEsta').removeChild(filhao2);
}