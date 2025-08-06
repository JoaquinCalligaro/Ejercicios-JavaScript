let numeros = [2, 4, 6, 8, 10];
let acum = 0;
let res = numeros.reduce((acum, numero) => {
  return (acum = acum + numero);
});
console.log(res);
