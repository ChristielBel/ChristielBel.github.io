/*global document */
/*global window */
/*global console */

document.addEventListener("DOMContentLoaded", function () {
    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function (event) {
        event.preventDefault();
        let quantityInput = document.getElementById("quantity1");
        let productSelect = document.getElementById("product1");
        let result = document.getElementById("result1");

        let q = quantityInput.value;
        let p = productSelect.value;
        if (q.match(/^\d+$/) === null || p.match(/^\d+$/) === null) {
            result.innerHTML = "Ошибка, некорректные данные";
        } else {
            let quantity = parseInt(quantityInput.value);
            let price = parseInt(productSelect.value);
            let total = quantity * price;
            result.innerHTML = "Стоимость заказа: ₽" + total;
        }
    });
});

function updatePrice() {
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    let quantityInput = document.getElementById("quantity2");
    let quantity2 = parseInt(quantityInput.value);
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    // Скрываем или показываем радиокнопки.
    let radioDiv = document.getElementById("radios");
    if (select.value === "2") {
        radioDiv.style.display = "block";
    } else {
        radioDiv.style.display = "none";
    }
    // Смотрим какая товарная опция выбрана.
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });

    // Скрываем или показываем чекбоксы.
    let checkDiv = document.getElementById("checkboxes");
    if (select.value === "3") {
        checkDiv.style.display = "block";
    } else {
        checkDiv.style.display = "none";
    }

    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = "₽" + price*quantity2;
}

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

window.addEventListener("DOMContentLoaded", function () {
    // Скрываем радиокнопки.
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function (event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });
    // Назначаем обработчик радиокнопок.
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let r = event.target;
            console.log(r.value);
            updatePrice();
        });
    });

    // Назначаем обработчик радиокнопок.
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            let c = event.target;
            console.log(c.name);
            console.log(c.value);
            updatePrice();
        });
    });

    updatePrice();
});
