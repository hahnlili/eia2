"use strict";
var RandomPoem;
(function (RandomPoem) {
    var subjekt = ["Barbara ", "Ferdinant ", "Der Dino ", "Sonja "]; //klassischer aufbau array
    var praedikat = ["zerstört ", "nervt ", "verzaubert ", "verführt ",];
    var objekt = ["eine Vase ", "den Professor ", "das Essen ", "den Hund "];
    //console.log(subjekt,praedikat,objekt);
    for (var index = 4; index > 0; index--) { //index:number = wie viele stellen im Array sind. index>0= anzahl der inhalte muss über null sein --> heißt 1. index -- zählt rückwerts
        //console.log(index);
        var satz = getVerse(subjekt, praedikat, objekt); //hier bekomm ich nur die Stellen im Array?
        console.log(satz); //das muss, weil sonst nichts von all dem überhaupt angezeigt wird. 
    }
    // die Funktion holt die Werte aus Arrays, aber noch keine Werte aus den Arrays oben. Die werden erst noch zugewiesen mit splice.     
    function getVerse(_subjekt, _preadikat, _objekt) {
        //console.log("Alohomora");                                                                 //um das auszuführen, muss ich funktion erstmal noch aufrufen oben bei der For-Schleife
        var verse = ""; //neue Variable, die den Vers aufnimmt. Erstmal leer
        var randomSubjekt = Math.floor(Math.random() * Math.floor(_subjekt.length)); //neue Variable randomSubjekt ist ne Nummer, Math.floor rundet. math.floor(_subjekt.length) rundet die stelle des Arrays. 
        var randomPraedikat = Math.floor(Math.random() * Math.floor(_preadikat.length));
        var randomObjekt = Math.floor(Math.random() * Math.floor(_objekt.length));
        verse = _subjekt[randomSubjekt] + _preadikat[randomPraedikat] + _objekt[randomObjekt]; //vers von oben wird jetzt definiert als kette von arrays.
        _subjekt.splice(randomSubjekt, 1); //hier wird jedes mal ein wert aus dem array entfernt, so dass nichts doppelt verwendet werden kann. 
        _preadikat.splice(randomPraedikat, 1);
        _objekt.splice(randomObjekt, 1);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
