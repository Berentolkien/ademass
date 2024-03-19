// ¿Cómo se declara un array llamado 'numeros' que contenga los números del '1 al 5', utilizando el método 'Array.from()'?

let numeros = Array.from({length: 5}, (_, index) => index + 1)