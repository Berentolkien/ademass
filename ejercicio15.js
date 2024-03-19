// ¿Cómo se declara una función 'filtrarPares' que acepta un array de números y devuelve un nuevo array con solo los números pares, utilizando el método 'filter()'?

function filtrarPares(numeros) {
    return numeros.filter(numeros => numeros % 2 === 0);
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numeros);

console.log(numerosPares);