//objetos
var persona = {
    nombre: "Hugo",
    apellido: 'Llanten',
    edad: 25,
    presentarse: function () {
        return "Hola mi nombre es: ".concat(this.nombre, " y mi apellido es ").concat(this.apellido, " tengo ").concat(this.edad, " a\u00F1os");
    }
};
console.log(persona.presentarse());
//creacion de un objeto apartir de un tipo
var yo = {
    matematicas: true,
    fisica: true,
    quimica: false,
    algoritmia: true,
    redes: true,
    ingles: true,
    activo: function () {
        return true;
    }
};
console.table(yo);
