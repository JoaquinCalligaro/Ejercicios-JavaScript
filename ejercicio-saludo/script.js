// Opción 1: Para navegador
// let nombre = prompt('Ingresa tu nombre');
// alert(`Hola!, ${nombre}`);

// Opción 2: Para Node.js (consola)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ingresa tu nombre: ', (nombre) => {
  console.log(`Hola!, ${nombre}`);
  rl.close();
});
