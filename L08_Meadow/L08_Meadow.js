"use strict";
var Meadow;
(function (Meadow) {
    window.addEventListener("load", handleLoad);
    var golden = 0.62;
    var crc2;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        var horizon = crc2.canvas.height * golden;
        drawGrass();
        drawBackground();
        drawSun({ x: 300, y: 300 });
        drawCloud({ x: 1000, y: 125 }, { x: 250, y: 75 });
        drawMountain({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountain({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTree({ x: 0, y: horizon }, { x: 3000, y: 50 });
        //geklaut weil müde, aber nur das Blumen zeugs. Der rest ist ein MarleenOriginal®™©
        for (var index = 0; index < 200; index++) {
            var randomX = Math.floor(Math.random() * crc2.canvas.width);
            var randomY = Math.floor(Math.random() * 200);
            drawFMN(randomX + 0, randomY + horizon + 200);
        }
        function drawFMN(_x, _y) {
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 65);
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(_x, _y - 70, 10, 4, Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#1C4573";
            crc2.fill();
        }
        for (var index = 0; index < 200; index++) {
            var randomX = Math.floor(Math.random() * crc2.canvas.width);
            var randomY = Math.floor(Math.random() * 200);
            drawStar(randomX + 0, randomY + horizon + 200);
        }
        function drawStar(_x, _y) {
            crc2.moveTo(_x, _y);
            crc2.fillStyle = "darkgreen";
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 65);
            crc2.stroke();
            // das hier hab ich wiederum aus dem internet geklaut und angepasst. Also doch schon irgendwie auch mein verdienst
            // aber du darfst mir morgen gern erklären, warum nur eine sternenblume erstellt wird... 
            var r = 10;
            var p = 10;
            var m = 0.5;
            crc2.fillStyle = "#fdff92";
            crc2.beginPath();
            crc2.translate(_x, _y - 65);
            crc2.moveTo(0, 0 - r);
            for (var i = 0; i < p; i++) {
                crc2.rotate(Math.PI / p);
                crc2.lineTo(0, 0 - (r * m));
                crc2.rotate(Math.PI / p);
                crc2.lineTo(0, 0 - r);
            }
            crc2.fill();
            crc2.restore();
        }
        function drawTree(_position, _size) {
            console.log("Oh, ein wald!");
            var nParticles = 700;
            var x = (0);
            var y = (0);
            var path1 = new Path2D();
            path1.moveTo(x, y);
            path1.lineTo(x + 10, y + 30);
            path1.lineTo(x - 10, y + 30);
            crc2.save();
            crc2.translate(_position.x, _position.y);
            for (var drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                var x_1 = (Math.random() * _size.x);
                var y_1 = -(Math.random() * _size.y);
                crc2.translate(x_1, y_1);
                crc2.fill(path1);
                crc2.restore();
                crc2.fillStyle = "#8B4513";
                drawTrunk(x_1, y_1);
            }
            crc2.restore();
        }
        function drawTrunk(x, y) {
            x = x;
            y = y + 30;
            crc2.beginPath();
            crc2.lineTo(x - 2.5, y);
            crc2.lineTo(x - 2.5, y + 10);
            crc2.lineTo(x + 2.5, y + 10);
            crc2.lineTo(x + 2.5, y);
            crc2.fill();
            crc2.fillStyle = "#1A2D19";
            crc2.closePath();
        }
        function drawBackground() {
            console.log("Background");
            var gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#5C7FBA");
            gradient.addColorStop(golden, "#F4A18B");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * golden);
        }
        function drawSun(_position) {
            console.log("Sunny today, isnt it?", _position);
            var r1 = 30;
            var r2 = 600;
            var gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(46, 100%, 86%, 1)");
            gradient.addColorStop(1, "HSLA(11, 85%, 85%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function drawGrass() {
            var gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0.62, "#7E731D");
            gradient.addColorStop(0.8, "#35461C");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        function drawCloud(_position, _size) {
            //nParticles ist die anzahl der Particel aus denen sich die Wole zusammensetzt
            var nParticles = 5;
            var radiusParticle = 60;
            var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            var particle = new Path2D();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(295, 28%, 84%, 0.5)");
            gradient.addColorStop(1, "HSLA(295, 28%, 84%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                var x = (Math.random() - 0.5) * _size.x;
                var y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
        function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("look at those pretty mountains");
            var stepMin = 30;
            var stepMax = 70;
            var x = 0;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                var y = -_min - Math.random() * (_max - _min);
                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);
            crc2.lineTo(x, 0);
            crc2.closePath();
            var gradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
    }
})(Meadow || (Meadow = {}));
