"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    var Movable = /** @class */ (function () {
        function Movable(_size, _position, _velocity, _x, _y) {
            // console.log("Movable constructor");
            this.position = new L09_Meadow.Vector(0, 0);
            this.velocity = new L09_Meadow.Vector(0, 0);
        }
        Movable.prototype.move = function (_timeslice) {
            console.log("Movable move");
            var offset = new L09_Meadow.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Meadow.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Meadow.crc2.canvas.height / L09_Meadow.golden;
            if (this.position.x > L09_Meadow.crc2.canvas.width)
                this.position.x -= L09_Meadow.crc2.canvas.width;
            if (this.position.y > L09_Meadow.crc2.canvas.height / L09_Meadow.golden)
                this.position.y -= L09_Meadow.crc2.canvas.height;
        };
        Movable.prototype.draw = function () {
            //console.log("Movable move");
        };
        return Movable;
    }());
    L09_Meadow.Movable = Movable;
})(L09_Meadow || (L09_Meadow = {}));
