function displayEmotion() {
    //gather all info and add to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent() -- maybe paren
    */

    let displayP = document.getElementById("ex1-result")
    displayP.innerHTML = `${firstName}, your fav color is ${favColor} and you are ${emotion}`;
    
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion