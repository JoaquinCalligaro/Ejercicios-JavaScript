let numeros = [5, 10, 2, 3, 4, 12, 22, 54, 100];
let acum = 0;
let mayores = numeros.reduce((acum, numero) => {
  return acum + (numero > 5);
});

console.log(mayores);
