class Proyectil {
    constructor(x, y, velocidad) {
        this.x = x;
        this.y = y;
        this.velocidad = velocidad;
        this.ancho = 10;
        this.alto = 10;
        this.origen = createVector(x,y);
    }
  
    mover() {
      this.x += this.velocidad;
    }
    
    mostrar() {
        fill(0)
        rect(this.x, this.y, this.ancho, this.alto);
    }
}