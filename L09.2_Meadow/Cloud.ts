namespace L09_Meadow {

    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor(_size: number) {
            console.log("Hier werden Wolken bewegt");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

        }

        move(_timeslice: number): void {
            console.log("hier bewegt sich eine Wolke");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;

            if (this.position.y / 2 < 0)
                this.position.y += crc2.canvas.height;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y / 2 > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }
        draw(): void {

            function drawCloud(_position: Vector, _size: Vector): void {

                console.log("hier werden steine gemalt");
                //nParticles ist die anzahl der Particel aus denen sich die Wole zusammensetzt
                let nParticles: number = 5;
                let radiusParticle: number = 60;
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
                let particle: Path2D = new Path2D();

                particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI,);
                gradient.addColorStop(0, "HSLA(295, 28%, 84%, 0.5)");
                gradient.addColorStop(1, "HSLA(295, 28%, 84%, 0)");

                crc2.save();
                crc2.translate(_position.x, _position.y);
                crc2.fillStyle = gradient;

                for (let drawn: number = 0; drawn < nParticles; drawn++) {
                    crc2.save();
                    let x: number = (Math.random() - 0.5) * _size.x;
                    let y: number = - (Math.random() * _size.y);
                    crc2.translate(x, y);
                    crc2.fill(particle);
                    crc2.restore();
                }
                crc2.restore();
            }
            
        }
    }
}