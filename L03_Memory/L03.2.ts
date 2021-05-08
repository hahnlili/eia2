namespace Memory {
    window.addEventListener("load", handleLoad);


    let foundPair: number;
    let allCards: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",]
    let chooseAmount: HTMLInputElement = <HTMLInputElement>document.querySelector("div#amount");
    let cardSize: HTMLInputElement = <HTMLInputElement>document.querySelector("div#slider");
    let color: HTMLInputElement = <HTMLInputElement>document.querySelector("div#backround");
    let cardColor: HTMLInputElement = <HTMLInputElement>document.querySelector("div#cardColor");
    let fontColor: HTMLInputElement = <HTMLInputElement>document.querySelector("div#fontColor"); // nicht gleich als HTML deklarieren, erst in der funktion

    let startButton: HTMLButtonElement;

    function handleLoad(_event: Event): void {

      //  chooseAmount.addEventListener("input", handleChange);
      //  cardSize.addEventListener("input", handleChange);
      //  color.addEventListener("input", handleChange);
      //  cardColor.addEventListener("input", handleChange);
      //  fontColor.addEventListener("input", handleChange); //listener unnötig, listeer nur auf button

        startButton.addEventListener("click", createCards);
    }

    function createCards(_event: Event): void {
        // hier will ich die info aus chooseAmount aus der HTML datei auswerten und erstellen
        // also muss ich die info da raus holen und dann cardArray erstellen? Bzw. füllen
        let cardArray: string[] = [];
        for (let i = 0; i > 2; i++) {
            console.log("halllo?")
        }
    }

    function handleChange(_event: Event): void {

    }


    function displayAmount(_event: Event): void {
    }
}