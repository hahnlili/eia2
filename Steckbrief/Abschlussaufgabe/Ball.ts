namespace Soccer {

    export class Ball extends Movable {

        //will ich, dass der Ball erstmal eine feste Position hat?

        public dest: Vector = new Vector(crc2.canvas.width * 0.5, crc2.canvas.height * 0.5);
        private startPosition: Vector = new Vector(0, 0);


        constructor() {
            super();
            crc2.canvas.addEventListener("click", this.clickBall.bind(this));

            this.position.x = this.dest.x;
            this.position.y = this.dest.y;

            this.startPosition = this.position.copy();
        }

        public clickBall(_event: MouseEvent): void {

            //hier muss der aktuelle spieler auch ins HTML kommen


            if (actualPlayer == null) {
                return;
            }


            let x: number = _event.offsetX;
            let y: number = _event.offsetY;
            //brauche presicion vom aktiven spieler--> diese präzision auf destination addieren mit random vektor
            this.dest = Vector.getSum(new Vector(x, y), Vector.getUberVector(actualPlayer.precision * Math.random(), Vector.getRandom(-1, 1)));

            actualPlayer = null;
            //console.log(this.dest);
            /*  this.position.x = this.dest.x;
             this.position.y = this.dest.y; */

        }

        public isOnDestination(): boolean {

            //erklärung was genau hier passiert?
            let a = this.dest.x - this.position.x;
            let b = this.dest.y - this.position.y;
            let dir = new Vector(a, b);
            if (dir.length <= 2)
                return true;
            else
                return false;

        }

        public move(_timeslice: number): void {
            let startPosition: Vector = new Vector(crc2.canvas.width * 0.5, crc2.canvas.height * 0.5);
            let a = this.dest.x - this.position.x;
            let b = this.dest.y - this.position.y;
            //wichtig für wird langsamer
            let distance = Math.sqrt((a * a) + (b * b));

            this.position.x = this.position.x + a / 3;
            this.position.y = this.position.y + b / 3;

            // wenn ball das Canvas verlässt, soll er wieder in der Mitte auftauchen :(
            if (this.position.x > crc2.canvas.width){
                this.position = this.startPosition.copy();
                this.dest = this.startPosition.copy();
            }

            if (this.position.y > crc2.canvas.height) {
                this.position = this.startPosition.copy();
                this.dest = this.startPosition.copy();
            }

            if (this.position.x < crc2.canvas.width-crc2.canvas.width){
                this.position = this.startPosition.copy();
                this.dest = this.startPosition.copy();
            }

            if (this.position.y < crc2.canvas.height-crc2.canvas.height) {
                this.position = this.startPosition.copy();
                this.dest = this.startPosition.copy();
            }

            if(this.position.x < 100 && this.position.y > 300 && this.position.y < 600){
                this.position = this.startPosition.copy();
                this.dest = this.startPosition.copy();
                
                displayCountOne();
            }

            if(this.position.x > 1400 && this.position.y > 300 && this.position.y < 600){
                this.position = this.startPosition.copy();
                this.dest = this.startPosition.copy();
                displayCountTwo();
            }
             

        }

        public getBallPosition(_playerPosition: Vector): void {
            // hier schaut ball ob der spieler bei ihm ist, und welcher spieler es ist?

            this.position;

            //console.log(this.position);

        }

        public draw(): void {

            crc2.save();

            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.fill();

            crc2.restore();
        }
    }
}
