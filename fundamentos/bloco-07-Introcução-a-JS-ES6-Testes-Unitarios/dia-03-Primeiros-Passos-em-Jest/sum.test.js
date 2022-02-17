const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
} = require('./sum');

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError(Error);
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});

describe('testa a função myRemove', () => {
  it('deve retornar o array sem o item indicado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
    expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1,2,3,4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('testa a função myFizzBuzz', () => {
  it('deve retornar "fizzbuzz" se o número for divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('deve retornar "fizz" se o número for divisível apenas por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('deve retornar "buzz" se o número for divisível apenas por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('deve retornar próprio número caso não seja divisível por 3 ou 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('deve retornar false caso o parêmetro não seja um número', () => {
    expect(myFizzBuzz('7')).toBe(false);
  });
});

describe('testa as funçoẽs encode e decode', () => {
  it('verifica se as funções são capazes de codificar e decodificar', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });
  it('verifica se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('a,e,i,o,t')).toBe('1,2,3,4,t');
    expect(decode('1,2,3,4,8')).toBe('a,e,i,o,8');
  });
  it('verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('aeiou').length).toEqual(5);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

