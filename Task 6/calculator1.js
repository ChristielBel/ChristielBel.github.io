/*global document */
/*global window */
/*global console */

// Event listener for when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the calculate button element
    let calculateButton = document.getElementById("calculateButton");

    // Add a click event listener to the calculate button
    calculateButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Get the quantity input and product select elements
        let quantityInput = document.getElementById("quantity1");
        let productSelect = document.getElementById("product1");
        let result = document.getElementById("result1");

        // Get the quantity and price values
        let q = quantityInput.value;
        let p = productSelect.value;

        // Check if the quantity and price values are valid
        if (q.match(/^\d+$/) === null || p.match(/^\d+$/) === null) {
            result.innerHTML = "Ошибка, некорректные данные";
        } else {
            // Calculate the total price
            let quantity = parseInt(quantityInput.value);
            let price = parseInt(productSelect.value);
            let total = quantity * price;

            // Display the total price
            result.innerHTML = "Стоимость заказа: ₽" + total;
        }
    });
});

// Function to update the price
function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    let quantityInput = document.getElementById("quantity2");
    let quantity2 = parseInt(quantityInput.value);

    // Update the price based on the selected product type
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }

    let radioDiv = document.getElementById("radios");

    // Show or hide the radio buttons based on the selected product type
    if (select.value === "2") {
        radioDiv.style.display = "block";
    } else {
        radioDiv.style.display = "none";
    }

    let radios = document.getElementsByName("prodOptions");

    // Update the price based on the selected radio button
    radios.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });

    let checkDiv = document.getElementById("checkboxes");

    // Show or hide the checkboxes based on the selected product type
    if (select.value === "3") {
        checkDiv.style.display = "block";
    } else {
        checkDiv.style.display = "none";
    }

    let checkboxes = document.querySelectorAll("#checkboxes input");

    // Update the price based on the selected checkboxes
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });

    let q = quantityInput.value;

    // Check if the quantity value is valid
    if (q.match(/^\d+$/) === null) {
        prodPrice.innerHTML = "Ошибка, некорректные данные";
    } else {
        // Calculate the total price
        let totalPrice = price * quantity2;
        let prodPrice = document.getElementById("prodPrice");

        // Display the total price
        prodPrice.innerHTML = "₽" + totalPrice;
    }
}

// Function to get the prices
function getPrices() {
    return {
        prodOptions: {
            option2: 10,
            option3: 5
        },
        prodProperties: {
            prop1: 1,
            prop2: 2
        },
        prodTypes: [100, 200, 150]
    };
}

// Event listener for when the DOM is loaded
window.addEventListener("DOMContentLoaded", function () {
    let quantityInput = document.getElementById("quantity2");

    // Add an input event listener to the quantity input
    quantityInput.addEventListener("input", function () {
        updatePrice();
    });

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";

    let s = document.getElementsByName("prodType");
    let select = s[0];

    // Add a change event listener to the product type select
    select.addEventListener("change", function (event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });

    let radios = document.getElementsByName("prodOptions");

    // Add a change event listener to the radio buttons
    radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let r = event.target;
            console.log(r.value);
            updatePrice();
        });
    });

    let checkboxes = document.querySelectorAll("#checkboxes input");

    // Add a change event listener to the checkboxes
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            let c = event.target;
            console.log(c.name);
            console.log(c.value);
            updatePrice();
        });
    });

    // Update the price
    updatePrice();
});
