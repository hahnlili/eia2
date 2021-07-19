namespace Soccer {

    export class Referee extends Movable {

        private refereeStart: Vector = new Vector(crc2.canvas.width * 0.5, crc2.canvas.height * 0.9);


        constructor() {
            super();

            this.position.x = this.refereeStart.x;
            this.position.y = this.refereeStart.y;

        }

        move(_timeslice: number): void {
            
            //richtung
            let a = ball.position.x - this.refereeStart.x;
            let b = ball.position.y - this.refereeStart.y;

            //abstand
            let ballDistance = Math.sqrt((a * a) + (b * b));

            let dirX = (ball.position.x + 200) - this.position.x;
            let dirY = (ball.position.y + 200) - this.position.y;


            this.position.x = this.position.x + dirX / 3;
            this.position.y = this.position.y + dirY / 3;
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
            crc2.fillStyle = "black";
            crc2.fill();

            //Head
            crc2.beginPath();
            crc2.arc(0, -10, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            //ursprungs stand restored, nur dann im nächsten Schritt an andere position translated
            crc2.restore();
        }
    }
}