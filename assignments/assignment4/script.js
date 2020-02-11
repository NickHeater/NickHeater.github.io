function calculate() {
    //gather info
    const firstName = document.getElementById("txt-first-name").value;
    const lastName = document.getElementById("txt-last-name").value;
    const productName = document.getElementById("txt-product-name").value;
    const productCount = document.getElementById("txt-product-count").value;
    const productPrice = document.getElementById("txt-product-price").value;
    const productTotal = (productCount * productPrice) * 1.07;

    let displayCalc = document.getElementById("result")
    displayCalc.innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s)`;
    let displayTotal = document.getElementById("total")
    displayTotal.innerHTML = `Totalling: ${productTotal}`;
}

const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.onclick = calculate