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
    var Referee = /** @class */ (function (_super) {
        __extends(Referee, _super);
        function Referee() {
            var _this = _super.call(this) || this;
            _this.refereePosition = new Soccer.Vector(0, 0);
            return _this;
        }
        Referee.prototype.move = function (_timeslice) {
        };
        Referee.prototype.draw = function () {
            //save speichert den aktuellen stand.
            Soccer.crc2.save();
            //hier wirds positioniert
            Soccer.crc2.translate(this.position.x, this.position.y);
            //Body
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(0, 30, 30, 0, Math.PI, true);
            Soccer.crc2.closePath();
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.fill();
            //Head
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(0, -10, 15, 0, 2 * Math.PI);
            Soccer.crc2.closePath();
            Soccer.crc2.fillStyle = "black";
            Soccer.crc2.fill();
            //ursprungs stand restored, nur dann im nächsten Schritt an andere position translated
            Soccer.crc2.restore();
        };
        return Referee;
    }(Soccer.Movable));
    Soccer.Referee = Referee;
})(Soccer || (Soccer = {}));
