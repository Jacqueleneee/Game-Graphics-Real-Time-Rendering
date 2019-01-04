class rotatingObject extends LoadedOBJ {

	constructor(objstr) {
		super(objstr);
		this.last = Date.now();
        this.angle = 0.0;
        this.color = [rgba[0], rgba[1], rgba[2], 1.0];
        this.originalMatrix = this.modelMatrix;
        for (let i = 0; i < this.vertices.length; i++) {
            this.vertices[i].points = this.vertices[i].points.elements;
        }
        console.log("OBJECT ADDED");
	}

	updateAnimation() {
		let now = Date.now();
        let elapsed = now - this.last;
        this.last = now;
        this.angle = this.angle + (0.25 * elapsed);
        this.angle %= 360;
        let temp = this.originalMatrix;
        temp.rotate(1.0, 0.2, 20.0, 1);
        this.modelMatrix = temp;
	}

}