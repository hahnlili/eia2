namespace L03 {
window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void{
    console.log("start");
    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");              //suche nach Div
    let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");    //suche nach slider

    form.addEventListener("change", handleChange);
    slider.addEventListener("input", displayAmount);                                            //display amount wird aufgerufen
}

function handleChange(_event: Event): void{
    //console.log(_event);
    //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
    //console.log(drink.value);


    //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    order.innerHTML = "";


//hier funktioniert irgendwas nicht, form data ist kein array oder string, aber wieso??
    let formData: FormData = new FormData(document.forms[0]);                                   //greifen aufs nullte element zu
    for (let entry of formData){
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
        let price: number = Number(item.getAttribute("price"));
        
        order.innerHTML += item.name + "  €" + price;
    }
}

function displayAmount(_event:Event): void{
    let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");        //progress bar suchen
    let amount: string = (<HTMLInputElement>_event.target).value;                                       //suche string
    progress.value = parseFloat(amount); 
}

 
}