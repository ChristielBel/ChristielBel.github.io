document.addEventListener("DOMContentLoaded", function() {
    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function(event) {
        event.preventDefault();
        let quantityInput = document.getElementById("quantity");
        let productSelect = document.getElementById("product");
        let resultDiv = document.getElementById("result");

        let q = quantityInput.value;
        let p = productSelect.value;
        if (isNaN(q) || isNan(p)) {
            resultDiv.innerHTML = "Ошибка: введите корректные данные";
        } else {
            let quantity = parseInt(quantityInput.value);
            let price = parseInt(productSelect.value);
            let total = quantity * price;
            resultDiv.innerHTML = "Стоимость заказа: ₽" + total;
        }
    });
});
