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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_size, _position, _velocity, _x, _y) {
            var _this = _super.call(this, _size, _velocity, _position, _x, _y) || this;
            console.log("Hier werden Wolken bewegt");
            _this.position = new L09_Meadow.Vector(0, 0);
            _this.velocity = new L09_Meadow.Vector(0, 0);
            _this.velocity.random(100, 200);
            _this.size = _size;
            return _this;
        }
        /*  move(_timeslice: number): void {
             console.log("hier bewegt sich eine Wolke");
             /* let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#board"); */
        /* let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d"); */
        /*  let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
         offset.scale(_timeslice);
         this.position.add(offset); */
        /* if (this.position.x < 0)
            this.position.x += crc2.canvas.width;

        if (this.position.y < 0)
            this.position.y += crc2.canvas.height / golden;

        if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;

        if (this.position.y > crc2.canvas.height / golden)
            this.position.y -= crc2.canvas.height;   */
        //} 
        Cloud.prototype.draw = function () {
            console.log("Wolken!");
            L09_Meadow.crc2.save();
            L09_Meadow.crc2.translate(this.position.x, this.position.y);
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.moveTo(170, 80);
            L09_Meadow.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            L09_Meadow.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            L09_Meadow.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            L09_Meadow.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            L09_Meadow.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            L09_Meadow.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            L09_Meadow.crc2.closePath();
            L09_Meadow.crc2.lineWidth = 5;
            L09_Meadow.crc2.fillStyle = '#ffffff';
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.strokeStyle = '#ffffff';
            L09_Meadow.crc2.stroke();
            L09_Meadow.crc2.restore();
        };
        return Cloud;
    }(L09_Meadow.Movable));
    L09_Meadow.Cloud = Cloud;
})(L09_Meadow || (L09_Meadow = {}));
