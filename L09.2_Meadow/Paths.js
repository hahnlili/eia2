"use strict";
var L09_Meadow;
(function (L09_Meadow) {
    //wir haben 4 Asteroiden Typen, also 1 großes Array mit 4 kleinen Arrays oder so
    L09_Meadow.shapeAsteroids = [
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 43]
        ],
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 43]
        ],
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 43]
        ],
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 43]
        ],
    ];
    function createPaths() {
        L09_Meadow.asteroidPaths = createAsteroidPaths(L09_Meadow.shapeAsteroids);
        //ufoPath = createUfoPath();
    }
    L09_Meadow.createPaths = createPaths;
    function createAsteroidPaths(_shapes) {
        var paths = [];
        for (var _i = 0, _shapes_1 = _shapes; _i < _shapes_1.length; _i++) {
            var type = _shapes_1[_i];
            var path = new Path2D();
            var first = true;
            //console.grou(type);
            for (var _a = 0, type_1 = type; _a < type_1.length; _a++) {
                var coordinates = type_1[_a];
                // console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            //console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
    /*   function createUfoPath(): void{
          let path: Path2D = new Path2D();
          path.moveTo(20,13);
      } */
})(L09_Meadow || (L09_Meadow = {}));
