// Escribe una función 'deepClone(objeto)'' que realice una copia profunda de un objeto, es decir, que copie todos sus elementos internos recursivamente.

function deepClone(objeto){
    if (typeof objeto !== 'object' || objeto === null) {
        return objeto;
    }
    
    let nuevoObjeto = Array.isArray(objeto) ? [] : {};
    for (let clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            nuevoObjeto[clave] = deepClone(objeto[clave]);
        }
    }
    return nuevoObjeto;
}
