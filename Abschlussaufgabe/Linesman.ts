namespace Soccer {

    export class Linesman extends Movable {

        private xMin: number;
        private xMax: number;
        

        constructor(_xMin: number, _xMax: number, _y: number) {
            super();
            this.position.x = _xMax;
            this.position.y = _y;

            this.xMax=_xMax;
            this.xMin=_xMin;


        }

        move(_timeslice: number): void {

            if(ball.position.x <= this.xMax && ball.position.x >= this.xMin){
                this.position.x = ball.position.x;

            }
            
            
        }

        public draw(): void {
            //save speichert den aktuellen stand.
            crc2.save();

            //hier wirds positioniert
            crc2.translate(this.position.x, this.position.y);


            //Body
            crc2.beginPath();
            crc2.arc(0, 30, 30, 0, Math.PI, true);
            crc2.closePath();
            crc2.fillStyle = "blue";
            crc2.fill();

            //Head
            crc2.beginPath();
            crc2.arc(0, -10, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "blue";
            crc2.fill();

            //ursprungs stand restored, nur dann im nächsten Schritt an andere position translated
            crc2.restore();
        }
    }
}