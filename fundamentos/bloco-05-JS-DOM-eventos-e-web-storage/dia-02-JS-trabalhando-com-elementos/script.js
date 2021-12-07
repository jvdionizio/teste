const pai = document.querySelector("#elementoOndeVoceEsta").parentElement;
pai.style.color = 'red'

document.querySelector("#primeiroFilhodoFilho").innerText = 'Primeiro filho pai, slc';

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').parentElement.firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling.nextElementSibling)

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);
