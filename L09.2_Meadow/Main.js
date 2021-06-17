"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    window.addEventListener("load", handleLoad);
    var imageData;
    L09_Meadow.golden = 0.62;
    var horizon;
    var clouds = [];
    var bees = [];
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Meadow.crc2 = canvas.getContext("2d");
        L09_Meadow.crc2.fillStyle = "black";
        L09_Meadow.crc2.strokeStyle = "white";
        L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.width);
        horizon = L09_Meadow.crc2.canvas.height * L09_Meadow.golden;
        window.setInterval(update, 100);
        drawBackground();
        drawGrass();
        drawSun(new L09_Meadow.Vector(300, 300));
        drawMountain(new L09_Meadow.Vector(0, horizon), 75, 200, "grey", "white");
        drawTree(new L09_Meadow.Vector(0, horizon), new L09_Meadow.Vector(3000, 50));
        //update();
        for (var index = 0; index < 200; index++) {
            var randomX = Math.floor(Math.random() * L09_Meadow.crc2.canvas.width);
            var randomY = Math.floor(Math.random() * 200);
            drawStar(randomX, randomY + horizon + 200);
        }
        for (var index = 0; index < 200; index++) {
            var randomX = Math.floor(Math.random() * L09_Meadow.crc2.canvas.width);
            var randomY = Math.floor(Math.random() * 200);
            drawFMN(randomX + 0, randomY + horizon + 200);
        }
        imageData = L09_Meadow.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBees(5);
        createClouds(5);
    }
    function createClouds(_nClouds) {
        console.log("Wolken bedecken den Himmel");
        var size = new L09_Meadow.Vector(100, 200);
        var x = (0);
        var y = (150);
        var position = new L09_Meadow.Vector(x, y);
        var velocity = new L09_Meadow.Vector(4, 0);
        for (var i = 0; i < 3; i++) {
            console.log("wokle" + i);
            var cloud = new L09_Meadow.Cloud(position, size, velocity, x, y);
            clouds.push(cloud);
            cloud.draw();
        }
    }
    function createBees(_nBees) {
        console.log("Bienen  werden kreiert");
        var size = new L09_Meadow.Vector(100, 200);
        var x = (0);
        var y = (150);
        var position = new L09_Meadow.Vector(x, y);
        var velocity = new L09_Meadow.Vector(4, 0);
        for (var i = 0; i < Math.random() * 1000; i++) {
            var bee = new L09_Meadow.Bee(position, size, velocity, x, y);
            bees.push(bee);
        }
    }
    //wofür genau ist das update?
    function update() {
        console.log("Update");
        L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.height);
        L09_Meadow.crc2.putImageData(imageData, 0, 0);
        for (var _i = 0, clouds_1 = clouds; _i < clouds_1.length; _i++) {
            var movable = clouds_1[_i];
            movable.move(1 / 50);
            movable.draw();
        }
        for (var _a = 0, bees_1 = bees; _a < bees_1.length; _a++) {
            var bee = bees_1[_a];
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
    function drawFMN(_x, _y) {
        L09_Meadow.crc2.moveTo(_x, _y);
        L09_Meadow.crc2.fillStyle = "darkgreen";
        L09_Meadow.crc2.beginPath();
        L09_Meadow.crc2.moveTo(_x, _y);
        L09_Meadow.crc2.lineTo(_x, _y - 65);
        L09_Meadow.crc2.closePath();
        L09_Meadow.crc2.stroke();
        L09_Meadow.crc2.beginPath();
        L09_Meadow.crc2.arc(_x, _y - 70, 10, 4, Math.PI);
        L09_Meadow.crc2.closePath();
        L09_Meadow.crc2.fillStyle = "#1C4573";
        L09_Meadow.crc2.fill();
    }
    function drawStar(_x, _y) {
        L09_Meadow.crc2.save();
        L09_Meadow.crc2.moveTo(_x, _y);
        L09_Meadow.crc2.fillStyle = "darkgreen";
        L09_Meadow.crc2.beginPath();
        L09_Meadow.crc2.moveTo(_x, _y);
        L09_Meadow.crc2.lineTo(_x, _y - 65);
        L09_Meadow.crc2.stroke();
        L09_Meadow.crc2.closePath();
        // das hier hab ich wiederum aus dem internet geklaut und angepasst. Also doch schon irgendwie auch mein verdienst
        // aber du darfst mir morgen gern erklären, warum nur eine sternenblume erstellt wird... 
        var r = 10;
        var p = 10;
        var m = 0.5;
        L09_Meadow.crc2.fillStyle = "#fdff92";
        L09_Meadow.crc2.beginPath();
        L09_Meadow.crc2.translate(_x, _y - 65);
        L09_Meadow.crc2.moveTo(0, 0 - r);
        for (var i = 0; i < p; i++) {
            L09_Meadow.crc2.rotate(Math.PI / p);
            L09_Meadow.crc2.lineTo(0, 0 - (r * m));
            L09_Meadow.crc2.rotate(Math.PI / p);
            L09_Meadow.crc2.lineTo(0, 0 - r);
        }
        L09_Meadow.crc2.closePath();
        L09_Meadow.crc2.fill();
        L09_Meadow.crc2.restore();
    }
    function drawBackground() {
        console.log("Background");
        var gradient = L09_Meadow.crc2.createLinearGradient(0, 0, 0, L09_Meadow.crc2.canvas.height);
        gradient.addColorStop(0, "#5C7FBA");
        gradient.addColorStop(L09_Meadow.golden, "#F4A18B");
        L09_Meadow.crc2.fillStyle = gradient;
        L09_Meadow.crc2.fillRect(0, 0, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.height * L09_Meadow.golden);
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
        L09_Meadow.crc2.fillRect(0, L09_Meadow.crc2.canvas.height * 0.6, L09_Meadow.crc2.canvas.width, L09_Meadow.crc2.canvas.height * 0.4);
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
})(L09_Meadow || (L09_Meadow = {}));
