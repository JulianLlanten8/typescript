//tipos de datos:
let boleano: boolean = true;
const minombre: string = 'Julian Llanten';
var numero: number = 1;
let indefinido: undefined = undefined;
let nulo: null = null;

var cualquiera: any = 'cualquier cosa';

console.log(typeof cualquiera);

//tuplas y arrays
let arreglo: string[] = ['cosas', 'canciones', 'musica', 'siguiente', 'aleatorio'];
let casa: [string, boolean, number] = ['cosas', true, 1];

console.table(casa);

//enum o enumerables
enum paises {
  colombia = 1,
  venezuela,
  brasil,
  ecuador,
  bolivia,
  chile,
  uruguay,
  paraguay,
  argentina
}

let pais: number = paises.chile;

console.log(pais);
//void: vacio
function saludo(nombre: string): void {
  console.log("Buenos dias!!", `${nombre}`);
};
saludo('Hugo Julian');

//Never: Nunca
function error(frase: string): never {
  throw new Error(frase);
}
error('Error fatal!! \n no se puede segir ejecutando el codigo');
