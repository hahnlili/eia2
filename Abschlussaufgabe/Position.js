"use strict";
var Soccer;
(function (Soccer) {
    var Position = /** @class */ (function () {
        //nimmt crc2 weil er das benutzen will
        //um objekt zu erstellen ruf ich constructor auf
        //brauche ich den Rendering.Context? Wegen der Koordinaten oder unnötig weil ich nichts drawe?
        function Position(_crc2) {
            this.crc2 = _crc2;
        }
        //Argument for _team was not providet?
        Position.getPlayerPositionX = function (_team, _playerNumber) {
            //vorläufige Zahlen für die Koorinaten
            var x = 0;
            // RECHNEN die switch ist 22 groß, für jedes Spieler wird die neue Position ausgegeben / kann ich die Position dann noch selbst wählen?
            // Nicht gesetze Spieler nichts aufs Feld packen, wie?
            //wenn Team 1, dann sind die Positionen auf x-achse möglich
            if (_team == 0) {
                switch (_playerNumber) {
                    case 0:
                        x = Soccer.crc2.canvas.width * 0.08;
                        break;
                    case 1:
                        x = Soccer.crc2.canvas.width * 0.1;
                        break;
                    case 2:
                        x = Soccer.crc2.canvas.width * 0.2;
                        break;
                    case 3:
                        x = Soccer.crc2.canvas.width * 0.2;
                        break;
                    case 4:
                        x = Soccer.crc2.canvas.width * 0.1;
                        break;
                    case 5:
                        x = Soccer.crc2.canvas.width * 0.4;
                        break;
                    case 6:
                        x = Soccer.crc2.canvas.width * 0.35;
                        break;
                    case 7:
                        x = Soccer.crc2.canvas.width * 0.35;
                        break;
                    case 8:
                        x = Soccer.crc2.canvas.width * 0.4;
                        break;
                    case 9:
                        x = Soccer.crc2.canvas.width * 0.275;
                        break;
                    case 10:
                        x = Soccer.crc2.canvas.width * 0.4;
                        break;
                }
                //wenn Team 2, dann sind die Positionen auf x-achse möglich
            }
            else {
                switch (_playerNumber) {
                    case 0:
                        x = Soccer.crc2.canvas.width * 0.92;
                        break;
                    case 1:
                        x = Soccer.crc2.canvas.width * 0.9;
                        break;
                    case 2:
                        x = Soccer.crc2.canvas.width * 0.8;
                        break;
                    case 3:
                        x = Soccer.crc2.canvas.width * 0.8;
                        break;
                    case 4:
                        x = Soccer.crc2.canvas.width * 0.9;
                        break;
                    case 5:
                        x = Soccer.crc2.canvas.width * 0.6;
                        break;
                    case 6:
                        x = Soccer.crc2.canvas.width * 0.65;
                        break;
                    case 7:
                        x = Soccer.crc2.canvas.width * 0.65;
                        break;
                    case 8:
                        x = Soccer.crc2.canvas.width * 0.6;
                        break;
                    case 9:
                        x = Soccer.crc2.canvas.width * 0.725;
                        break;
                    case 10:
                        x = Soccer.crc2.canvas.width * 0.6;
                        break;
                }
            }
            return x; //was genau muss ich in return ausgeben lassen?
        };
        Position.getPlayerPositionY = function (_team, _playerNumber) {
            var y = 0;
            // RECHNEN also 22 mal ne Switch oder so
            if (_team == 0) {
                switch (_playerNumber) {
                    case 0:
                        y = Soccer.crc2.canvas.height * 0.5;
                        break;
                    case 1:
                        y = Soccer.crc2.canvas.height * 0.1;
                        break;
                    case 2:
                        y = Soccer.crc2.canvas.height * 0.3;
                        break;
                    case 3:
                        y = Soccer.crc2.canvas.height * 0.7;
                        break;
                    case 4:
                        y = Soccer.crc2.canvas.height * 0.9;
                        break;
                    case 5:
                        y = Soccer.crc2.canvas.height * 0.1;
                        break;
                    case 6:
                        y = Soccer.crc2.canvas.height * 0.3;
                        break;
                    case 7:
                        y = Soccer.crc2.canvas.height * 0.7;
                        break;
                    case 8:
                        y = Soccer.crc2.canvas.height * 0.9;
                        break;
                    case 9:
                        y = Soccer.crc2.canvas.height * 0.5;
                        break;
                    case 10:
                        y = Soccer.crc2.canvas.height * 0.5;
                        break;
                }
            }
            else {
                switch (_playerNumber) {
                    case 0:
                        y = Soccer.crc2.canvas.height * 0.5;
                        break;
                    case 1:
                        y = Soccer.crc2.canvas.height * 0.1;
                        break;
                    case 2:
                        y = Soccer.crc2.canvas.height * 0.3;
                        break;
                    case 3:
                        y = Soccer.crc2.canvas.height * 0.7;
                        break;
                    case 4:
                        y = Soccer.crc2.canvas.height * 0.9;
                        break;
                    case 5:
                        y = Soccer.crc2.canvas.height * 0.1;
                        break;
                    case 6:
                        y = Soccer.crc2.canvas.height * 0.3;
                        break;
                    case 7:
                        y = Soccer.crc2.canvas.height * 0.7;
                        break;
                    case 8:
                        y = Soccer.crc2.canvas.height * 0.9;
                        break;
                    case 9:
                        y = Soccer.crc2.canvas.height * 0.5;
                        break;
                    case 10:
                        y = Soccer.crc2.canvas.height * 0.5;
                        break;
                }
            }
            return y; //was genau muss ich in return ausgeben lassen
        };
        return Position;
    }());
    Soccer.Position = Position;
})(Soccer || (Soccer = {}));
