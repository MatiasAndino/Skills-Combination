class OndaSoporte extends Habilidad {
    aplicar(proyectil) {
      proyectil.y = height / 2 + sin(frameCount * 0.2) * 20;
    }
  }