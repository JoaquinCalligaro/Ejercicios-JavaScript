let numeros = [2, 5, 8, 1, 4, 7, 3, 6];
let acum = 0;
let filtro = numeros.filter((numero) => numero > 4);
let maper = filtro.map((filtro) => filtro * 2);
let reducer = maper.reduce((acum, maper) => {
  return acum + maper;
});

console.log(filtro);
console.log(maper);
console.log(reducer);
