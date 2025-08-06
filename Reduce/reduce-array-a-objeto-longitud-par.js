let nombres = ['Ana', 'Pedro', 'Lucía', 'Juan', 'Sofía', 'Martín'];
let acum = {};

let reducir = nombres.reduce((acum, nombre) => {
  acum[nombre] = nombre.length % 2 === 0;
  return acum;
}, {});

console.log(reducir);
