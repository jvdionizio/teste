function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(frase) {
  let fraseCod = frase.split('');
  for (let index in fraseCod) {
    if (fraseCod[index] === 'a') {
      fraseCod[index] = 1;
    } else if (fraseCod[index] === 'e') {
      fraseCod[index] = 2;
    } else if (fraseCod[index] === 'i') {
      fraseCod[index] = 3;
    } else if (fraseCod[index] === 'o') {
      fraseCod[index] = 4;
    } else if (fraseCod[index] === 'u') {
      fraseCod[index] = 5;
    }
  }
  let resultado = fraseCod.join('');
  return resultado;
};

function decode(frase) {
  let fraseCod = frase.split('');
  for (let index in fraseCod) {
    if (fraseCod[index] === '1') {
      fraseCod[index] = 'a';
    } else if (fraseCod[index] === '2') {
      fraseCod[index] = 'e';
    } else if (fraseCod[index] === '3') {
      fraseCod[index] = 'i';
    } else if (fraseCod[index] === '4') {
      fraseCod[index] = 'o';
    } else if (fraseCod[index] === '5') {
      fraseCod[index] = 'u';
    }
  }
  let resultado = fraseCod.join('');
  return resultado;
};

function techList(techs, name) {
  let organizedTechs = techs.sort();
  let list = [];
  if (organizedTechs <= 0) {
    let saida = 'Vazio!';
    return saida;
  }
  for (let index in organizedTechs) {
    list.push({
      tech: organizedTechs[index],
      name: name,
    });
  }
  return list;
};

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
};