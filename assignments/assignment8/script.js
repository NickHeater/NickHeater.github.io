const quotes = ["I don't do my own Instagram. - Young Thug", "I only listen to Lil Wayne. - Young Thug", "You have to be yourself. - Young Thug", "When I was in high school, I had a gambling problem. - Young Thug", "When it comes to swag, there's no gender involved. - Young Thug"];
let changingQuote = document.getElementById("changing-quote");
let pElem = document.createElement("p");

function showQuote() {
    changingQuote.innerHTML = ""; 
    changingQuote.append(pElem);
    pElem.textContent = quotes[0];

}

i = 1;
function toggleQuote() {
    pElem.textContent = quotes[i];
    i += 1;
    if (i > 4){
        i = 0;
    }
}

showQuote();
setInterval(toggleQuote, 2000);


let btnRainbow = document.getElementById("btn-draw-rainbow");
btnRainbow.onclick = drawRainbow;

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let rainbowDiv = document.getElementById("rainbow-div");

function drawRainbow() {
    setTimeout(drawStrip, 1000);
}

j = -1;
function drawStrip() {
    j += 1;
    if (j < 6) {
        let rainbowP = document.createElement("p");
        rainbowDiv.append(rainbowP);
        rainbowP.textContent = (colors[j]);
        rainbowP.classList.add(colors[j]);
        drawRainbow();
    }
    else {
        let potOfGold = document.getElementById("pot");
        potOfGold.classList.remove("hidden");
        return;
    }

}