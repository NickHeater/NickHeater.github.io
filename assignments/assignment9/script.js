class toy {

    constructor(imageFileName, name, price, ageRange, rating){
        this.imageFileName = imageFileName;
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
    }

    get details() {
        return `${this.name} costs ${this.price}. It is intended for kids ages ${this.ageRange} and has a rating of ${this.rating}`;
    }

    get toyItem() {
        //makes container for the overlay
        let divElem = document.createElement("div");
        divElem.className = "container";

        //makes the text for all the items
        let pElem1 = document.createElement("p");
        pElem1.textContent = `${this.name}`;
        let pElem2 = document.createElement("p");
        pElem2.textContent = `Price: ${this.price}`;
        let pElem3 = document.createElement("p");
        pElem3.textContent = `Age Range: ${this.ageRange}`;
        let pElem4 = document.createElement("p");
        pElem4.textContent = `Rating: ${this.rating}`;

        //makes the images and adds to the container
        let imgElem = document.createElement("img");
        imgElem.id = "image"
        imgElem.width = "225"
        imgElem.height = "225"
        imgElem.src = this.imageFileName;
        divElem.append(imgElem);

        //makes the overlay and adds the text from above
        let overlayElem = document.createElement("div");
        overlayElem.className = "overlay";
        overlayElem.append(pElem1);
        overlayElem.append(pElem2);
        overlayElem.append(pElem3);
        overlayElem.append(pElem4);
        divElem.append(overlayElem);

        return divElem;
    }
}

//populates the toy array with toys
let toys = [];
toys.push(new toy("images/house.jpg", "House", "$22", "5-10", "2 stars"));
toys.push(new toy("images/elephant.jpg", "Elephant", "$53", "All", "3 stars"));
toys.push(new toy("images/elmo.jpg", "Elmo", "$5", "10-20", "5 stars"));
toys.push(new toy("images/horse.jpg", "Horse", "$60", "3-5", "2 stars"));
toys.push(new toy("images/phone.jpg", "Phone", "$15", "6-13", "4 stars"));
toys.push(new toy("images/truck.jpg", "Truck", "$68", "4-7", "1.5 stars"));

//loads the pics onto the page
window.onload = function() {
    let picSection = document.getElementById("pic-section");
    
    for(let i in toys){
        picSection.append(toys[i].toyItem);
    }
}
