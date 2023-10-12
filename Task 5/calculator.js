/*global document */

document.addEventListener("DOMContentLoaded", function () {
    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function (event) {
        event.preventDefault();
        let quantityInput = document.getElementById("quantity");
        let productSelect = document.getElementById("product");
        let result = document.getElementById("result");

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
