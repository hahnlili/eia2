"use strict";
var Soccer;
(function (Soccer) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.length = 0;
            this.set(_x, _y);
            this.calcLength();
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
            this.calcLength();
        };
        Vector.prototype.add = function (_vector) {
            this.x += _vector.x;
            this.y += _vector.y;
            this.calcLength();
        };
        Vector.prototype.distance = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.getRandom = function (_min, _max) {
            var tempVector = new Vector(0, 0);
            tempVector.set(_min + Math.random() * (_max - _min), _min + Math.random() * (_max - _min));
            return tempVector;
        };
        Vector.getDifference = function (_v0, _v1) {
            var tempVector = new Vector(0, 0);
            tempVector.set(_v0.x - _v1.x, _v0.y - _v1.y);
            return tempVector;
        };
        Vector.getSum = function (_v0, _v1) {
            var tempVector = new Vector(0, 0);
            tempVector.set(_v0.x + _v1.x, _v0.y + _v1.y);
            return tempVector;
        };
        Vector.getScaled = function (_v, _scale) {
            var tempVector = new Vector(0, 0);
            tempVector.set(_v.x * _scale, _v.y * _scale);
            return tempVector;
        };
        Vector.getLength = function (_vector) {
            var templength;
            templength = Math.sqrt((_vector.x * _vector.x) + (_vector.y * _vector.y));
            return templength;
        };
        Vector.getUberVector = function (_length, _direction) {
            var tempVector = new Vector(_direction.x / (_direction.length), _direction.y / (_direction.length));
            tempVector = this.getScaled(tempVector, _length);
            return tempVector;
        };
        Vector.prototype.clone = function () {
            return new Vector(this.x, this.y);
        };
        Vector.prototype.calcLength = function () {
            this.length = Math.sqrt((this.x * this.x) + (this.y * this.y));
        };
        Vector.prototype.copy = function () {
            return new Vector(this.x, this.y);
        };
        return Vector;
    }());
    Soccer.Vector = Vector;
    //Meine Richtung
    /*     public toBall(_ballLength: number, _position: number): void{
            //Abstand zwische Spieler und Ball?
            let length: number = _ballLength * (_position - _ballLength);
            //richtung
            let direction: number = _ballLength;

            this.set(Math.cos(direction),Math.sin(direction));
            this.distance(length);
            
        }
 */
})(Soccer || (Soccer = {}));
