//Objetos
let persona: {
  nombre: string,
  apellido: string,
  edad: number,
  presentarse(): string
} = {
  nombre: "Hugo",
  apellido: 'Llanten',
  edad: 25,
  presentarse() {
    return `Hola mi nombre es: ${this.nombre} y mi apellido es ${this.apellido} ,tengo ${this.edad} años`;
  }
}
console.log(persona.presentarse());

//Tipos 

type asignaturas = {
  matematicas: boolean,
  fisica: boolean,
  quimica: boolean,
  algoritmia: boolean,
  redes: boolean,
  ingles: boolean,
  activo: () => boolean
}
//Creacion de un objeto apartir de un tipo
let yo: asignaturas = {
  matematicas: true,
  fisica: true,
  quimica: false,
  algoritmia: true,
  redes: true,
  ingles: true,
  activo() {
    return true
  }
}
console.table(yo);