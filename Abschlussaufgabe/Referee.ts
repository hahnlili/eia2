namespace Soccer {

    export class Referee extends Movable {

        public refereePosition: Vector = new Vector(0, 0);

        constructor() {
            super();
        }

        move(_timeslice: number): void {

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