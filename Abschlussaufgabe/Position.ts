namespace Soccer {

    export class Position {

        private crc2: CanvasRenderingContext2D;

        //nimmt crc2 weil er das benutzen will
        //um objekt zu erstellen ruf ich constructor auf

        //brauche ich den Rendering.Context? Wegen der Koordinaten oder unnötig weil ich nichts drawe?
        constructor(_crc2: CanvasRenderingContext2D) {
            this.crc2 = _crc2;
        }
        //Argument for _team was not providet?
        static getPlayerPositionX(_team: number, _playerNumber: number): number {

            //vorläufige Zahlen für die Koorinaten
            let x: number = 0;

            // RECHNEN die switch ist 22 groß, für jedes Spieler wird die neue Position ausgegeben / kann ich die Position dann noch selbst wählen?
            // Nicht gesetze Spieler nichts aufs Feld packen, wie?

            //wenn Team 1, dann sind die Positionen auf x-achse möglich
            if (_team == 0) {
                switch (_playerNumber) {
                    case 0:
                        x = crc2.canvas.width * 0.08;
                        break;
                    case 1:
                        x = crc2.canvas.width * 0.1;
                        break;
                    case 2:
                        x = crc2.canvas.width * 0.2;
                        break;
                    case 3:
                        x = crc2.canvas.width * 0.2;
                        break;
                    case 4:
                        x = crc2.canvas.width * 0.1;
                        break;
                    case 5:
                        x = crc2.canvas.width * 0.4;
                        break;
                    case 6:
                        x = crc2.canvas.width * 0.35;
                        break;
                    case 7:
                        x = crc2.canvas.width * 0.35;
                        break;
                    case 8:
                        x = crc2.canvas.width * 0.4;
                        break;
                    case 9:
                        x = crc2.canvas.width * 0.275;
                        break;
                    case 10:
                        x = crc2.canvas.width * 0.4;
                        break;
                }

                //wenn Team 2, dann sind die Positionen auf x-achse möglich
            } else {
                switch (_playerNumber) {
                    case 0:
                        x = crc2.canvas.width * 0.92;
                        break;
                    case 1:
                        x = crc2.canvas.width * 0.9;
                        break;
                    case 2:
                        x = crc2.canvas.width * 0.8;
                        break;
                    case 3:
                        x = crc2.canvas.width * 0.8;
                        break;
                    case 4:
                        x = crc2.canvas.width * 0.9;
                        break;
                    case 5:
                        x = crc2.canvas.width * 0.6;
                        break;
                    case 6:
                        x = crc2.canvas.width * 0.65;
                        break;
                    case 7:
                        x = crc2.canvas.width * 0.65;
                        break;
                    case 8:
                        x = crc2.canvas.width * 0.6;
                        break;
                    case 9:
                        x = crc2.canvas.width *0.725;
                        break;
                    case 10:
                        x = crc2.canvas.width * 0.6;
                        break;
                }
            }
            return x; //was genau muss ich in return ausgeben lassen?
        }
        static getPlayerPositionY(_team: number, _playerNumber: number): number {

            let y: number = 0;

            // RECHNEN also 22 mal ne Switch oder so
            if (_team == 0) {
                switch (_playerNumber) {
                    case 0:
                        y = crc2.canvas.height * 0.5;
                        break;
                    case 1:
                        y = crc2.canvas.height * 0.1;
                        break;
                    case 2:
                        y = crc2.canvas.height * 0.3;
                        break;
                    case 3:
                        y = crc2.canvas.height * 0.7;
                        break;
                    case 4:
                        y = crc2.canvas.height * 0.9;
                        break;
                    case 5:
                        y = crc2.canvas.height * 0.1;
                        break;
                    case 6:
                        y = crc2.canvas.height * 0.3;
                        break;
                    case 7:
                        y = crc2.canvas.height * 0.7;
                        break;
                    case 8:
                        y = crc2.canvas.height * 0.9;
                        break;
                    case 9:
                        y = crc2.canvas.height * 0.5;
                        break;
                    case 10:
                        y = crc2.canvas.height * 0.5;
                        break;

                }
            } else {
                switch (_playerNumber) {
                    case 0:
                        y = crc2.canvas.height * 0.5;
                        break;
                    case 1:
                        y = crc2.canvas.height * 0.1;
                        break;
                    case 2:
                        y = crc2.canvas.height * 0.3;
                        break;
                    case 3:
                        y = crc2.canvas.height * 0.7;
                        break;
                    case 4:
                        y = crc2.canvas.height * 0.9;
                        break;
                    case 5:
                        y = crc2.canvas.height * 0.1;
                        break;
                    case 6:
                        y = crc2.canvas.height * 0.3;
                        break;
                    case 7:
                        y = crc2.canvas.height * 0.7;
                        break;
                    case 8:
                        y = crc2.canvas.height * 0.9;
                        break;
                    case 9:
                        y = crc2.canvas.height * 0.5;
                        break;
                    case 10:
                        y = crc2.canvas.height * 0.5;
                        break;

                }
            }
            return y; //was genau muss ich in return ausgeben lassen
        }

    }
}