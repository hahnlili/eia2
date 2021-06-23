namespace L09_Meadow {

    export class Flower {

        private flowerType: number;
        private nectarFilling: number = 0;
        private position: Vector = new Vector(0, 0);

        constructor(_position: Vector) {

            console.log(_position);
            this.flowerType = Math.round(Math.random());
            this.position = _position;

        }

        draw(): void {


            /* console.log("hallo roland nummer 2" + this.position); */
            let _x: number = this.position.x;
            let _y: number = this.position.y;

            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.beginPath();
            crc2.moveTo(_x, _y)
            crc2.lineTo(_x, _y - 65);
            crc2.closePath();
            crc2.stroke();

            if (this.flowerType == 0) {
                crc2.beginPath();
                crc2.arc(_x, _y - 70, 10, 4, Math.PI);
                crc2.closePath();
                crc2.fillStyle = "#1C4573";
                crc2.fill();
            }
            else {

                let r: number = 10;
                let p: number = 10;
                let m: number = 0.5;

                crc2.fillStyle = "#fdff92";
                crc2.beginPath();
                crc2.save();
                crc2.translate(_x, _y - 65);
                crc2.moveTo(0, 0 - r);
                for (var i = 0; i < p; i++) {
                    crc2.rotate(Math.PI / p);
                    crc2.lineTo(0, 0 - (r * m));
                    crc2.rotate(Math.PI / p);
                    crc2.lineTo(0, 0 - r);
                }
                crc2.closePath();
                crc2.fill();
                crc2.restore();

            }
        }
        public refillNectar(_nectarSpeed: number):void{

            if (this.nectarFilling <= 100){
                this.nectarFilling += _nectarSpeed;
            }
            
        }
        public getNectarAmount():number{
            return this.nectarFilling;
        }
    }
}
