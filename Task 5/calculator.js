document.addEventListener("DOMContentLoaded", function() {
    let calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function(event) {
        event.preventDefault();
        let quantityInput = document.getElementById("quantity");
        let productSelect = document.getElementById("product");
        let resultDiv = document.getElementById("result");

        let str1 = quantityInput.value;
        let str2 = productSelect.value;
        if (str1.match(/^\d+$/) === null || str2.match(/^\d+$/) === null) {
            resultDiv.innerHTML = "Ошибка: введите корректные данные";
        } else {
            let quantity = parseInt(quantityInput.value);
            let price = parseInt(productSelect.value);
            let total = quantity * price;
            resultDiv.innerHTML = "Стоимость заказа: ₽" + total;
        }
    });
});
