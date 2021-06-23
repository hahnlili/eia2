namespace L09_Meadow {

    window.addEventListener("load", handleLoad);

    let imageData: ImageData;

    export let crc2: CanvasRenderingContext2D;

    export let golden: number = 0.62;

    let horizon: number;

    /* let clouds: Cloud[] = [];
    let bees: Bee[] = []; */

    let movables: Movable[] = [];

    let flowers: Flower[] = [];

    let nectarSpeed: number = 0.5;

    let widthMultiplier =2.50;

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas")!;
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.width);

        horizon = crc2.canvas.height * golden;


        drawBackground();
        drawGrass();
        drawSun(new Vector(300, 300));
        drawMountain(new Vector(0, horizon), 75, 200, "grey", "white");
        drawTree(new Vector(0, horizon), new Vector(3000, 50));

        /*         for (let index: number = 0; index < 200; index++) {
                    let randomX: number = Math.floor(Math.random() * crc2.canvas.width);
                    let randomY: number = Math.floor(Math.random() * 200);
                    drawStar(randomX, randomY + horizon + 200);
                }
        
                for (let index: number = 0; index < 200; index++) {
                    let randomX: number = Math.floor(Math.random() * crc2.canvas.width);
                    let randomY: number = Math.floor(Math.random() * 200);
                    drawFMN(randomX + 0, randomY + horizon + 200);
                } */

        createFlowers(50);
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBees(5);//die (5) ist das nBees
        createClouds(5);

        window.setInterval(update, 100);
    }

    function createFlowers(_nFlowers: number): void {
        /* console.log("hallo roland"); */

        for (let index: number = 0; index < _nFlowers; index++) {
            let randomX: number = Math.floor(Math.random() * crc2.canvas.width);
            let randomY: number = Math.floor(Math.random() * 100);
            let position: Vector = new Vector(randomX, randomY + horizon + 200);
            //console.log(position);
            let tempFlower: Flower = new Flower(position);
            flowers.push(tempFlower);
            tempFlower.draw();

        }
    }

    function createClouds(_nClouds: number): void {
        console.log("Wolken bedecken den Himmel");

        let size: Vector = new Vector(100, 200);
        let x: number = (0);
        let y: number = (150);
        let position: Vector = new Vector(x, y);

        for (let i: number = 0; i < 3; i++) {

            console.log("wolke" + i);
            let cloud: Cloud = new Cloud(position);
            movables.push(cloud);
            cloud.draw();
        }
    }


    function createBees(_nBees: number): void {
        console.log("Bienen  werden kreiert");

        let size: Vector = new Vector(100, 200);
        let x: number = (0);
        let y: number = (150);
        let position: Vector = new Vector(x, y);
        let velocity: Vector = new Vector(4, 0);

        for (let i: number = 0; i < Math.random() * 1000; i++) {
            let bee: Bee = new Bee(position, velocity);
            movables.push(bee);
        }
    }


    //wofür genau ist das update?
    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let movable of movables) {
            movable.move(1 / 50);
            movable.draw();
        }
        for (let bee of movables) {
            bee.move(1 / 50);
            bee.draw();
        }
        for (let i: number = 0; i < flowers.length; i++) {
            flowers[i].refillNectar(nectarSpeed);
        }

        drawProgressBar();
    }

    function drawProgressBar(): void {
        crc2.fillStyle="#000000";
        crc2.fillRect(50, 50, 100*widthMultiplier, 20);

        crc2.fillStyle="#ffffff";
        crc2.fillRect(50, 50, flowers[0].getNectarAmount()*widthMultiplier, 20);

    }

    function drawTree(_position: Vector, _size: Vector): void {
        console.log("Oh, ein wald!");
        let nParticles: number = 700;

        let x: number = (0);
        let y: number = (0);

        let path1 = new Path2D();

        path1.moveTo(x, y);
        path1.lineTo(x + 10, y + 30);
        path1.lineTo(x - 10, y + 30);

        crc2.save();
        crc2.translate(_position.x, _position.y);


        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() * _size.x);
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(path1);
            crc2.restore();
            crc2.fillStyle = "#8B4513";

            drawTrunk(x, y);
        }
        crc2.restore();
    }

    function drawTrunk(x: number, y: number): void {


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

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#5C7FBA");
        gradient.addColorStop(golden, "#F4A18B");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * golden);
    }

    function drawSun(_position: Vector): void {
        console.log("Sunny today, isnt it?", _position);

        let r1: number = 30;
        let r2: number = 600;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(46, 100%, 86%, 1)");
        gradient.addColorStop(1, "HSLA(11, 85%, 85%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    function drawGrass(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.62, "#7E731D");
        gradient.addColorStop(0.8, "#35461C");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, crc2.canvas.height * 0.6, crc2.canvas.width, crc2.canvas.height * 0.4);
    }

    function drawCloud(_position: Vector, _size: Vector): void {

        //nParticles ist die anzahl der Particel aus denen sich die Wole zusammensetzt
        let nParticles: number = 5;
        let radiusParticle: number = 60;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let particle: Path2D = new Path2D();

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI,);
        gradient.addColorStop(0, "HSLA(295, 28%, 84%, 0.5)");
        gradient.addColorStop(1, "HSLA(295, 28%, 84%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("look at those pretty mountains");
        let stepMin: number = 30;
        let stepMax: number = 70;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);

        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }


}
