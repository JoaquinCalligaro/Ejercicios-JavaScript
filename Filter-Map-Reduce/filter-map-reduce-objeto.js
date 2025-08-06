let personas = [
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Pedro', edad: 17 },
  { nombre: 'Lucía', edad: 30 },
  { nombre: 'Juan', edad: 15 },
  { nombre: 'Sofía', edad: 25 },
  { nombre: 'Martín', edad: 19 },
];
let acum = {};
let mayores = personas.filter((persona) => persona.edad > 18);
let mayusculas = personas.map((persona) => persona.nombre.toUpperCase());
let texto = mayusculas.reduce((acum, mayusculas) => {
  return `${acum} ,  ${mayusculas.toString()}`;
});

console.log(mayores);
console.log(mayusculas);
console.log(texto);
