"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        //skalierung
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        Vector.prototype.random = function (_minLength, _maxLength) {
            var length = _minLength + Math.random() * (_maxLength - _minLength);
            var direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        };
        return Vector;
    }());
    L09_Meadow.Vector = Vector;
})(L09_Meadow || (L09_Meadow = {}));
