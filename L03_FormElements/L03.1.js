"use strict";
var L03;
(function (L03) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("start");
        var form = document.querySelector("div#form"); //suche nach Div
        var slider = document.querySelector("input#amount"); //suche nach slider
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount); //display amount wird aufgerufen
    }
    function handleChange(_event) {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        var order = document.querySelector("div#order");
        order.innerHTML = "";
        //hier funktioniert irgendwas nicht, form data ist kein array oder string, aber wieso??
        var formData = new FormData(document.forms[0]); //greifen aufs nullte element zu
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  €" + price;
        }
    }
    function displayAmount(_event) {
        var progress = document.querySelector("progress"); //progress bar suchen
        var amount = _event.target.value; //suche string
        progress.value = parseFloat(amount);
    }
})(L03 || (L03 = {}));
