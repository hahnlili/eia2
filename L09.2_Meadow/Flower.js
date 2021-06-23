"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    var Flower = /** @class */ (function () {
        function Flower(_position) {
            this.nectarFilling = 0;
            this.position = new L09_Meadow.Vector(0, 0);
            console.log(_position);
            this.flowerType = Math.round(Math.random());
            this.position = _position;
        }
        Flower.prototype.draw = function () {
            /* console.log("hallo roland nummer 2" + this.position); */
            var _x = this.position.x;
            var _y = this.position.y;
            L09_Meadow.crc2.moveTo(_x, _y);
            L09_Meadow.crc2.fillStyle = "darkgreen";
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.moveTo(_x, _y);
            L09_Meadow.crc2.lineTo(_x, _y - 65);
            L09_Meadow.crc2.closePath();
            L09_Meadow.crc2.stroke();
            if (this.flowerType == 0) {
                L09_Meadow.crc2.beginPath();
                L09_Meadow.crc2.arc(_x, _y - 70, 10, 4, Math.PI);
                L09_Meadow.crc2.closePath();
                L09_Meadow.crc2.fillStyle = "#1C4573";
                L09_Meadow.crc2.fill();
            }
            else {
                var r = 10;
                var p = 10;
                var m = 0.5;
                L09_Meadow.crc2.fillStyle = "#fdff92";
                L09_Meadow.crc2.beginPath();
                L09_Meadow.crc2.save();
                L09_Meadow.crc2.translate(_x, _y - 65);
                L09_Meadow.crc2.moveTo(0, 0 - r);
                for (var i = 0; i < p; i++) {
                    L09_Meadow.crc2.rotate(Math.PI / p);
                    L09_Meadow.crc2.lineTo(0, 0 - (r * m));
                    L09_Meadow.crc2.rotate(Math.PI / p);
                    L09_Meadow.crc2.lineTo(0, 0 - r);
                }
                L09_Meadow.crc2.closePath();
                L09_Meadow.crc2.fill();
                L09_Meadow.crc2.restore();
            }
        };
        Flower.prototype.refillNectar = function (_nectarSpeed) {
            if (this.nectarFilling <= 100) {
                this.nectarFilling += _nectarSpeed;
            }
        };
        Flower.prototype.getNectarAmount = function () {
            return this.nectarFilling;
        };
        return Flower;
    }());
    L09_Meadow.Flower = Flower;
})(L09_Meadow || (L09_Meadow = {}));
