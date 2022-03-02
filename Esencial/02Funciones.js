//Funcion decalrada
function saludar(saludo) {
    return "".concat(saludo);
}
console.log(saludar('hola'));
//function expresada
var despedidir = function (despedida) {
    return "".concat(despedida);
};
console.log(despedidir('hasta luego'));
//funcion flecha
var posicion = function (y, x) {
    return y + x;
};
console.log(posicion(100.05, 50.25));
//Prametros por defecto
var sumaPordefecto = function (y, x) {
    if (y === void 0) { y = 2; }
    if (x === void 0) { x = 3; }
    return y + x;
};
console.log(sumaPordefecto());
//funcion devuelve el los nombres de animales por el operador rest ...
function animales() {
    var listAnimales = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listAnimales[_i] = arguments[_i];
    }
    return listAnimales;
}
console.table(animales('leon', 'tigre', 'gato', 'perro'));
