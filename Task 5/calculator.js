document.addEventListener("DOMContentLoaded", function(event) {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function(event) {
        event.preventDefault();
        var quantityInput = document.getElementById("quantity");
        var productSelect = document.getElementById("product");
        var resultDiv = document.getElementById("result");

        var quantity = parseInt(quantityInput.value);
        var price = parseInt(productSelect.value);

        if (str1.match(/^\d+$/) === null || str2.match(/^\d+$/) === null) {
            resultDiv.innerHTML = "Ошибка: введите корректные данные";
        } else {
            var total = quantity * price;
            resultDiv.innerHTML = "Стоимость заказа: ₽" + total;
        }
    });
});
