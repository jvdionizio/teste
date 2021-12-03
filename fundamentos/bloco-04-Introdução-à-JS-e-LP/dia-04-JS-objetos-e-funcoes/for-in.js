let pizzas = {
  sabor: "Palmito",
  preco: 39.9,
  bordaCatupiry: true,
};

for (let key in pizzas) {
  console.log(pizzas[key]) 
};

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key])
}

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
};
for (let value of food) {
  console.log(value);
};