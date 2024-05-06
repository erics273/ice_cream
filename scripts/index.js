"use strict"

window.onload = function () {

    let theForm = document.querySelector("#theForm");

    //get ALL the radios for coneOrCup using querySelectorAll
    let coneOrCupRadios = document.querySelectorAll("#coneOrCup");

    theForm.addEventListener("submit", calcTotal);

    //loop over the radios and add the event lisenter
    coneOrCupRadios.forEach(function(radio){
        radio.addEventListener("click", hideShowToppings);
    })

}

function calcTotal(event) {
    event.preventDefault()

    let theForm = event.target;
    let numScoops = theForm.numScoops.value;

    let iceCreamTotal = 2.25;

    if (numScoops > 1) {
        iceCreamTotal += (numScoops - 1) * 1.25;
    }

    if (theForm.coneOrCup.value === "cup") {

        if (theForm.sprinkles.checked) {
            iceCreamTotal += .50;
        }

        if (theForm.whippedCream.checked) {
            iceCreamTotal += .25;
        }

        if (theForm.hotFudge.checked) {
            iceCreamTotal += 1.25;
        }

        if (theForm.cherry.checked) {
            iceCreamTotal += .25;
        }
    }

    let taxAmount = iceCreamTotal * (7 / 100);

    let message = `
            <div>Base Price: $${iceCreamTotal.toFixed(2)}</div>
            <div>Tax: $${taxAmount.toFixed(2)}</div>
            <div>Total Due: $${(iceCreamTotal + taxAmount).toFixed(2)}</div>
        `

    document.querySelector("#results").innerHTML = message;

}

function hideShowToppings(event) {

    let toppingsSection = document.querySelector("#toppings");

    if (event.target.value === "cup") {
        toppingsSection.classList.remove("d-none")
    } else {
        toppingsSection.classList.add("d-none")
    }

}