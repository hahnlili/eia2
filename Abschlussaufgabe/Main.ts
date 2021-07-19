namespace Soccer {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let ball: Ball;
    export let referee: Referee;
    export let linesman: Linesman;

    let countOne: number = 0;
    let countTwo: number = 0;

    let imageData: ImageData;

    let movables: Movable[] = [];
    let field: Field;

    //für die Spieler die im Spiel sind und die Spieler die auf der Bank sitzen.
    let onFieldOne: Player[] = [];
    let onFieldTwo: Player[] = [];
    let benchOne: Player[] = [];
    let benchTwo: Player[] = [];

    let playersOne: Player[] = [];
    let playersTwo: Player[] = [];

    let preciMin: number;
    let preciMax: number;

    let playerSpeedMin: number;
    let playerSpeedMax: number;

    let slider: HTMLInputElement;
    let speedSlider: HTMLInputElement;

    export let colorTeamOne: HTMLInputElement;
    export let colorTeamTwo: HTMLInputElement;

    export let actualPlayer: Player | null = null;

    let playerStatNumber: HTMLParagraphElement;

    let goalsOne: HTMLParagraphElement;
    let goalsTwo: HTMLParagraphElement;

    let playerInfo: HTMLParagraphElement;

    let teamBuntDiv: HTMLDivElement;
    let teamGrauDiv: HTMLDivElement;

    let executed: boolean = false;

    let buttonTeamOne: HTMLButtonElement;
    let buttonTeamTwo: HTMLButtonElement;

    let allButtons: HTMLElement[] = [];

    function handleLoad(_event: Event): void {

        //wie lasse ich das nur ein Mal wirken?
        document.addEventListener("keydown", startGame);


        playerStatNumber = <HTMLParagraphElement>document.getElementById("currentPlayerNumber");

        goalsOne = <HTMLParagraphElement>document.getElementById("goalsOne");
        goalsTwo = <HTMLParagraphElement>document.getElementById("goalsTwo");

        //HTML Infos finden
        slider = <HTMLInputElement>document.querySelector("input#precision");
        speedSlider = <HTMLInputElement>document.querySelector("input#speed");
        colorTeamOne = <HTMLInputElement>document.querySelector("input#shirtColorOne");
        colorTeamTwo = <HTMLInputElement>document.querySelector("input#shirtColorTwo");

        teamBuntDiv = <HTMLDivElement>document.getElementById("teamBunt");
        teamGrauDiv = <HTMLDivElement>document.getElementById("teamGrau");

        buttonTeamOne = <HTMLButtonElement>document.getElementById("buntButton")
        buttonTeamTwo = <HTMLButtonElement>document.getElementById("grauButton")

        //canvas und rendering context wird definiert
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas")!;
        //weshalb hier nochmal if?
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        createField();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        //form.addEventListener("change", changePrecisionOfAllPlayers);
        //listener auf from element
        slider.addEventListener("input", changePrecisionOfAllPlayers);
        speedSlider.addEventListener("input", changeSpeedOfAll);

        colorTeamOne.addEventListener("input", changeColorOfTeamOne);
        colorTeamTwo.addEventListener("input", changeColorOfTeamTwo);



        buttonTeamOne.addEventListener("click", changePlayersOne);
        buttonTeamTwo.addEventListener("click", changePlayersTwo);
    }

    function startGame(): void {

        if (!executed) {

            createPlayers();
            fillPlayerArrays();

            createReferee();

            createBall();

            createLinesman()

            window.setInterval(update, 100);

            executed = true;

            updateHTML();
        }
    }

    function createField(): void {

        field = new Field(crc2);
        field.draw();
    }

    export function displayPlayer(): void {
        if (actualPlayer) {
            //let playerNum: string = actualPlayer.playerNumber.toString();
            //weils undefined ist wills nicht richtig funktionieren? D:
            playerStatNumber.innerHTML = "Team " + (actualPlayer.team + 1) + ", Spieler " + actualPlayer.playerNumber.toString();
        }
    }

    export function displayCountOne(): void {

        countOne++;
        goalsOne.innerHTML = countOne.toString();

    }

    export function displayCountTwo(): void {
        countTwo++;
        goalsTwo.innerHTML = countTwo.toString();
    }

    function createPlayers(): void {

        for (let team = 0; team < 2; team++) {
            for (let nummer = 0; nummer < 15; nummer++) {
                let tempPlayer: Player = new Player(nummer, team, getRandomSpeed(), getRandomPrecision());
                movables.push(tempPlayer);
            }
        }
    }


    function fillPlayerArrays(): void {
        for (let i: number = 0; i < 30; i++) {
            let tempPlayer: Player = <Player>movables[i];
            if (tempPlayer.getTeam() == 0) {
                playersOne.push(tempPlayer);
            } else {
                playersTwo.push(tempPlayer);
            }
        }
        for (let i: number = 0; i < playersOne.length; i++) {
            if (playersOne[i].isOnField()) {
                onFieldOne.push(playersOne[i]);
            } else {
                benchOne.push(playersOne[i]);
            }
        }
        for (let i: number = 0; i < playersTwo.length; i++) {
            if (playersTwo[i].isOnField()) {
                onFieldTwo.push(playersTwo[i]);
            } else {
                benchTwo.push(playersTwo[i]);
            }
        }
    }

    function changePlayersOne(): void {

        let tempRandOnField: number = Math.floor(Math.random() * (onFieldOne.length - 1));  
        let tempPlayer: Player = onFieldOne[tempRandOnField];//zwischenspeicherung

        let tempPosition: Vector = new Vector(tempPlayer.startPosition.x, tempPlayer.startPosition.y);
        onFieldOne.splice(tempRandOnField, 1);
        benchOne[0].setStartposition(tempPosition);
        onFieldOne.push(benchOne[0]);
        tempPlayer.setStartposition(new Vector(0, 0));

        benchOne.splice(0, 1);//ein player rasuswerfen, und zwar erster
        benchOne.push(tempPlayer);//gemerkter player wird an letzte bench stelle gepusht

        for(let i: number = 0; i < onFieldOne.length; i++){
            console.log("Feld " + i + ":" + onFieldOne[i].playerNumber);
        }

        deleteHTML();
        updateHTML();

    }
    function changePlayersTwo(): void {
        let tempRandOnField: number = Math.floor(Math.random() * (onFieldTwo.length - 1));  
        let tempPlayer: Player = onFieldTwo[tempRandOnField];//zwischenspeicherung

        let tempPosition: Vector = new Vector(tempPlayer.startPosition.x, tempPlayer.startPosition.y);
        onFieldTwo.splice(tempRandOnField, 1);
        benchTwo[0].setStartposition(tempPosition);
        onFieldTwo.push(benchTwo[0]);
        tempPlayer.setStartposition(new Vector(0, 0));

        benchTwo.splice(0, 1);//ein player rasuswerfen, und zwar erster
        benchTwo.push(tempPlayer);//gemerkter player wird an letzte bench stelle gepusht

        for(let i: number = 0; i < onFieldTwo.length; i++){
            console.log("Feld " + i + ":" + onFieldTwo[i].playerNumber);
        }

        deleteHTML();
        updateHTML();
    }

    function deleteHTML(): void {
        for (let i: number = allButtons.length; i > 0; i--) {
            let actualElem: HTMLElement = <HTMLElement>allButtons.pop();
            actualElem.remove();
        }
    }

    function updateHTML(): void {

        for (let i: number = 0; i < playersOne.length; i++) {
            console.log("FirstRow");
            let playerButton: HTMLButtonElement = document.createElement("button");
            playerButton.textContent = i.toString();
            playerButton.title = "Player: " + playersOne[i].playerNumber.toString() + " with precision: " + playersOne[i].precision + " and speed: " + playersOne[i].speed;
            teamBuntDiv.appendChild(playerButton);
            let br: HTMLElement = document.createElement("br");
            teamBuntDiv.appendChild(br);
            allButtons.push(playerButton);
            allButtons.push(br);
        }

        for (let i: number = 0; i < playersTwo.length; i++) {
            console.log("FirstRow");
            let playerButton: HTMLButtonElement = document.createElement("button");
            playerButton.textContent = i.toString();
            playerButton.title = "Player: " + playersTwo[i].playerNumber.toString() + " with precision: " + playersTwo[i].precision + " and speed: " + playersTwo[i].speed;
            teamGrauDiv.appendChild(playerButton);
            let br: HTMLElement = document.createElement("br");
            teamGrauDiv.appendChild(br);
            allButtons.push(playerButton);
            allButtons.push(br);
        }
    }

    function createLinesman(): void {

            movables.push(new Linesman(0, crc2.canvas.width/2, 10));
            movables.push(new Linesman(crc2.canvas.width/2, crc2.canvas.width, crc2.canvas.height-10));
        
    }

    function createReferee(): void {
        referee = new Referee();
        movables.push(referee);
    }


    function createBall(): void {
        //console.log("Ball")
        ball = new Ball();
        movables.push(ball);
    }


    function changePrecisionOfAllPlayers(_event: any): void {
        for (let i: number = 0; i < 30; i++) {
            let tempPlayer: Player = <Player>movables[i];
            tempPlayer.changePrecision(getRandomPrecision());
        }
        deleteHTML();
        updateHTML();
    }

    function getRandomPrecision(): number {

        let precision: number = + slider.value;

        let preciMin: number = precision - (Math.random() * 30);
        let preciMax: number = precision + (Math.random() * 30);

        return Math.random() * (preciMax - preciMin) + preciMin;

    }




    function changeSpeedOfAll(_event: any): void {

        for (let i: number = 0; i < 30; i++) {
            let tempPlayer: Player = <Player>movables[i];
            tempPlayer.changeSpeed(getRandomSpeed());

        }
        deleteHTML();
        updateHTML();
    }

    function getRandomSpeed(): number {

        let speed: number = + speedSlider.value;

        let playerSpeedMin: number = speed - (Math.random() * 1);
        let playerSpeedMax: number = speed + (Math.random() * 1);

        return Math.random() * (playerSpeedMax - playerSpeedMin) + playerSpeedMin;

    }

    function changeColorOfTeamOne(_event: any): void {

        let colorOne: number = + colorTeamOne.value;

    }

    function changeColorOfTeamTwo(_event: any): void {

        let colorTwo: number = + colorTeamOne.value;

    }

    function update(): void {

        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < movables.length; i++) {
            if (actualPlayer == null) {
                movables[i].move(1 / 50);
            }
            movables[i].draw();
        }
    }
}
