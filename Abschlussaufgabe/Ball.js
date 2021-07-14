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
    var Ball = /** @class */ (function (_super) {
        __extends(Ball, _super);
        function Ball() {
            var _this = _super.call(this) || this;
            //will ich, dass der Ball erstmal eine feste Position hat?
            _this.dest = new Soccer.Vector(Soccer.crc2.canvas.width * 0.5, Soccer.crc2.canvas.height * 0.5);
            Soccer.crc2.canvas.addEventListener("click", _this.clickBall.bind(_this));
            _this.position.x = _this.dest.x;
            _this.position.y = _this.dest.y;
            return _this;
        }
        Ball.prototype.clickBall = function (_event) {
            console.log("gehst du da rein?");
            var x = _event.offsetX;
            var y = _event.offsetY;
            //brauche presicion vom aktiven spieler--> diese präzision auf destination addieren mit random vektor
            this.dest = Soccer.Vector.getSum(new Soccer.Vector(x, y), Soccer.Vector.getUberVector(30, Soccer.Vector.getRandom(-1, 1)));
            //console.log(this.dest);
            /*  this.position.x = this.dest.x;
             this.position.y = this.dest.y; */
        };
        Ball.prototype.move = function (_timeslice) {
            var a = this.dest.x - this.position.x;
            var b = this.dest.y - this.position.y;
            //wichtig für wird langsamer
            var distance = Math.sqrt((a * a) + (b * b));
            this.position.x = this.position.x + a / 3;
            this.position.y = this.position.y + b / 3;
        };
        Ball.prototype.getBallPosition = function (_playerPosition) {
            // hier schaut ball ob der spieler bei ihm ist, und welcher spieler es ist?
            this.position;
            //console.log(this.position);
        };
        Ball.prototype.draw = function () {
            Soccer.crc2.save();
            Soccer.crc2.translate(this.position.x, this.position.y);
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            Soccer.crc2.fill();
            Soccer.crc2.restore();
        };
        return Ball;
    }(Soccer.Movable));
    Soccer.Ball = Ball;
})(Soccer || (Soccer = {}));
