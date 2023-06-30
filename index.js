let item;
let proyectil;

function setup() {
	createCanvas(400, 300);
	
	
	item = new Item();
	proyectil = new Proyectil(width / 2 - 8, height / 2 - 6, 2);
	
	item.agregarHabilidad(proyectil);
	
	item.agregarSoporte(new CircularSoporte());
	// item.agregarSoporte(new OndaSoporte());
}

function draw() {
	background(220);
	noFill(255,0,0)
	rect(width / 2 - 10, height / 2 - 10, 20, 20)
	
	// circle(width / 2, height / 2, 90)

	item.aplicarSoportes(proyectil);
	proyectil.mover();
	proyectil.mostrar();
	
	if (proyectil.x > width - 100) {
		proyectil = new Proyectil(width / 2, height / 2, 2);
 	}
}