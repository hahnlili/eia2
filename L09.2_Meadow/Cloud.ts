namespace L09_Meadow  {

    export class Cloud extends Movable {
        position: Vector;
        velocity: Vector;
        size: Vector;

        constructor(_size: Vector, _position: Vector, _velocity: Vector, _x: number, _y: number) {

            super(_size, _velocity, _position, _x, _y);

            console.log("Hier werden Wolken bewegt");


            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;


        }

         move(_timeslice: number): void {
            console.log("hier bewegt sich eine Wolke");
             let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board"); 
             let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d"); 

             let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset); 

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;

            if (this.position.y < 200)
                this.position.y += crc2.canvas.height / golden;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y > crc2.canvas.height / golden)
                this.position.y -= crc2.canvas.height;   
        } 


            draw(): void {

                console.log("Wolken!");
            
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                crc2.beginPath();
                crc2.moveTo(170, 80);
                crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
                crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
                crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
                crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
                crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
                crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
                crc2.closePath();
                crc2.lineWidth = 5;
                crc2.fillStyle = '#ffffff';
                crc2.fill();
                crc2.strokeStyle = '#ffffff';
                crc2.stroke();

                crc2.restore();

            }
        }
    }
