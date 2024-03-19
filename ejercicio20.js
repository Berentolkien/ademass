// Escribe una función 'curry(función)'' que tome una función y la convierta en su forma currificada, es decir, que pueda ser llamada parcialmente.	


function curry(funcion) {
    return function curried(...args) {
    if (args.length >= funcion.length) {
    return funcion.apply(this, args);
    } else {
    return function(...args2) {
    return curried.apply(this, args.concat(args2));
    };
    }
    };
    }
    
    function sumar(a, b, c) {
    return a + b + c;
    }
    
    let sumarCurried = curry(sumar);
    let sumar5 = sumarCurried(5);
    let sumar5y6 = sumar5(6);
    let resultado = sumar5y6(7); // Devuelve 18