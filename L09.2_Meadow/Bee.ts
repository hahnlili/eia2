namespace L09_Meadow {

    export class Bee {
        position: Vector;
        velocity: Vector;

        constructor(_size: number) {
            console.log("Bienen kommen auch irgendwo her");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

        }

        move(_timeslice: number): void {
            console.log("hier bewegt sich eine fleißige Biene");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }
        draw(): void {
            console.log("hier werden steine gemalt");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.translate(-50, -50);

            crc2.restore();

        }
    }
}