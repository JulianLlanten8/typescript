//tipos de datos:
var boleano = true;
var minombre = 'Julian Llanten';
var numero = 1;
var indefinido = undefined;
var nulo = null;
var cualquiera = 'cualquier cosa';
console.log(typeof cualquiera);
//tuplas y arrays
var arreglo = ['cosas', 'canciones', 'musica', 'siguiente', 'aleatorio'];
var casa = ['cosas', true, 1];
console.table(casa);
//enum o enumerables
var paises;
(function (paises) {
    paises[paises["colombia"] = 1] = "colombia";
    paises[paises["venezuela"] = 2] = "venezuela";
    paises[paises["brasil"] = 3] = "brasil";
    paises[paises["ecuador"] = 4] = "ecuador";
    paises[paises["bolivia"] = 5] = "bolivia";
    paises[paises["chile"] = 6] = "chile";
    paises[paises["uruguay"] = 7] = "uruguay";
    paises[paises["paraguay"] = 8] = "paraguay";
    paises[paises["argentina"] = 9] = "argentina";
})(paises || (paises = {}));
var pais = paises.chile;
console.log(pais);
//void: vacio
function saludo(nombre) {
    console.log("Buenos dias!!", "".concat(nombre));
}
;
saludo('Hugo Julian');
//Never: Nunca
function error(frase) {
    throw new Error(frase);
}
error('Error fatal!! \n no se puede segir ejecutando el codigo');
