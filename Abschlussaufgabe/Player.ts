namespace Soccer {


    export class Player extends Movable {

        //Brauche ich das? Wenn ja wofür genau?
        public startPosition: Vector;
        public playerNumber: number;
        private onField: boolean;
        public team: number;
        public speed: number;
        public precision: number;
        private velocity: Vector;



        constructor(_playerNumber: number, _team: number, _speed: number, _precision: number) {
            //super wenn klasse von anderer klasse erbt
            super(); //in meiner Movables ist keine Position, da jedes movable eine eigene hat --> deshalb hier lehr
            this.position.x = Position.getPlayerPositionX(_team, _playerNumber);
            this.position.y = Position.getPlayerPositionY(_team, _playerNumber);

            //mit this speicher ich 
            this.startPosition = this.position.copy();
            if (this.startPosition.x == 0) {
                this.onField = false;
            } else {
                this.onField = true;
            }
            this.playerNumber = _playerNumber;
            this.speed = _speed;
            this.precision = _precision;
            this.team = _team;


            this.velocity = new Vector(0, 0);

            //brauche ich glaube ich nicht?

            this.velocity.distance(_speed);

            console.log(this.team, "+", this.playerNumber, " + ", this.precision, "+", this.speed);


        }

        public setStartposition(_newStartposition: Vector): void{
            this.startPosition.x = _newStartposition.x;
            this.startPosition.y = _newStartposition.y;
            this.position.x = _newStartposition.x;
            this.position.y = _newStartposition.y;
            if (this.startPosition.x == 0) {
                this.onField = false;
            } else {
                this.onField = true;
            }
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


            if (ballDistance <= 300) {
                

                let dirX = ball.position.x - this.position.x;
                let dirY = ball.position.y - this.position.y;

                
                this.position.x = this.position.x + Vector.getUberVector(this.speed, new Vector(dirX,dirY)).x;
                this.position.y = this.position.y + Vector.getUberVector(this.speed, new Vector(dirX,dirY)).y;
        
                let ballDir = Math.sqrt((dirX * dirX) + (dirY * dirY));

                if (ballDir <= 10 && ball.isOnDestination()) {
                    //console.log("Ball distance ist klein");
                    //moves aller spieler blockieren
                    actualPlayer = this;
                    displayPlayer();
                }

            } else {

                let dirX = this.startPosition.x - this.position.x;
                let dirY = this.startPosition.y - this.position.y;

                this.position.x = this.position.x + dirX / this.speed;
                this.position.y = this.position.y + dirY / this.speed;
            }

        }

        //Körper wird gezeichnet. Die draw muss aber ja nicht wissen wo oder?
        //Interessiert sie nicht. Es interessiert sie nur was gezeichnet wird
        public draw(): void {
            if (this.onField) {
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

                    crc2.font = "30px Arial";
                    crc2.fillText(this.playerNumber.toString(), this.position.x, this.position.y);

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

                    crc2.font = "30px Arial";
                    crc2.fillText(this.playerNumber.toString(), this.position.x, this.position.y);
                }
            }
        }

        public changePrecision(_newPrecision: number): void {
            this.precision = _newPrecision;
            //console.log(_newPrecision);
        }

        public changeSpeed(_newSpeed: number): void {
            this.speed = _newSpeed;
            //console.log(_newSpeed);
        }

        public getTeam(): number{
            return this.team;
        }

        public isOnField(): boolean{
            return this.onField;
        }

    }

}

