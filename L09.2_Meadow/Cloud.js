"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    var Cloud = /** @class */ (function () {
        function Cloud(_size) {
            console.log("Hier werden Wolken bewegt");
            this.position = new L09_Meadow.Vector(0, 0);
            this.velocity = new L09_Meadow.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        Cloud.prototype.move = function (_timeslice) {
            console.log("hier bewegt sich eine Wolke");
            var offset = new L09_Meadow.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Meadow.crc2.canvas.width;
            if (this.position.y / 2 < 0)
                this.position.y += L09_Meadow.crc2.canvas.height;
            if (this.position.x > L09_Meadow.crc2.canvas.width)
                this.position.x -= L09_Meadow.crc2.canvas.width;
            if (this.position.y / 2 > L09_Meadow.crc2.canvas.height)
                this.position.y -= L09_Meadow.crc2.canvas.height;
        };
        Cloud.prototype.draw = function () {
            function drawCloud(_position, _size) {
                console.log("hier werden steine gemalt");
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
        };
        return Cloud;
    }());
    L09_Meadow.Cloud = Cloud;
})(L09_Meadow || (L09_Meadow = {}));
