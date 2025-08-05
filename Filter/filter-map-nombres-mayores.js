let personas = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'Luis', edad: 25 },
  { nombre: 'Sofía', edad: 30 },
  { nombre: 'Juan', edad: 18 },
];

let mayores = personas.filter((persona) => persona.edad > 21);
let nombres = mayores.map((persona) => persona.nombre);

console.log(nombres);
