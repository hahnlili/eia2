namespace L03 {

    // console.log("hallo");

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {                                              //listener sollten hier an alle Elemente die vorgeschrieben sind im HTML angehängt werden. 
        //console.log("_event");

        document.addEventListener("mousemove", setInfoBox);                                 //listener installiert - tut aber noch nichts. 
        //console.log("klappt1");

        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        document.addEventListener("mousemove", crossHair);

        // let lines: NodeListOf<HTMLElement> = document.querySelectorAll("section");          //listener installiert für funkton die fadenkreuz bewegen soll
        // for (let x : number = 0; x < 1; x++){
        //     lines[x].addEventListener("mousemove", crossHair);
        // }

        let bothDivs: NodeListOf<HTMLElement> = document.querySelectorAll("div");
        for (let i: number = 0; i < 1; i++) {                                                   //1. Startzustand 2. laufbedingung -- wenn bedingung stimmt wird ausgeführt 3. veränderung
            //console.log("klappt");
            bothDivs[i].addEventListener("click", logInfo);                                     //hier musste ich ein Array erstellen um beide div zu bestimmen --> sind aber noch nicht bestimmt.
            //console.log("Klappt auch");
            bothDivs[i].addEventListener("keyup", logInfo);
        }

        //bonus Aufgabe
        // let customButton: NodeListOf<HTMLElement> = document.querySelectorAll("button");
        //document.addEventListener("click", customButton);



    }
    function setInfoBox(_event: MouseEvent): void {
        //console.log("help");
        // let x = document.getElementById("span").innerText; --> brauch ich nicht, weil ich keine Infos aus dem Span wil, da dort noch gar keine sind.                                             
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");                          //das span Element wurde ausgewählt
        let x: number = _event.clientX;                                                         //x hat jetzt die coordinaten x
        let y: number = _event.clientY;                                                         //y hat jetzt die coordinaten y
        //let coordinates:string = "X-Coordinates" + x + "Y-Coordinates"+ y;                    //Der Schritt ist notwendig, weshalb auch immer...

        let target: EventTarget = <EventTarget>_event.target;
        span.innerText = "X-Coordinates: " + x + " and " + " | Y-Coordinates: " + y + " Current Target " + target;
        //console.log("klappt3");

        span.style.left = x + 10 + "px";
        span.style.top = y + 3 + "px";
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath);
    }

    function crossHair(_event: MouseEvent): void {

        let verticalLine: HTMLElement = <HTMLElement>document.querySelector("#vertical");
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        verticalLine.style.left = x + "px";
        verticalLine.style.top = y - 1000 + "px";

        let horizontalLine: HTMLElement = <HTMLElement>document.querySelector("#horizontal");
        horizontalLine.style.left = x - 1000 + "px";
        horizontalLine.style.top = y + "px";

    }

    function customButton(_event: MouseEvent,clicked_id:any): void {

        let button: HTMLButtonElement = document.createElement("button");
        button.textContent = "Click";
        document.body.appendChild(button);
        
        installListenerDOM(button);

        window.addEventListener("click", handleClick);
        window.addEventListener("click", handleClick, true);
    }
    function handleClick(_event: Event): void {
        if (_event.currentTarget == window && _event.eventPhase == 1)
            console.warn("Event started: " + _event.type);
        console.groupCollapsed("Event-Phase = " + _event.eventPhase + " | CurrentTarget = " + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Path: " + _event.composedPath());
        console.groupEnd();
    }

    function installListenerDOM(_target: HTMLElement): void {
        while (true) {
            _target.addEventListener("click", handleClick);
            _target.addEventListener("click", handleClick, true);
            if (_target.parentElement)
                _target = _target.parentElement;
            else
                break;
        }
    }
}
