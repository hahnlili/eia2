namespace Soccer {


    export class Player extends Movable {

        //Brauche ich das? Wenn ja wofür genau?
        private startPosition: Vector;
        private playerNumber: number;
        private team: number;
        private speed: number;
        private precision: number;
        private velocity: Vector;

        constructor(_playerNumber: number, _team: number, _speed: number, _precision: number) {
            //super wenn klasse von anderer klasse erbt
            super(); //in meiner Movables ist keine Position, da jedes movable eine eigene hat --> deshalb hier lehr
            this.position.x = Position.getPlayerPositionX(_team, _playerNumber);
            this.position.y = Position.getPlayerPositionY(_team, _playerNumber);

            //mit this speicher ich 
            this.startPosition = this.position.copy();
            this.playerNumber = _playerNumber;
            this.speed = _speed;
            this.precision = _precision;
            this.team = _team;

            this.velocity = new Vector(0, 0);
            this.velocity.distance(_speed);

            console.log(this.team);
        }

        kickBall(): void {
            //ball zu clickBall position schießen
        }

        //darf meine Player klasse wissen wann sich mein Spieler bewegt oder nur wie?
        //Wenn nein, dann muss das wann ins Main? --> bei meiner Cloud wusste die move
        //glaube ich auch wann und wie sich sich bewegen soll..

        //was genau ist timeslice?
        public move(_timeslice: number): void {

            //richtung
            let a = ball.position.x - this.startPosition.x;
            let b = ball.position.y - this.startPosition.y;

            //abstand
            let ballDistance = Math.sqrt((a * a) + (b * b));

            if (ballDistance <= 150) {

                this.position.x = this.position.x + a / 3;
                this.position.y = this.position.y + b / 3;

            } else {

                let dirX = this.startPosition.x - this.position.x;
                let dirY = this.startPosition.y - this.position.y;

                this.position.x = this.position.x + dirX / 3;
                this.position.y = this.position.y + dirY / 3;
            }

        }



        //Körper wird gezeichnet. Die draw muss aber ja nicht wissen wo oder?
        //Interessiert sie nicht. Es interessiert sie nur was gezeichnet wird
        public draw(): void {

            if (this.team == 0) {

                //save speichert den aktuellen stand.
                crc2.save();

                //hier wirds positioniert
                crc2.translate(this.position.x, this.position.y);


                //Body
                crc2.beginPath();
                crc2.arc(0, 30, 30, 0, Math.PI, true);
                crc2.closePath();
                crc2.fillStyle = colorTeamOne.value;
                crc2.fill();

                //Head
                crc2.beginPath();
                crc2.arc(0, -10, 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = colorTeamOne.value;
                crc2.fill();

                //ursprungs stand restored, nur dann im nächsten Schritt an andere position translated
                crc2.restore();
            } else {
                //save speichert den aktuellen stand.
                crc2.save();

                //hier wirds positioniert
                crc2.translate(this.position.x, this.position.y);


                //Body
                crc2.beginPath();
                crc2.arc(0, 30, 30, 0, Math.PI, true);
                crc2.closePath();
                crc2.fillStyle = colorTeamTwo.value;
                crc2.fill();

                //Head
                crc2.beginPath();
                crc2.arc(0, -10, 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = colorTeamTwo.value;
                crc2.fill();

                //ursprungs stand restored, nur dann im nächsten Schritt an andere position translated
                crc2.restore();
            }
        }

        public changePrecision(_newPrecision: number): void {
            this.precision = _newPrecision;
            //console.log(this.precision);
        }

        public changeSpeed(_newSpeed: number): void {
            this.speed = _newSpeed;
            //console.log("speed");
        }

    }

}

