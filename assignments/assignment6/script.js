function compare() {
    const name1 = document.getElementById("txt-name1").value;
    const name2 = document.getElementById("txt-name2").value;
    const name3 = document.getElementById("txt-name3").value;
    const age1 = document.getElementById("txt-age1").value;
    const age2 = document.getElementById("txt-age2").value;
    const age3 = document.getElementById("txt-age3").value;
    let compareP = document.getElementById("ex1-result");

    let minage = Math.min(age1, age2, age3);
    let maxage = Math.max(age1, age2, age3);

    if(age1 == minage && age3 == maxage) {
        compareP.innerHTML = `${name3}, ${name2}, ${name1}`
    }
    else if(age1 == minage && age2 == maxage) {
        compareP.innerHTML = `${name2}, ${name3}, ${name1}`
    }
    else if(age2 == minage && age1 == maxage) {
        compareP.innerHTML = `${name1}, ${name3}, ${name2}`
    }
    else if(age2 == minage && age3 == maxage) {
        compareP.innerHTML = `${name3}, ${name3}, ${name2}`
    }
    else if(age3 == minage && age1 == maxage) {
        compareP.innerHTML = `${name1}, ${name2}, ${name3}`
    }
    else if(age3 == minage && age2 == maxage) {
        compareP.innerHTML = `${name2}, ${name1}, ${name3}`
    }
}

function display() {
    const funds = document.getElementById("txt-fundsraised").value;

    if(2500 < funds < 5000) {
        let thermometer = document.getElementById("thermometer").style;
        thermometer.background = "rgb(255,0,0);";
        thermometer.background = "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);";
    }
}

const btnCompare = document.getElementById("btn-compare");
btnCompare.onclick = compare;

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = display;

function toggleNav() {
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

const navToggle = document.getElementById("nav-toggle")
navToggle.onclick = toggleNav;