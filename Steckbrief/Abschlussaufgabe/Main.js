"use strict";
var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleLoad);
    var countOne = 0;
    var countTwo = 0;
    var imageData;
    var movables = [];
    var field;
    //für die Spieler die im Spiel sind und die Spieler die auf der Bank sitzen.
    var onFieldOne = [];
    var onFieldTwo = [];
    var benchOne = [];
    var benchTwo = [];
    var playersOne = [];
    var playersTwo = [];
    var preciMin;
    var preciMax;
    var playerSpeedMin;
    var playerSpeedMax;
    var slider;
    var speedSlider;
    Soccer.actualPlayer = null;
    var playerStatNumber;
    var goalsOne;
    var goalsTwo;
    var playerInfo;
    var teamBuntDiv;
    var teamGrauDiv;
    var executed = false;
    var buttonTeamOne;
    var buttonTeamTwo;
    var allButtons = [];
    function handleLoad(_event) {
        //wie lasse ich das nur ein Mal wirken?
        document.addEventListener("keydown", startGame);
        playerStatNumber = document.getElementById("currentPlayerNumber");
        goalsOne = document.getElementById("goalsOne");
        goalsTwo = document.getElementById("goalsTwo");
        //HTML Infos finden
        slider = document.querySelector("input#precision");
        speedSlider = document.querySelector("input#speed");
        Soccer.colorTeamOne = document.querySelector("input#shirtColorOne");
        Soccer.colorTeamTwo = document.querySelector("input#shirtColorTwo");
        teamBuntDiv = document.getElementById("teamBunt");
        teamGrauDiv = document.getElementById("teamGrau");
        buttonTeamOne = document.getElementById("buntButton");
        buttonTeamTwo = document.getElementById("grauButton");
        //canvas und rendering context wird definiert
        var canvas = document.querySelector("canvas");
        //weshalb hier nochmal if?
        if (!canvas)
            return;
        Soccer.crc2 = canvas.getContext("2d");
        createField();
        imageData = Soccer.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //form.addEventListener("change", changePrecisionOfAllPlayers);
        //listener auf from element
        slider.addEventListener("input", changePrecisionOfAllPlayers);
        speedSlider.addEventListener("input", changeSpeedOfAll);
        Soccer.colorTeamOne.addEventListener("input", changeColorOfTeamOne);
        Soccer.colorTeamTwo.addEventListener("input", changeColorOfTeamTwo);
        buttonTeamOne.addEventListener("click", changePlayersOne);
        buttonTeamTwo.addEventListener("click", changePlayersTwo);
    }
    function startGame() {
        if (!executed) {
            createPlayers();
            fillPlayerArrays();
            createReferee();
            createBall();
            createLinesman();
            window.setInterval(update, 100);
            executed = true;
            updateHTML();
        }
    }
    function createField() {
        field = new Soccer.Field(Soccer.crc2);
        field.draw();
    }
    function displayPlayer() {
        if (Soccer.actualPlayer) {
            //let playerNum: string = actualPlayer.playerNumber.toString();
            //weils undefined ist wills nicht richtig funktionieren? D:
            playerStatNumber.innerHTML = "Team " + (Soccer.actualPlayer.team + 1) + ", Spieler " + Soccer.actualPlayer.playerNumber.toString();
        }
    }
    Soccer.displayPlayer = displayPlayer;
    function displayCountOne() {
        countOne++;
        goalsOne.innerHTML = countOne.toString();
    }
    Soccer.displayCountOne = displayCountOne;
    function displayCountTwo() {
        countTwo++;
        goalsTwo.innerHTML = countTwo.toString();
    }
    Soccer.displayCountTwo = displayCountTwo;
    function createPlayers() {
        for (var team = 0; team < 2; team++) {
            for (var nummer = 0; nummer < 15; nummer++) {
                var tempPlayer = new Soccer.Player(nummer, team, getRandomSpeed(), getRandomPrecision());
                movables.push(tempPlayer);
            }
        }
    }
    function fillPlayerArrays() {
        for (var i = 0; i < 30; i++) {
            var tempPlayer = movables[i];
            if (tempPlayer.getTeam() == 0) {
                playersOne.push(tempPlayer);
            }
            else {
                playersTwo.push(tempPlayer);
            }
        }
        for (var i = 0; i < playersOne.length; i++) {
            if (playersOne[i].isOnField()) {
                onFieldOne.push(playersOne[i]);
            }
            else {
                benchOne.push(playersOne[i]);
            }
        }
        for (var i = 0; i < playersTwo.length; i++) {
            if (playersTwo[i].isOnField()) {
                onFieldTwo.push(playersTwo[i]);
            }
            else {
                benchTwo.push(playersTwo[i]);
            }
        }
    }
    function changePlayersOne() {
        var tempRandOnField = Math.floor(Math.random() * (onFieldOne.length - 1));
        var tempPlayer = onFieldOne[tempRandOnField]; //zwischenspeicherung
        var tempPosition = new Soccer.Vector(tempPlayer.startPosition.x, tempPlayer.startPosition.y);
        onFieldOne.splice(tempRandOnField, 1);
        benchOne[0].setStartposition(tempPosition);
        onFieldOne.push(benchOne[0]);
        tempPlayer.setStartposition(new Soccer.Vector(0, 0));
        benchOne.splice(0, 1); //ein player rasuswerfen, und zwar erster
        benchOne.push(tempPlayer); //gemerkter player wird an letzte bench stelle gepusht
        for (var i = 0; i < onFieldOne.length; i++) {
            console.log("Feld " + i + ":" + onFieldOne[i].playerNumber);
        }
        deleteHTML();
        updateHTML();
    }
    function changePlayersTwo() {
        var tempRandOnField = Math.floor(Math.random() * (onFieldTwo.length - 1));
        var tempPlayer = onFieldTwo[tempRandOnField]; //zwischenspeicherung
        var tempPosition = new Soccer.Vector(tempPlayer.startPosition.x, tempPlayer.startPosition.y);
        onFieldTwo.splice(tempRandOnField, 1);
        benchTwo[0].setStartposition(tempPosition);
        onFieldTwo.push(benchTwo[0]);
        tempPlayer.setStartposition(new Soccer.Vector(0, 0));
        benchTwo.splice(0, 1); //ein player rasuswerfen, und zwar erster
        benchTwo.push(tempPlayer); //gemerkter player wird an letzte bench stelle gepusht
        for (var i = 0; i < onFieldTwo.length; i++) {
            console.log("Feld " + i + ":" + onFieldTwo[i].playerNumber);
        }
        deleteHTML();
        updateHTML();
    }
    function deleteHTML() {
        for (var i = allButtons.length; i > 0; i--) {
            var actualElem = allButtons.pop();
            actualElem.remove();
        }
    }
    function updateHTML() {
        for (var i = 0; i < playersOne.length; i++) {
            console.log("FirstRow");
            var playerButton = document.createElement("button");
            playerButton.textContent = i.toString();
            playerButton.title = "Player: " + playersOne[i].playerNumber.toString() + " with precision: " + playersOne[i].precision + " and speed: " + playersOne[i].speed;
            teamBuntDiv.appendChild(playerButton);
            var br = document.createElement("br");
            teamBuntDiv.appendChild(br);
            allButtons.push(playerButton);
            allButtons.push(br);
        }
        for (var i = 0; i < playersTwo.length; i++) {
            console.log("FirstRow");
            var playerButton = document.createElement("button");
            playerButton.textContent = i.toString();
            playerButton.title = "Player: " + playersTwo[i].playerNumber.toString() + " with precision: " + playersTwo[i].precision + " and speed: " + playersTwo[i].speed;
            teamGrauDiv.appendChild(playerButton);
            var br = document.createElement("br");
            teamGrauDiv.appendChild(br);
            allButtons.push(playerButton);
            allButtons.push(br);
        }
    }
    function createLinesman() {
        movables.push(new Soccer.Linesman(0, Soccer.crc2.canvas.width / 2, 10));
        movables.push(new Soccer.Linesman(Soccer.crc2.canvas.width / 2, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height - 10));
    }
    function createReferee() {
        Soccer.referee = new Soccer.Referee();
        movables.push(Soccer.referee);
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
        deleteHTML();
        updateHTML();
    }
    function getRandomPrecision() {
        var precision = +slider.value;
        var preciMin = precision - (Math.random() * 30);
        var preciMax = precision + (Math.random() * 30);
        return Math.random() * (preciMax - preciMin) + preciMin;
    }
    function changeSpeedOfAll(_event) {
        for (var i = 0; i < 30; i++) {
            var tempPlayer = movables[i];
            tempPlayer.changeSpeed(getRandomSpeed());
        }
        deleteHTML();
        updateHTML();
    }
    function getRandomSpeed() {
        var speed = +speedSlider.value;
        var playerSpeedMin = speed - (Math.random() * 1);
        var playerSpeedMax = speed + (Math.random() * 1);
        return Math.random() * (playerSpeedMax - playerSpeedMin) + playerSpeedMin;
    }
    function changeColorOfTeamOne(_event) {
        var colorOne = +Soccer.colorTeamOne.value;
    }
    function changeColorOfTeamTwo(_event) {
        var colorTwo = +Soccer.colorTeamOne.value;
    }
    function update() {
        Soccer.crc2.fillRect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height);
        Soccer.crc2.putImageData(imageData, 0, 0);
        for (var i = 0; i < movables.length; i++) {
            if (Soccer.actualPlayer == null) {
                movables[i].move(1 / 50);
            }
            movables[i].draw();
        }
    }
})(Soccer || (Soccer = {}));
