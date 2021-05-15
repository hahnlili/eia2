"use strict";
var Memory;
(function (Memory) {
    window.addEventListener("load", handleLoad);
    var canvas;
    var crc2;
    var crc3;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        var crc2 = canvas.getContext("2d");
        var crc3 = canvas.getContext("2d");
        var crc4 = canvas.getContext("2d");
        console.log("hallo");
        crc2.fillStyle = "#fff7e3";
        crc2.fillRect(2, 2, crc2.canvas.width, crc2.canvas.height);
        /*  crc2.beginPath();
         crc2.arc(89, 67, 45, 6, 1.5 * Math.PI);
         crc2.closePath();
         crc2.stroke();
         crc2.fillStyle = "#ff0000"; */
        //i ist 0 und solange i kleiner ist als 22 wird die for schleife ausgeführt --> keine ahnung weshalb meine schleife nicht richtig funktioniert?
        for (var i = 0; i < 22; i++) {
            //console.log("hallo " + i);
            art1();
        }
        for (var i = 0; i < Math.random() * 9; i++) {
            art2();
        }
        function art1() {
            //console.log("hä");
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (800) + 1), Math.floor(Math.random() * (900) + 1), Math.floor(Math.random() * (20) + 1), 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.strokeStyle = "#" + ((1 << 24) * Math.random() | 0).toString(16); //aus dem internet geklaut :)
        }
        function art2() {
            var x = (Math.random() * 800);
            var y = (Math.random() * 800);
            var size = (Math.random() * 300);
            crc3.beginPath();
            crc3.moveTo(x, y);
            crc3.lineTo(x, y + size);
            crc3.lineTo(x + size, y + size);
            crc3.lineTo(x + size, y);
            crc3.lineTo(x, y);
            crc3.stroke();
            crc3.closePath();
            crc3.strokeStyle = "#" + ((1 << 24) * Math.random() | 0).toString(16);
            if (size > 200) {
                console.log("hallo du, es kommt auf die größe an");
                art3(x, y, size);
            }
        }
        function art3(x, y, size) {
            x = x + 0.5 * size;
            y = y + 0.5 * size;
            crc4.beginPath();
            crc4.arc(x, y, 5, 0, 2 * Math.PI);
            crc4.closePath();
            crc4.fill();
            crc4.fillStyle = "#000000";
            crc4.beginPath();
            crc4.arc(x + 20, y, 5, 0, 2 * Math.PI);
            crc4.closePath();
            crc4.fill();
            crc4.fillStyle = "#000000";
            crc4.beginPath();
            crc4.moveTo(x, y + 10);
            crc4.bezierCurveTo(x, y + 20, x + 20, y + 20, x + 20, y + 10);
            crc4.strokeStyle = "#000000";
            crc4.stroke(); // wieso hat der smiley manchmal nur ein auge? .(
        }
    }
})(Memory || (Memory = {}));
