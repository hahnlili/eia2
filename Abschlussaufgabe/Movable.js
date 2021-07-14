"use strict";
var Soccer;
(function (Soccer) {
    var Movable = /** @class */ (function () {
        function Movable() {
            // console.log("Movable constructor");
            this.position = new Soccer.Vector(0, 0);
        }
        Movable.prototype.move = function (_timeslice) {
        };
        Movable.prototype.draw = function () {
        };
        return Movable;
    }());
    Soccer.Movable = Movable;
})(Soccer || (Soccer = {}));
