namespace Soccer {

    export class Ball extends Movable {

        //will ich, dass der Ball erstmal eine feste Position hat?

        public dest: Vector = new Vector(crc2.canvas.width * 0.5, crc2.canvas.height * 0.5);

        constructor() {
            super();
            crc2.canvas.addEventListener("click", this.clickBall.bind(this));
            this.position.x = this.dest.x;
            this.position.y = this.dest.y;
        }

        private clickBall(_event: MouseEvent): void {
            console.log("gehst du da rein?");
            let x: number = _event.offsetX;
            let y: number = _event.offsetY;
            //brauche presicion vom aktiven spieler--> diese präzision auf destination addieren mit random vektor
            this.dest = Vector.getSum(new Vector(x, y), Vector.getUberVector(30,Vector.getRandom(-1, 1)));
            //console.log(this.dest);
           /*  this.position.x = this.dest.x;
            this.position.y = this.dest.y; */
        }

        public move(_timeslice: number): void {

            let a = this.dest.x - this.position.x;
            let b = this.dest.y - this.position.y;
            //wichtig für wird langsamer
            let distance = Math.sqrt((a * a) + (b * b));

            this.position.x = this.position.x + a/3;
            this.position.y = this.position.y + b/3;
        
        }

        public getBallPosition(_playerPosition: Vector): void{
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
