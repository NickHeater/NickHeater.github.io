class person {

    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }

    get details(){
        return `${this.firstName} ${this.lastName} is in grade ${this.grade}`;
    }

    get item(){
        let trElem = document.createElement("tr");

        let firstNameElem = document.createElement("td");
        firstNameElem.textContent = `${this.firstName}`;
        trElem.append(firstNameElem);

        let lastNameElem = document.createElement("td");
        lastNameElem.textContent = `${this.lastName}`;
        trElem.append(lastNameElem);

        let gradeElem = document.createElement("td");
        gradeElem.textContent = `${this.grade}`;
        trElem.append(gradeElem);

        return trElem;
    }

}

let personTable = document.getElementById("person-table");
let people = [];
people.push(new person("Amy", "Smith", "2"));
people.push(new person("Bobby", "Jones", "6"));
people.push(new person("Kyle", "Beele", "8"));

window.onload = function(){
    let peopleDiv = document.getElementById("people-div");
    let personTable = document.getElementById("person-table");
    
    for(let i in people){
        personTable.append(people[i].item);
    }
}