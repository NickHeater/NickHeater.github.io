async function showBreweries() {
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let breweriesJSON = await response.json();
    let breweryDiv = document.getElementById("breweries-section");
    
    //loops through list of movies in the JSON file
    for(i in breweriesJSON) {
        let brewery = breweriesJSON[i];
        breweryDiv.append(getBreweryItem(brewery));
    }
}

function getBreweryItem(brewery) {
    let brewerySection = document.createElement("section");
    brewerySection.className = "brewery";

    let nameElem = document.createElement("h3");
    nameElem.innerText = `${brewery.name}`;
    brewerySection.append(nameElem);

    let typeElem = document.createElement("p");
    typeElem.innerText = `Brewery Type: ${brewery.brewery_type}`;
    brewerySection.append(typeElem);

    let streetElem = document.createElement("p");
    streetElem.innerText = `${brewery.street}`;
    brewerySection.append(streetElem);

    let cityElem = document.createElement("p");
    cityElem.innerText = `${brewery.city}`;
    brewerySection.append(cityElem);

    let stateElem = document.createElement("p");
    stateElem.innerText = `${brewery.state}`;
    brewerySection.append(stateElem);

    let postalElem = document.createElement("p");
    postalElem.innerText = `${brewery.postal_code}`;
    brewerySection.append(postalElem);

    let countryElem = document.createElement("p");
    countryElem.innerText = `${brewery.country}`;
    brewerySection.append(countryElem);

    let phoneElem = document.createElement("p");
    phoneElem.innerText = `${brewery.phone}`;
    brewerySection.append(phoneElem);

    let websiteElem = document.createElement("a");
    websiteElem.href = `${brewery.website_url}`;
    websiteElem.innerText = `Website`;
    brewerySection.append(websiteElem);

    return brewerySection;
}

window.onload = function() {
    this.showBreweries();
}