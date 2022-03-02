//Funcion decalrada
function saludar(saludo: string): string {
  return `${saludo}`;
}
console.log(saludar('hola'));

//function expresada
const despedidir = function (despedida: string): string {
  return `${despedida}`
}
console.log(despedidir('hasta luego'));

//funcion flecha
const posicion = (y: number, x: number): number => {
  return y + x;
}
console.log(posicion(100.05,50.25));

//Prametros por defecto
const sumaPordefecto = (y: number = 2, x: number = 3): number => {
  return y + x;
}
console.log(sumaPordefecto());

//funcion devuelve el los nombres de animales por el operador rest ...
function animales(...listAnimales:string[]):string[]{
  return listAnimales;
}
console.table(animales('leon','tigre','gato','perro'));