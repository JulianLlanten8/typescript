var Persona = /** @class */ (function () {
    function Persona(nombre, edad, dni) {
        this.nombre = nombre,
            this.edad = edad,
            this.dni = dni;
    }
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setEdad", {
        set: function (edad) {
            this.edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getEdad", {
        get: function () {
            return this.edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setDni", {
        set: function (dni) {
            this.dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getDni", {
        get: function () {
            return this.dni;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.mostrar = function () {
        this.getNombre;
        this.getEdad;
        this.getDni;
    };
    Persona.prototype.esMayorDeEdad = function () {
        var respuesta = false;
        if (this.edad && this.edad >= 18) {
            respuesta = true;
        }
        return respuesta;
    };
    return Persona;
}());
var me = new Persona('Hugo Julian Llanten Idrobo', 25, 1143868);
console.log(me);
console.log(me.esMayorDeEdad());
