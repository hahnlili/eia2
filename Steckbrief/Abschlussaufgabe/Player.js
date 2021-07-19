"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Soccer;
(function (Soccer) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(_playerNumber, _team, _speed, _precision) {
            var _this = 
            //super wenn klasse von anderer klasse erbt
            _super.call(this) || this;
            _this.position.x = Soccer.Position.getPlayerPositionX(_team, _playerNumber);
            _this.position.y = Soccer.Position.getPlayerPositionY(_team, _playerNumber);
            //mit this speicher ich 
            _this.startPosition = _this.position.copy();
            if (_this.startPosition.x == 0) {
                _this.onField = false;
            }
            else {
                _this.onField = true;
            }
            _this.playerNumber = _playerNumber;
            _this.speed = _speed;
            _this.precision = _precision;
            _this.team = _team;
            _this.velocity = new Soccer.Vector(0, 0);
            //brauche ich glaube ich nicht?
            _this.velocity.distance(_speed);
            console.log(_this.team, "+", _this.playerNumber, " + ", _this.precision, "+", _this.speed);
            return _this;
        }
        Player.prototype.setStartposition = function (_newStartposition) {
            this.startPosition.x = _newStartposition.x;
            this.startPosition.y = _newStartposition.y;
            this.position.x = _newStartposition.x;
            this.position.y = _newStartposition.y;
            if (this.startPosition.x == 0) {
                this.onField = false;
            }
            else {
                this.onField = true;
            }
        };
        //darf meine Player klasse wissen wann sich mein Spieler bewegt oder nur wie?
        //Wenn nein, dann muss das wann ins Main? --> bei meiner Cloud wusste die move
        //glaube ich auch wann und wie sich sich bewegen soll..
        //was genau ist timeslice?
        Player.prototype.move = function (_timeslice) {
            //richtung
            var a = Soccer.ball.position.x - this.startPosition.x;
            var b = Soccer.ball.position.y - this.startPosition.y;
            //abstand
            var ballDistance = Math.sqrt((a * a) + (b * b));
            if (ballDistance <= 300) {
                var dirX = Soccer.ball.position.x - this.position.x;
                var dirY = Soccer.ball.position.y - this.position.y;
                this.position.x = this.position.x + Soccer.Vector.getUberVector(this.speed, new Soccer.Vector(dirX, dirY)).x;
                this.position.y = this.position.y + Soccer.Vector.getUberVector(this.speed, new Soccer.Vector(dirX, dirY)).y;
                var ballDir = Math.sqrt((dirX * dirX) + (dirY * dirY));
                if (ballDir <= 10 && Soccer.ball.isOnDestination()) {
                    //console.log("Ball distance ist klein");
                    //moves aller spieler blockieren
                    Soccer.actualPlayer = this;
                    Soccer.displayPlayer();
                }
            }
            else {
                var dirX = this.startPosition.x - this.position.x;
                var dirY = this.startPosition.y - this.position.y;
                this.position.x = this.position.x + dirX / this.speed;
                this.position.y = this.position.y + dirY / this.speed;
            }
        };
        //Körper wird gezeichnet. Die draw muss aber ja nicht wissen wo oder?
        //Interessiert sie nicht. Es interessiert sie nur was gezeichnet wird
        Player.prototype.draw = function () {
            if (this.onField) {
                if (this.team == 0) {
                    //save speichert den aktuellen stand.
                    Soccer.crc2.save();
                    //hier wirds positioniert
                    Soccer.crc2.translate(this.position.x, this.position.y);
                    //Body
                    Soccer.crc2.beginPath();
                    Soccer.crc2.arc(0, 30, 30, 0, Math.PI, true);
                    Soccer.crc2.closePath();
                    Soccer.crc2.fillStyle = Soccer.colorTeamOne.value;
                    Soccer.crc2.fill();
                    //Head
                    Soccer.crc2.beginPath();
                    Soccer.crc2.arc(0, -10, 15, 0, 2 * Math.PI);
                    Soccer.crc2.closePath();
                    Soccer.crc2.fillStyle = Soccer.colorTeamOne.value;
                    Soccer.crc2.fill();
                    //ursprungs stand restored, nur dann im nächsten Schritt an andere position translated
                    Soccer.crc2.restore();
                    Soccer.crc2.font = "30px Arial";
                    Soccer.crc2.fillText(this.playerNumber.toString(), this.position.x, this.position.y);
                }
                else {
                    //save speichert den aktuellen stand.
                    Soccer.crc2.save();
                    //hier wirds positioniert
                    Soccer.crc2.translate(this.position.x, this.position.y);
                    //Body
                    Soccer.crc2.beginPath();
                    Soccer.crc2.arc(0, 30, 30, 0, Math.PI, true);
                    Soccer.crc2.closePath();
                    Soccer.crc2.fillStyle = Soccer.colorTeamTwo.value;
                    Soccer.crc2.fill();
                    //Head
                    Soccer.crc2.beginPath();
                    Soccer.crc2.arc(0, -10, 15, 0, 2 * Math.PI);
                    Soccer.crc2.closePath();
                    Soccer.crc2.fillStyle = Soccer.colorTeamTwo.value;
                    Soccer.crc2.fill();
                    //ursprungs stand restored, nur dann im nächsten Schritt an andere position translated
                    Soccer.crc2.restore();
                    Soccer.crc2.font = "30px Arial";
                    Soccer.crc2.fillText(this.playerNumber.toString(), this.position.x, this.position.y);
                }
            }
        };
        Player.prototype.changePrecision = function (_newPrecision) {
            this.precision = _newPrecision;
            //console.log(_newPrecision);
        };
        Player.prototype.changeSpeed = function (_newSpeed) {
            this.speed = _newSpeed;
            //console.log(_newSpeed);
        };
        Player.prototype.getTeam = function () {
            return this.team;
        };
        Player.prototype.isOnField = function () {
            return this.onField;
        };
        return Player;
    }(Soccer.Movable));
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
