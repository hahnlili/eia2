namespace RandomPoem {

    let subjekt : string[] = ["Barbara ", "Ferdinant ", "Der Dino ", "Sonja "];                     //klassischer aufbau array
    let praedikat : string[] = ["zerstört ", "nervt ", "verzaubert ", "verführt ", ];
    let objekt : string[] = ["eine Vase ", "den Professor ","das Essen ", "den Hund "];

                        //console.log(subjekt,praedikat,objekt);

    for(let index:number = 4; index > 0; index --){                                             //index:number = wie viele stellen im Array sind. index>0= anzahl der inhalte muss über null sein --> heißt 1. index -- zählt rückwerts
        //console.log(index);
        let satz = getVerse(subjekt, praedikat, objekt);                                        //hier bekomm ich nur die Stellen im Array?
        console.log(satz);                                                                      //das muss, weil sonst nichts von all dem überhaupt angezeigt wird. 
    }

// die Funktion holt die Werte aus Arrays, aber noch keine Werte aus den Arrays oben. Die werden erst noch zugewiesen mit splice.     

function getVerse (_subjekt: string[], _preadikat: string[], _objekt: string[]){                //_name werte werden entgegen genommen in der funktion
    //console.log("Alohomora");                                                                 //um das auszuführen, muss ich funktion erstmal noch aufrufen oben bei der For-Schleife
    let verse: string = "";                                                                     //neue Variable, die den Vers aufnimmt. Erstmal leer
    
    let randomSubjekt: number = Math.floor(Math.random()*Math.floor(_subjekt.length));          //neue Variable randomSubjekt ist ne Nummer, Math.floor rundet. math.floor(_subjekt.length) rundet die stelle des Arrays. 
    _subjekt.splice(randomSubjekt, 1);                                                           //hier wird jedes mal ein wert aus dem array entfernt, so dass nichts doppelt verwendet werden kann. 
    
    let randomPraedikat: number = Math.floor(Math.random()*Math.floor(_preadikat.length));
    _preadikat.splice(randomPraedikat, 1);
    
    let randomObjekt: number = Math.floor(Math.random()*Math.floor(_objekt.length));
    _objekt.splice(randomObjekt, 1);

    verse = _subjekt[randomSubjekt] + _preadikat[randomPraedikat] + _objekt[randomObjekt];      //vers von oben wird jetzt definiert als kette von arrays.

    return verse;

}

 }
