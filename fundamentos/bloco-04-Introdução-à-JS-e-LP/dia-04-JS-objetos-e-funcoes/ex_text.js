function hydrate(bebidas) {
  // seu código aqui
  let array = bebidas.split('');
  let contadorAgua = 0;
  for (let index in array) {
    switch (array[index]){
      case '1':
      contadorAgua += 1;
      break;
      case '2':
      contadorAgua += 2;
      break;
      case '3':
      contadorAgua += 3;
      break;
      case '4':
      contadorAgua += 4;
      break;
      case '5':
      contadorAgua += 5;
      break;
      case '6':
      contadorAgua += 6;
      break;
      case '8':
      contadorAgua += 8;
      break;
      case '9':
      contadorAgua += 9;
      break;
    }
  }
  if (contadorAgua === 1) {
    let agua = contadorAgua + ' copo de água';
    return agua;
  }
  else{
    let agua = contadorAgua + ' copos de água';
    return agua;
  }
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));