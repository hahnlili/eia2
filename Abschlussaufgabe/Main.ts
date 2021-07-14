namespace Soccer {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    export let ball: Ball;

    //unbewegliche Bilder werden als Bild gespeichert
    let imageData: ImageData;

    let movables: Movable[] = [];

    let field: Field;

    /* movables[0].draw(); */

    //waren mal global, nur damit ichs weiß für falls was schief geht
    let preciMin: number;
    let preciMax: number;

    //globale variable für spanne von Geschwindigkeit in Km/h die dann mit schieberle bestimmt werden kann
    let playerSpeedMin: number;
    let playerSpeedMax: number;

    let slider: HTMLInputElement;
    let speed: HTMLInputElement;
    export let colorTeamOne: HTMLInputElement;
    export let colorTeamTwo: HTMLInputElement;

    function handleLoad(_event: Event): void {

        //div in dem slider ist finden. Aber wieso?
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
       //HTML Infos finden
       slider = <HTMLInputElement>document.querySelector("input#precision");
       speed = <HTMLInputElement>document.querySelector("input#speed");
       colorTeamOne = <HTMLInputElement>document.querySelector("input#shirtColorOne");
       colorTeamTwo = <HTMLInputElement>document.querySelector("input#shirtColorTwo");

        //canvas und rendering context wird definiert
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas")!;
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        //zum testen schon was drauf gemalt
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.width);


        createField();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        /* createTeam(); */

        createPlayers();
        createReferee();
        createBall();

        //wofür war das nochmal? Brauche ich schon oder?
        window.setInterval(update, 100);

        //form.addEventListener("change", changePrecisionOfAllPlayers);
        //listener auf from element
        slider.addEventListener("input", changePrecisionOfAllPlayers);
        speed.addEventListener("input", changeSpeedOfAll);
        
        colorTeamOne.addEventListener("input", changeColorOfTeamOne);
        colorTeamTwo.addEventListener("input", changeColorOfTeamTwo);
    }


    function createField(): void {
        //genauer aufbau? position holt es sich raus für 
        //wo das Feld dann schlussendlich starten soll auf der canvas?
        //braucht keine eigene position weils die canvas größe übernimmt

        //erstellt field und gibt rendering context

        field = new Field(crc2);
        field.draw();
    }

    /*  function createTeam(): void {
        //genauer aufbau? position holt es sich raus für 
        //wo das Feld dann schlussendlich starten soll auf der canvas?
        let team: Team = new Team(position);
        teams.push(team);
        team.draw();
    } */

    //temp weil diese Daten nicht hier bleiben, sondern in der Klasse genutzt werden?
    //es werden team und spielernummer erstellt. Team in der ersten Schleife (0) und Spieler in der zweiten (0-14=15 Spieler)
    function createPlayers(): void {

        //ich pushe neues Objekt ins Array movables und das 30
        for (let team = 0; team < 2; team++) {
            for (let nummer = 0; nummer < 15; nummer++) {
                //Hier werden ja alle Infos erstellt. 
                //let tempSpeed: number = Math.random() * (playerSpeedMax - playerSpeedMin) + playerSpeedMin;
                //let tempPrecision: number = Math.random() * (preciMax - preciMin) + preciMin;
                let tempPlayer: Player = new Player(nummer, team, getRandomSpeed(), getRandomPrecision());
                movables.push(tempPlayer);
                //console.log(tempPlayer, tempPresicion, tempSpeed);
            }
        }
    }

    function createReferee(): void {

        /*  let referee: Referee = new Referee();
        movables.push(referee);
        referee.draw(); */
    }


    function createBall(): void {
        //console.log("Ball")
        ball = new Ball();
        movables.push(ball);
    }

    function changePrecisionOfAllPlayers(_event: any): void {
        for(let i: number = 0; i < 30; i++){

            let tempPlayer: Player = <Player> movables[i];
            tempPlayer.changePrecision(getRandomPrecision());
            
        }
    }

    function getRandomPrecision(): number{
        //let precisionString: string = (<HTMLInputElement>_event.target).value;
        
        //meine präzi muss ja irgendwie ne nummer werden
        let precision: number = + slider.value;

        let preciMin: number = precision - (Math.random()*1);
        let preciMax: number = precision + (Math.random()*1);

        return Math.random() * (preciMax - preciMin) + preciMin;
    }

    function changeSpeedOfAll(_event: any): void {
        for(let i: number = 0; i < 30; i++){

            let tempPlayer: Player = <Player> movables[i];
            tempPlayer.changeSpeed(getRandomSpeed());
            
        }
    }

    function getRandomSpeed(): number{
        //let precisionString: string = (<HTMLInputElement>_event.target).value;
        
        //meine präzi muss ja irgendwie ne nummer werden
        let speed: number = + slider.value;

        let playerSpeedMin: number = speed - (Math.random()*1);
        let playerSpeedMax: number = speed + (Math.random()*1);

        return Math.random() * (playerSpeedMax - playerSpeedMin) + playerSpeedMin;
    }

    function changeColorOfTeamOne(_event: any): void {
        //muss das überhaupt ne nummer sein?
        let colorOne: number = + colorTeamOne.value;
        console.log(colorTeamOne.value);
    }

    function changeColorOfTeamTwo(_event: any): void {
        //muss das überhaupt ne nummer sein?
        let colorTwo: number = + colorTeamOne.value;
        console.log(colorTeamTwo.value);
    }

    function update(): void {

 //muss das überhaupt ne nummer sein?
 let colorOne: number = + colorTeamOne.value;
 console.log(colorTeamOne.value);

 //muss das überhaupt ne nummer sein?
 let colorTwo: number = + colorTeamOne.value;
 console.log(colorTeamTwo.value);
        
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < movables.length; i++) {
            movables[i].move(1 / 50);
            movables[i].draw();
        }


    }

}
