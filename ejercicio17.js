// ¿Cómo se implementa la herencia prototípica en JavaScript utilizando el patrón de diseño de fábrica de funciones (Factory Functions)?

function crearAnimal(nombre) {
    let animal = {};
    animal.nombre = nombre;
    animal.caminar = function() {
        console.log(`${this.nombre} esta caminando.`);
    };
    return animal;
}
let perro = crearAnimal('Max');