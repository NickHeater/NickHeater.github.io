let margin = 0;
let img_tracker = 0;

function run() {
    if(img_tracker == 0) {
        man.src = "images/running.png"
        img_tracker = 1;
    }
    else {
        man.src = "images/walking.png"
        img_tracker = 0;
    }
    margin += 3;
    document.getElementById("man").style.setProperty('--marg', margin + "px");
}

let man = document.getElementById("man");
man.onclick = run;

let thermo_bar = 0;
let display_btn = document.getElementById("display")
display_btn.onclick = display;

function display() {
    let funds = document.getElementById("funds-raised").value;
    thermo_bar = funds/100;
    for(let i=0; i<thermo_bar; i+=.1) {
        document.getElementById("thermo").style.setProperty('--bar', i + "%");
    }
}