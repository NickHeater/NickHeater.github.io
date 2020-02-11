function showBoy() {
    let title = document.getElementById("title");
    title.innerHTML = "Boy";
}

function showGirl() {
    document.getElementById("title");
    title.innerHTML = "Girl";
}

function changeFace() {
    let image = document.getElementById("face");
    if (image.src.match("images/sadface.jpg")) {
        image.src = "images/happyface.jpg";
    } 
    else if (image.src.match("images/happyface.jpg")) {
        image.src = "images/madface.jpg";
    }
    else if (image.src.match("images/madface.jpg")) {
        image.src = "images/scaredface.jpg";
    }
    else if (image.src.match("images/scaredface.jpg")) {
        image.src = "images/sadface.jpg";
    }
}

let btnboy = document.getElementById("btn-boy");
btnboy.onclick = showBoy;

let btngirl = document.getElementById("btn-girl");
btngirl.onclick = showGirl;

let btnface = document.getElementById("face");
btnface.onclick = changeFace;

