namespace L09_Meadow  {

    export class Bee extends Movable {
        position: Vector;
        velocity: Vector;


        constructor(_position: Vector, _velocity: Vector, _size: Vector, _x: number, _y: number) {
            super(_velocity, _position, _size, _x, _y);
            console.log("Bienen kommen auch irgendwo her");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);


        }

/*         move(_timeslice: number): void {
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

        } */

        draw(): void {
            console.log("hier werden steine gemalt");
            crc2.save();
       crc2.translate(this.position.x, this.position.y);
       
       crc2.beginPath();
       crc2.fillStyle = "#fdfd96";
       crc2.ellipse(this.position.x , this.position.y , 15, 20, Math.PI / 2, 0, 2 * Math.PI);
       crc2.arc(this.position.x + 20, this.position.y - 5, 10, 0, 2 * Math.PI);
       crc2.fill();
       crc2.closePath();
       //streifen
       crc2.beginPath();
       crc2.fillStyle = "black";
       crc2.ellipse(this.position.x ,this.position.y , 15, 10, Math.PI / 2, 0, 1 * Math.PI);
       crc2.fill();
       crc2.closePath();
           //Flügel 
       crc2.beginPath();
       crc2.fillStyle = "lightBlue";
       crc2.ellipse(this.position.x - 10, this.position.y - 20, 8, 20, Math.PI / -5, 0, 2 * Math.PI);
       crc2.fill();
       crc2.closePath();
        //Auge 
       crc2.beginPath();
       crc2.fillStyle = "black";
       crc2.arc(this.position.x + 24, this.position.y - 6, 2, 0, 2 * Math.PI);
       crc2.fill();
       crc2.closePath();
 
           // Stachel 
       crc2.beginPath();
       crc2.fillStyle = "black";
       crc2.moveTo(this.position.x - 20 , this.position.y );
       crc2.lineTo(this.position.x - 20, this.position.y + 6);
       crc2.lineTo(this.position.x - 30, this.position.y + 3);
       crc2.fill();
       crc2.closePath();
       crc2.restore();

        }
    }
}