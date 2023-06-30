class CircularSoporte extends Habilidad {
    aplicar(proyectil) {
      const radio = 50;
      const velocidadAngular = 0.05;
      const centroX = proyectil.origen.x;
      const centroY = proyectil.origen.y;
    //   const centroX = width / 2;
    //   const centroY = height / 2;
  
      const angulo = frameCount * velocidadAngular;
      const posX = centroX + cos(angulo) * radio;
      const posY = centroY + sin(angulo) * radio;
  
      proyectil.x = posX;
      proyectil.y = posY;
    }
  }