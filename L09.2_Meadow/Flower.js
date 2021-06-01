"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    var Flower = /** @class */ (function () {
        function Flower(_size) {
            console.log("Hier werden Steine gebaut");
            this.position = new L09_Meadow.Vector(0, 0);
            this.velocity = new L09_Meadow.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        Flower.prototype.move = function (_timeslice) {
            console.log("hier bewegt sich ein stein");
            var offset = new L09_Meadow.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Meadow.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Meadow.crc2.canvas.height;
            if (this.position.x > L09_Meadow.crc2.canvas.width)
                this.position.x -= L09_Meadow.crc2.canvas.width;
            if (this.position.y > L09_Meadow.crc2.canvas.height)
                this.position.y -= L09_Meadow.crc2.canvas.height;
        };
        Flower.prototype.draw = function () {
            console.log("hier werden steine gemalt");
            L09_Meadow.crc2.save();
            L09_Meadow.crc2.translate(this.position.x, this.position.y);
            L09_Meadow.crc2.scale(this.size, this.size);
            L09_Meadow.crc2.translate(-50, -50);
            L09_Meadow.crc2.stroke(L09_Meadow.asteroidPaths[this.type]);
            L09_Meadow.crc2.restore();
        };
        return Flower;
    }());
    L09_Meadow.Flower = Flower;
})(L09_Meadow || (L09_Meadow = {}));
