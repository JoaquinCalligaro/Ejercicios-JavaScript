let numeros = [0, 1, 2, 4, 6, 13, 22, 5, 21, 25, 50, 100];

function filtrarParesEImpares(arr) {
  let cero = [];
  let pares = [];
  let impares = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (arr[i] === 0) {
        cero.push(arr[i]);
      } else {
        pares.push(arr[i]);
      }
    } else {
      impares.push(arr[i]);
    }
  }
  return {
    cero: cero,
    pares: pares,
    impares: impares,
  };
}

console.log(filtrarParesEImpares(numeros));
