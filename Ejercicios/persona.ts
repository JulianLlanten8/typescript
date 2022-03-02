class Persona {
  /* atributos : nombre, edad y DNI */
  nombre: string;
  edad: number;
  dni: number;
  constructor(nombre: string, edad: number, dni: number) {
    this.nombre = nombre,
      this.edad = edad,
      this.dni = dni;
  }
  set setNombre(nombre: string) {
    this.nombre = nombre;
  }
  get getNombre(): string {
    return this.nombre
  }

  set setEdad(edad: number) {
    this.edad = edad;
  }
  get getEdad(): number {
    return this.edad
  }

  set setDni(dni: number) {
    this.dni = dni;
  }
  get getDni(): number {
    return this.dni
  }
  mostrar() {
    this.getNombre;
    this.getEdad;
    this.getDni;
  }
  esMayorDeEdad(): boolean {
    let respuesta :boolean = false;
    if (this.edad && this.edad >= 18) {
      respuesta = true;
    }
    return respuesta;
  }
}
let me : Persona = new Persona('Hugo Julian Llanten Idrobo',25,1143868);

console.log(me);
console.log(me.esMayorDeEdad());