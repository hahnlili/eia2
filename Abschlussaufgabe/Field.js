"use strict";
var Soccer;
(function (Soccer) {
    var Field = /** @class */ (function () {
        //nimmt crc2 weil er das benutzen will
        //um objekt zu erstellen ruf ich constructor auf
        function Field(_crc2) {
            this.crc2 = _crc2;
        }
        /* Public weil mein drauf zugreifen darf */
        Field.prototype.draw = function () {
            //Grüne Rasenfläche
            Soccer.crc2.beginPath();
            Soccer.crc2.fillStyle = "#70bf5d";
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.fillRect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height);
            Soccer.crc2.stroke();
            //Feld umrandung
            Soccer.crc2.beginPath();
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.lineWidth = 4;
            Soccer.crc2.rect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height);
            Soccer.crc2.closePath();
            Soccer.crc2.stroke();
            //Mittellinie
            Soccer.crc2.beginPath();
            Soccer.crc2.lineWidth = 4;
            Soccer.crc2.moveTo(Soccer.crc2.canvas.width * 0.5, Soccer.crc2.canvas.height);
            Soccer.crc2.lineTo(Soccer.crc2.canvas.width * 0.5, Soccer.crc2.canvas.height - Soccer.crc2.canvas.height);
            Soccer.crc2.stroke();
            //Mittelkreis
            Soccer.crc2.beginPath();
            Soccer.crc2.fillStyle = "#70bf5d";
            Soccer.crc2.lineWidth = 5;
            Soccer.crc2.arc(Soccer.crc2.canvas.width * 0.5, Soccer.crc2.canvas.height * 0.5, 150, 0, 2 * Math.PI);
            Soccer.crc2.closePath();
            Soccer.crc2.stroke();
            Soccer.crc2.fill();
            //Mittelpunkt
            Soccer.crc2.beginPath();
            Soccer.crc2.fillStyle = "white";
            Soccer.crc2.arc(Soccer.crc2.canvas.width * 0.5, Soccer.crc2.canvas.height * 0.5, 30, 0, 2 * Math.PI);
            Soccer.crc2.closePath();
            Soccer.crc2.stroke();
            Soccer.crc2.fill();
            //Die Linien über den Toren noch
            Soccer.crc2.beginPath();
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.lineWidth = 4;
            Soccer.crc2.rect(0, Soccer.crc2.canvas.height * 0.25, 200, Soccer.crc2.canvas.height * 0.5);
            Soccer.crc2.closePath();
            Soccer.crc2.stroke();
            Soccer.crc2.beginPath();
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.lineWidth = 4;
            Soccer.crc2.rect(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height * 0.25, -200, Soccer.crc2.canvas.height * 0.5);
            Soccer.crc2.closePath();
            Soccer.crc2.stroke();
            //Tore links und rechts
            Soccer.crc2.beginPath();
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.lineWidth = 4;
            Soccer.crc2.rect(0, Soccer.crc2.canvas.height * 0.35, 120, Soccer.crc2.canvas.height * 0.30);
            Soccer.crc2.closePath();
            Soccer.crc2.stroke();
            Soccer.crc2.beginPath();
            Soccer.crc2.strokeStyle = "white";
            Soccer.crc2.lineWidth = 4;
            Soccer.crc2.rect(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height * 0.35, -120, Soccer.crc2.canvas.height * 0.3);
            Soccer.crc2.closePath();
            Soccer.crc2.stroke();
        };
        return Field;
    }());
    Soccer.Field = Field;
})(Soccer || (Soccer = {}));
