"use strict"

window.onload = function () {

    let theForm = document.querySelector("#theForm");

    // //get ALL the radios for coneOrCup using querySelectorAll
    // let coneOrCupRadios = document.querySelectorAll("input[name='coneOrCup']");
    let cup = document.querySelector("#cup");
    let cone = document.querySelector("#cone");

    cup.addEventListener("click", hideShowToppings)
    cone.addEventListener("click", hideShowToppings)

    theForm.addEventListener("submit", calcTotal);

    //loop over the radios and add the event lisenter
    // coneOrCupRadios.forEach(function(radio){
    //     radio.addEventListener("click", hideShowToppings);
    // })

}

function calcTotal(event) {
    event.preventDefault()

    //get the the form data from the event target
    let theForm = event.target;

    //get the number of scoops fron the form
    let numScoops = theForm.numScoops.value;

    //They had to get at least one scoop so lets start our total at 2.25
    let iceCreamTotal = 2.25;

    //if the number of scoops is > than 1 than we need to chare 1.35 for each of those
    if (numScoops > 1) {
        iceCreamTotal += (numScoops - 1) * 1.25;
    }

    //if we sold a cup, we should need to calculate the toppings
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

    //calculate the tax assuming 7%
    let taxAmount = iceCreamTotal * (7 / 100);

    let message = `
            <div>Base Price: $${iceCreamTotal.toFixed(2)}</div>
            <div>Tax: $${taxAmount.toFixed(2)}</div>
            <div>Total Due: $${(iceCreamTotal + taxAmount).toFixed(2)}</div>
        `

    //add the total due to the element with the id of results
    document.querySelector("#results").innerHTML = message;

}

//function that hides or shows the toppings element on the page
function hideShowToppings(event) {

    let toppingsSection = document.querySelector("#toppings");

    if (event.target.value === "cup") {
        toppingsSection.classList.remove("d-none")
    } else {
        toppingsSection.classList.add("d-none")
    }

}