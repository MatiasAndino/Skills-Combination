class Proyectil {
    constructor(x, y, velocidad) {
      this.x = x;
      this.y = y;
      this.velocidad = velocidad;
      this.ancho = 10;
      this.alto = 5;
    }
  
    mover() {
      this.x += this.velocidad;
    }
  
    mostrar() {
      rect(this.x, this.y, this.ancho, this.alto);
    }
  }
  