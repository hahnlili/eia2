"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleload);
    var asteroids = [];
    function handleload(_event) {
        console.log("Steine fliegen rum: Aaaah");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.crc2.fillStyle = "black";
        L09_Asteroids.crc2.strokeStyle = "white";
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.width);
        L09_Asteroids.createPaths();
        console.log("Asteroid paths:", L09_Asteroids.asteroidPaths);
        createAsteroids(5);
        // createShip();
        // canvas.addEventListener("mousdown", loadListener);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Steine werden abgeschossen");
        var hotspot = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
    }
    function createAsteroids(_nAteroids) {
        console.log("Asteroiden werden kreiert");
        for (var i = 0; i < _nAteroids; i++) {
            var asteroid = new L09_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    //wofür genau ist das update?
    function update() {
        console.log("Update");
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        for (var _i = 0, asteroids_1 = asteroids; _i < asteroids_1.length; _i++) {
            var asteroid = asteroids_1[_i];
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        //ship.draw();
        // handleCollisions();
    }
})(L09_Asteroids || (L09_Asteroids = {}));
