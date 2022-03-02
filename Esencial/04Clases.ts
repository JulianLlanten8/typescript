class Mapa {
  protected posX: number;
  posY: number;
  ancho: number;
  alto: number;

  constructor(posX: number, posY: number, ancho: number, alto: number) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
  }
  private get getPosX(): number {
    return this.posX
  }

  set setPosX(posX: number) {
    this.posX = posX;
  }

  get getPosY(): number {
    return this.posY
  }

  set setPosY(posY: number) {
    this.posY = posY;
  }

  get getAncho(): number {
    return this.ancho
  }

  set setAncho(ancho: number) {
    this.ancho = ancho;
  }

  get getAlto(): number {
    return this.alto
  }

  set setAlto(alto: number) {
    this.alto = alto;
  }
  localizacion(posX: number, posY: number) {
    return posX + posY;
  }
}
let mapa: Mapa = new Mapa(10, 5, 25, 45);

class Mapa2 extends Mapa {
  color: string;
  constructor(posX: number, posY: number, ancho: number, alto: number, color: string) {
    super(posX, posY, ancho, alto);
    this.color = color;
  }
  informacion() {
    console.log(this.posX); //aqui si puedo acceder
  }
}
let mapa2: Mapa2 = new Mapa2(1, 2, 3, 8, "blue");

console.table(mapa);
console.table(mapa2);
//console.log(mapa.posX); //aqui no puedo acceder