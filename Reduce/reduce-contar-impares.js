let numeros = [3, 6, 5, 10, 9, 12, 17];
let acum = 0;
let impares = numeros.reduce((acum, numero) => {
  return acum + (numero % 2 != 0);
});

console.log(impares);
