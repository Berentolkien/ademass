// ¿Cómo se implementa la herencia de clases en JavaScript utilizando el sistema de clases introducido en 'ECMAScript 6'?


class Animal {
    constructor(nombre) {
    this.nombre = nombre;
    }
    caminar() {
    console.log(`${this.nombre} está caminando.`);
    }
    }
    class Perro extends Animal {
    constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
    }
    ladrar() {
    console.log('${this.nombre} está ladrando.');
    }
    }
    let max = new Perro('Max', 'Labrador');