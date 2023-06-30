class Item {
    constructor() {
      this.sockets = [null, null, null, null]; // Matriz de sockets
    }
  
    agregarHabilidad(habilidad) {
      this.sockets[0] = habilidad;
    }
  
    agregarSoporte(soporte) {
      const socketVacio = this.sockets.findIndex((socket) => socket === null);
      if (socketVacio > 0) {
        this.sockets[socketVacio] = soporte;
      }
    }
  
    quitarSoporte(index) {
      if (index > 0 && index < this.sockets.length) {
        this.sockets[index] = null;
      }
    }
    
    aplicarSoportes(proyectil) {
        for (let i = 0; i < this.sockets.length; i++) {
            const socket = this.sockets[i];
            if (socket instanceof Habilidad) {
                socket.aplicar(proyectil);
            }
        }
    }
}
