function handleProductChange(isIncrease, id) {
    const currentPhone = document.getElementById(id + '-quantity');
    const countPhone = parseInt(currentPhone.value);
    let increaseCount = countPhone;
    if (isIncrease == true) {
        increaseCount = countPhone + 1;
    } else if (isIncrease == false && countPhone > 0) {
        increaseCount = countPhone - 1;
    }
    currentPhone.value = increaseCount;
    const totalPhonePrice = productPrice(id);
    document.getElementById(id + "-price").innerText = totalPhonePrice;
    priceCalculation();
}

// .product quantity function
function inputValue(id) {
    const count = document.getElementById(id + '-quantity');
    const countNumber = parseFloat(count.value);
    return countNumber;
}

// . product price function
function productPrice(id) {
    const CountNumber = inputValue(id);
    if (id == "phone") {
        priceNumber = CountNumber * 1200;
    } else if (id == "case") {
        priceNumber = CountNumber * 60;
    }
    return priceNumber;
}

// .price calculation
function priceCalculation() {
    const phonePrice = productPrice("phone");
    const casePrice = productPrice('case');
    const subtotalPrice = phonePrice + casePrice;
    const tax = subtotalPrice * 0.1;
    const totalPrice = subtotalPrice + tax;
    document.getElementById('subtotal-price').innerText = subtotalPrice;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('totalPrice').innerText = totalPrice;
}


// .popup data 
function popup(showHide) {
    document.getElementById('popup').style.visibility = showHide;
    // .quantity
    const phoneQuantity = inputValue("phone");
    document.getElementById('phone-number').innerText = phoneQuantity;
    const caseQuantity = inputValue("case");
    document.getElementById('case-number').innerText = caseQuantity;

    // .popup cost
    const phoneCost = productPrice('phone');
    document.getElementById('iphone-cost').innerText = "$ " + phoneCost;
    const caseCost = productPrice('case');
    document.getElementById('case-cost').innerText = "$ " + caseCost;

    const subtotalCost = phoneCost + caseCost;
    const vatCost = subtotalCost * 0.1;
    document.getElementById('vat-amount').innerText = "$ " + vatCost;
    const totalCost = subtotalCost + vatCost;
    document.getElementById('total-cost').innerText = "$ " + totalCost;
}

// .remove card 
function remove(id) {
    const removeCard = document.getElementById(id + "-part");
    removeCard.style.display = "none";
}

document.getElementById('phone-increase').addEventListener("click", function() {
    handleProductChange(true, "phone");
})

document.getElementById('phone-decrease').addEventListener("click", function() {
    handleProductChange(false, "phone");
})
document.getElementById('case-increase').addEventListener("click", function() {
    handleProductChange(true, "case");
})

document.getElementById('case-decrease').addEventListener("click", function() {
    handleProductChange(false, "case");
})