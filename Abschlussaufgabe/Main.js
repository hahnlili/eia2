"use strict";
var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleLoad);
    //unbewegliche Bilder werden als Bild gespeichert
    var imageData;
    var movables = [];
    var field;
    /* movables[0].draw(); */
    //waren mal global, nur damit ichs weiß für falls was schief geht
    var preciMin;
    var preciMax;
    //globale variable für spanne von Geschwindigkeit in Km/h die dann mit schieberle bestimmt werden kann
    var playerSpeedMin;
    var playerSpeedMax;
    var slider;
    var speed;
    function handleLoad(_event) {
        //div in dem slider ist finden. Aber wieso?
        var form = document.querySelector("div#form");
        //HTML Infos finden
        slider = document.querySelector("input#precision");
        speed = document.querySelector("input#speed");
        Soccer.colorTeamOne = document.querySelector("input#shirtColorOne");
        Soccer.colorTeamTwo = document.querySelector("input#shirtColorTwo");
        //canvas und rendering context wird definiert
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Soccer.crc2 = canvas.getContext("2d");
        //zum testen schon was drauf gemalt
        Soccer.crc2.fillStyle = "black";
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.fillRect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.width);
        createField();
        imageData = Soccer.crc2.getImageData(0, 0, canvas.width, canvas.height);
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
        Soccer.colorTeamOne.addEventListener("input", changeColorOfTeamOne);
        Soccer.colorTeamTwo.addEventListener("input", changeColorOfTeamTwo);
    }
    function createField() {
        //genauer aufbau? position holt es sich raus für 
        //wo das Feld dann schlussendlich starten soll auf der canvas?
        //braucht keine eigene position weils die canvas größe übernimmt
        //erstellt field und gibt rendering context
        field = new Soccer.Field(Soccer.crc2);
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
    function createPlayers() {
        //ich pushe neues Objekt ins Array movables und das 30
        for (var team = 0; team < 2; team++) {
            for (var nummer = 0; nummer < 15; nummer++) {
                //Hier werden ja alle Infos erstellt. 
                //let tempSpeed: number = Math.random() * (playerSpeedMax - playerSpeedMin) + playerSpeedMin;
                //let tempPrecision: number = Math.random() * (preciMax - preciMin) + preciMin;
                var tempPlayer = new Soccer.Player(nummer, team, getRandomSpeed(), getRandomPrecision());
                movables.push(tempPlayer);
                //console.log(tempPlayer, tempPresicion, tempSpeed);
            }
        }
    }
    function createReferee() {
        /*  let referee: Referee = new Referee();
        movables.push(referee);
        referee.draw(); */
    }
    function createBall() {
        //console.log("Ball")
        Soccer.ball = new Soccer.Ball();
        movables.push(Soccer.ball);
    }
    function changePrecisionOfAllPlayers(_event) {
        for (var i = 0; i < 30; i++) {
            var tempPlayer = movables[i];
            tempPlayer.changePrecision(getRandomPrecision());
        }
    }
    function getRandomPrecision() {
        //let precisionString: string = (<HTMLInputElement>_event.target).value;
        //meine präzi muss ja irgendwie ne nummer werden
        var precision = +slider.value;
        var preciMin = precision - (Math.random() * 1);
        var preciMax = precision + (Math.random() * 1);
        return Math.random() * (preciMax - preciMin) + preciMin;
    }
    function changeSpeedOfAll(_event) {
        for (var i = 0; i < 30; i++) {
            var tempPlayer = movables[i];
            tempPlayer.changeSpeed(getRandomSpeed());
        }
    }
    function getRandomSpeed() {
        //let precisionString: string = (<HTMLInputElement>_event.target).value;
        //meine präzi muss ja irgendwie ne nummer werden
        var speed = +slider.value;
        var playerSpeedMin = speed - (Math.random() * 1);
        var playerSpeedMax = speed + (Math.random() * 1);
        return Math.random() * (playerSpeedMax - playerSpeedMin) + playerSpeedMin;
    }
    function changeColorOfTeamOne(_event) {
        //muss das überhaupt ne nummer sein?
        var colorOne = +Soccer.colorTeamOne.value;
        console.log(Soccer.colorTeamOne.value);
    }
    function changeColorOfTeamTwo(_event) {
        //muss das überhaupt ne nummer sein?
        var colorTwo = +Soccer.colorTeamOne.value;
        console.log(Soccer.colorTeamTwo.value);
    }
    function update() {
        //muss das überhaupt ne nummer sein?
        var colorOne = +Soccer.colorTeamOne.value;
        console.log(Soccer.colorTeamOne.value);
        //muss das überhaupt ne nummer sein?
        var colorTwo = +Soccer.colorTeamOne.value;
        console.log(Soccer.colorTeamTwo.value);
        Soccer.crc2.fillRect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height);
        Soccer.crc2.putImageData(imageData, 0, 0);
        for (var i = 0; i < movables.length; i++) {
            movables[i].move(1 / 50);
            movables[i].draw();
        }
    }
})(Soccer || (Soccer = {}));
