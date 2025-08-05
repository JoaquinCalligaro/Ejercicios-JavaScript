let personas = [
  {
    nombre: 'Ana',
    edad: 20,
  },
  {
    nombre: 'Luis',
    edad: 25,
  },
  {
    nombre: 'Sofia',
    edad: 30,
  },
];

let texto = personas.map(
  (persona) => `Nombre: ${persona.nombre} , Edad: ${persona.edad}`
);

console.log(texto);
