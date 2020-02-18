function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent() --maybe parsens--
    */

    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");
    displayP.innerHTML = `${firstName} your favorite color is ${favColor}`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId) {
    if (data.trim() == " ") {
        let errorSpan
        errorSpan.classList.remove("hidden");
        return true
    }
    return false
}

function getEmoji(emotion) {
    const emoCI = emotion.toLowerCase()

    if(emoCI == "happy"){
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":("
    }
    else if(emoCI == "silly"){
        return ":p"
    }
    else if(emoCI == "mad"){
        return ">:|"
    }
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;