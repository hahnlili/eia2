"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    window.addEventListener("load", handleLoad);
    var clouds = [];
    var flower = [];
    var bees = [];
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Meadow.crc2 = canvas.getContext("2d");
        L09_Meadow.crc2.fillStyle = "black";
        L09_Meadow.crc2.strokeStyle = "white";
        L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.width);
        var horizon = L09_Meadow.crc2.canvas.height * golden;
        function createClouds(_nClouds) {
            console.log("Blumen Wachsen");
            for (var i = 0; i < _nClouds; i++) {
                var cloud = new L09_Meadow.Cloud(1.0);
                clouds.push(cloud);
            }
        }
    }
    var golden = 0.62;
    //wofür genau ist das update?
    function update() {
        console.log("Update");
        L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.height);
        for (var _i = 0, clouds_1 = clouds; _i < clouds_1.length; _i++) {
            var cloud = clouds_1[_i];
            cloud.move(1 / 50);
            cloud.draw();
        }
        function createBees(_nBees) {
            console.log("Bienen  werden kreiert");
            for (var i = 0; i < _nBees; i++) {
                var asteroid = new L09_Meadow.Bee(1.0);
                bees.push(asteroid);
            }
        }
        //wofür genau ist das update?
        function update() {
            console.log("Update");
            L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.height);
            for (var _i = 0, bees_1 = bees; _i < bees_1.length; _i++) {
                var bee = bees_1[_i];
                bee.move(1 / 50);
                bee.draw();
            }
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
            L09_Meadow.crc2.save();
            L09_Meadow.crc2.translate(_position.x, _position.y);
            for (var drawn = 0; drawn < nParticles; drawn++) {
                L09_Meadow.crc2.save();
                var x_1 = (Math.random() * _size.x);
                var y_1 = -(Math.random() * _size.y);
                L09_Meadow.crc2.translate(x_1, y_1);
                L09_Meadow.crc2.fill(path1);
                L09_Meadow.crc2.restore();
                L09_Meadow.crc2.fillStyle = "#8B4513";
                drawTrunk(x_1, y_1);
            }
            L09_Meadow.crc2.restore();
        }
        function drawTrunk(x, y) {
            x = x;
            y = y + 30;
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.lineTo(x - 2.5, y);
            L09_Meadow.crc2.lineTo(x - 2.5, y + 10);
            L09_Meadow.crc2.lineTo(x + 2.5, y + 10);
            L09_Meadow.crc2.lineTo(x + 2.5, y);
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.fillStyle = "#1A2D19";
            L09_Meadow.crc2.closePath();
        }
        function drawBackground() {
            console.log("Background");
            var gradient = L09_Meadow.crc2.createLinearGradient(0, 0, 0, L09_Meadow.crc2.canvas.height);
            gradient.addColorStop(0, "#5C7FBA");
            gradient.addColorStop(golden, "#F4A18B");
            L09_Meadow.crc2.fillStyle = gradient;
            L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.height * golden);
        }
        function drawSun(_position) {
            console.log("Sunny today, isnt it?", _position);
            var r1 = 30;
            var r2 = 600;
            var gradient = L09_Meadow.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(46, 100%, 86%, 1)");
            gradient.addColorStop(1, "HSLA(11, 85%, 85%, 0)");
            L09_Meadow.crc2.save();
            L09_Meadow.crc2.translate(_position.x, _position.y);
            L09_Meadow.crc2.fillStyle = gradient;
            L09_Meadow.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.restore();
        }
        function drawGrass() {
            var gradient = L09_Meadow.crc2.createLinearGradient(0, 0, 0, L09_Meadow.crc2.canvas.height);
            gradient.addColorStop(0.62, "#7E731D");
            gradient.addColorStop(0.8, "#35461C");
            L09_Meadow.crc2.fillStyle = gradient;
            L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.height);
        }
        function drawCloud(_position, _size) {
            //nParticles ist die anzahl der Particel aus denen sich die Wole zusammensetzt
            var nParticles = 5;
            var radiusParticle = 60;
            var gradient = L09_Meadow.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            var particle = new Path2D();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(295, 28%, 84%, 0.5)");
            gradient.addColorStop(1, "HSLA(295, 28%, 84%, 0)");
            L09_Meadow.crc2.save();
            L09_Meadow.crc2.translate(_position.x, _position.y);
            L09_Meadow.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                L09_Meadow.crc2.save();
                var x = (Math.random() - 0.5) * _size.x;
                var y = -(Math.random() * _size.y);
                L09_Meadow.crc2.translate(x, y);
                L09_Meadow.crc2.fill(particle);
                L09_Meadow.crc2.restore();
            }
            L09_Meadow.crc2.restore();
        }
        function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("look at those pretty mountains");
            var stepMin = 30;
            var stepMax = 70;
            var x = 0;
            L09_Meadow.crc2.save();
            L09_Meadow.crc2.translate(_position.x, _position.y);
            L09_Meadow.crc2.beginPath();
            L09_Meadow.crc2.moveTo(0, 0);
            L09_Meadow.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                var y = -_min - Math.random() * (_max - _min);
                L09_Meadow.crc2.lineTo(x, y);
            } while (x < L09_Meadow.crc2.canvas.width);
            L09_Meadow.crc2.lineTo(x, 0);
            L09_Meadow.crc2.closePath();
            var gradient = L09_Meadow.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            L09_Meadow.crc2.fillStyle = gradient;
            L09_Meadow.crc2.fill();
            L09_Meadow.crc2.restore();
        }
    }
})(L09_Meadow || (L09_Meadow = {}));
