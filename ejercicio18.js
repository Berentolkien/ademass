// Escribe una función 'debounce(función, espera)'' que retorne una nueva función que solo puede ser ejecutada una vez transcurrido un cierto período de tiempo ('espera') después de la última vez que se llamó.

function debounce(funcion, espera) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            funcion.apply(this, args);
        }, espera);
    };
}