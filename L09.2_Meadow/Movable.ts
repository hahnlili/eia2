namespace L09_Meadow  {

    export class Movable {
        position: Vector;
        velocity: Vector;
        

        constructor(_size: Vector, _position: Vector, _velocity: Vector, _x: number, _y: number) {
           // console.log("Movable constructor");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
                       
        }

        move(_timeslice: number): void {
            console.log("Movable move");
          
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
     
            if (this.position.y < 0)
            this.position.y += crc2.canvas.height/golden; 
    
            if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
    
             if (this.position.y > crc2.canvas.height/golden)
            this.position.y -= crc2.canvas.height; 

        }

        draw(): void {

            //console.log("Movable move");

        }
    }
}
