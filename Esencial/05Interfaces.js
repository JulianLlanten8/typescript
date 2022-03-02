var hugo = {
    nombre: "hugo",
    apellido: "Llanten",
    edad: 25,
    isCasado: true,
    runnig: function () { return true; }
};
var Personas = /** @class */ (function () {
    function Personas(nombre, apellido, edad, isCasado, empleo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.isCasado = isCasado;
        this.empleo = empleo;
    }
    Personas.prototype.runnig = function () {
        return true;
    };
    return Personas;
}());
var pajaro;
pajaro = function (vuela) {
    return vuela;
};
console.log(pajaro(true));
