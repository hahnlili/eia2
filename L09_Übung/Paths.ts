namespace L09_Asteroids {

    export let asteroidPaths: Path2D[];
    export let ufoPath: Path2D;

    //wir haben 4 Asteroiden Typen, also 1 großes Array mit 4 kleinen Arrays oder so
    export let shapeAsteroids: number[][][] = [
        [
            [30,1],[50,15],[71,1],[88,31],[67,40],[84,63],[59,93],[30,79],[19,87],[2,63],[15,43]
        ],
        [
            [30,1],[50,15],[71,1],[88,31],[67,40],[84,63],[59,93],[30,79],[19,87],[2,63],[15,43]
        ],
        [
            [30,1],[50,15],[71,1],[88,31],[67,40],[84,63],[59,93],[30,79],[19,87],[2,63],[15,43]
        ],
        [
            [30,1],[50,15],[71,1],[88,31],[67,40],[84,63],[59,93],[30,79],[19,87],[2,63],[15,43]
        ],
    ];
    export function createPaths(): void{
        asteroidPaths = createAsteroidPaths(shapeAsteroids);
        //ufoPath = createUfoPath();
    }

    function createAsteroidPaths(_shapes: number[][][]): Path2D[]{
        let paths: Path2D[] = [];
        for (let type of _shapes){
            let path: Path2D = new Path2D();
            let first: boolean = true;
            //console.grou(type);
            for (let coordinates of type){
                // console.log(coordinates);
                if (first)
                path.moveTo(coordinates[0], coordinates[1]);
                else
                path.lineTo(coordinates[0],coordinates[1]);
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
}