let nombres = ['Ana', 'Pedro', 'Lucía', 'Juan', 'Sofía', 'Martín'];
let acum = {};
let reducir = nombres.reduce((acum, nombre) => {
  acum[nombre] = nombre.length;
  return acum;
}, {});
console.log(reducir);
