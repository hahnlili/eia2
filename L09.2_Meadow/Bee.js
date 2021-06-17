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
var L09_Meadow;
(function (L09_Meadow) {
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee(_position, _velocity) {
            var _this = _super.call(this, _position, _velocity) || this;
            console.log("Bienen kommen auch irgendwo her");
            _this.velocity.random(100, 200);
            return _this;
        }
        /*         move(_timeslice: number): void {
                    console.log("hier bewegt sich eine fleißige Biene");
                    let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                    offset.scale(_timeslice);
                    this.position.add(offset);
        
                    if (this.position.x < 0)
                        this.position.x += crc2.canvas.width;
        
                    if (this.position.y < 0)
                        this.position.y += crc2.canvas.height;
        
                    if (this.position.x > crc2.canvas.width)
                        this.position.x -= crc2.canvas.width;
        
                    if (this.position.y > crc2.canvas.height)
                        this.position.y -= crc2.canvas.height;
        
                } */
        Bee.prototype.draw = function () {
            console.log("hier werden bienen gemalt");
            L09_Meadow.crc2.save();
            L09_Meadow.crc2.translate(this.position.x, this.position.y);
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.fillStyle = "#fdfd96";
            L09_Meadow.crc2.ellipse(this.position.x, this.position.y, 15, 20, Math.PI / 2, 0, 2 * Math.PI);
            L09_Meadow.crc2.arc(this.position.x + 20, this.position.y - 5, 10, 0, 2 * Math.PI);
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.closePath();
            //streifen
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.fillStyle = "black";
            L09_Meadow.crc2.ellipse(this.position.x, this.position.y, 15, 10, Math.PI / 2, 0, 1 * Math.PI);
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.closePath();
            //Flügel 
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.fillStyle = "lightBlue";
            L09_Meadow.crc2.ellipse(this.position.x - 10, this.position.y - 20, 8, 20, Math.PI / -5, 0, 2 * Math.PI);
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.closePath();
            //Auge 
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.fillStyle = "black";
            L09_Meadow.crc2.arc(this.position.x + 24, this.position.y - 6, 2, 0, 2 * Math.PI);
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.closePath();
            // Stachel 
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.fillStyle = "black";
            L09_Meadow.crc2.moveTo(this.position.x - 20, this.position.y);
            L09_Meadow.crc2.lineTo(this.position.x - 20, this.position.y + 6);
            L09_Meadow.crc2.lineTo(this.position.x - 30, this.position.y + 3);
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.closePath();
            L09_Meadow.crc2.restore();
        };
        return Bee;
    }(L09_Meadow.Movable));
    L09_Meadow.Bee = Bee;
})(L09_Meadow || (L09_Meadow = {}));
