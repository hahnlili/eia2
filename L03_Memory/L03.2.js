"use strict";
var Memory;
(function (Memory) {
    window.addEventListener("load", handleLoad);
    var foundPair;
    var allCards = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",];
    var chooseAmount = document.querySelector("div#amount");
    var cardSize = document.querySelector("div#slider");
    var color = document.querySelector("div#backround");
    var cardColor = document.querySelector("div#cardColor");
    var fontColor = document.querySelector("div#fontColor"); // nicht gleich als HTML deklarieren, erst in der funktion
    var startButton;
    function handleLoad(_event) {
        //  chooseAmount.addEventListener("input", handleChange);
        //  cardSize.addEventListener("input", handleChange);
        //  color.addEventListener("input", handleChange);
        //  cardColor.addEventListener("input", handleChange);
        //  fontColor.addEventListener("input", handleChange); //listener unnötig, listeer nur auf button
        startButton.addEventListener("click", createCards);
    }
    function createCards(_event) {
        // hier will ich die info aus chooseAmount aus der HTML datei auswerten und erstellen
        // also muss ich die info da raus holen und dann cardArray erstellen? Bzw. füllen
        var cardArray = [];
        for (var i = 0; i > 2; i++) {
            console.log("halllo?");
        }
    }
    function handleChange(_event) {
    }
    function displayAmount(_event) {
    }
})(Memory || (Memory = {}));
