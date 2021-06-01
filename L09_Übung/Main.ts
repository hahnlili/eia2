namespace L09_Asteroids {
    window.addEventListener("load", handleload);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];

    function handleload(_event: Event): void {
        console.log("Steine fliegen rum: Aaaah");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.width);

        createPaths();
        console.log("Asteroid paths:", asteroidPaths);

        createAsteroids(5);
        // createShip();

        // canvas.addEventListener("mousdown", loadListener);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);
    }

    function shootLaser (_event: MouseEvent): void{
        console.log("Steine werden abgeschossen");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
    }

    function createAsteroids(_nAteroids: number): void {
        console.log("Asteroiden werden kreiert");
        for (let i: number = 0; i < _nAteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    //wofür genau ist das update?
    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

        //ship.draw();
        // handleCollisions();
    }
}