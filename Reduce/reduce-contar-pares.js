let numeros = [2, 4, 6, 8, 10, 15, 3, 8];
let acum = 0;
let pares = numeros.reduce((acum, numero) => {
  return acum + (numero % 2 === 0);
});

console.log(pares);
