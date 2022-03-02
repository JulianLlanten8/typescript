interface Persona {
  nombre: string,
  apellido: string,
  edad: number,
  isCasado: boolean,
  runnig(): boolean,
}

let hugo: Persona = {
  nombre: "hugo",
  apellido: "Llanten",
  edad: 25,
  isCasado: true,
  runnig() { return true }
}

class Personas implements Persona {
  nombre: string;
  apellido: string;
  edad: number;
  isCasado: boolean;
  empleo: string;

  constructor(nombre: string, apellido: string, edad: number, isCasado: boolean, empleo: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.isCasado = isCasado;
    this.empleo = empleo;
  }
  public runnig(): boolean {
    return true;
  }
}

interface Movimiento {
  (valor: boolean): boolean;
}

let pajaro: Movimiento;
pajaro = function (vuela: boolean) {
  return vuela;
}

console.log(pajaro(true));