let proyectil;

// Función de configuración
function setup() {
  createCanvas(400, 300);
  proyectil = new Proyectil(0, height / 2, 2);
}

// Función de dibujo
function draw() {
  background(220);
  proyectil.mover();
  proyectil.mostrar();

  if (proyectil.x > width) {
    proyectil.x = 0;
  }
}