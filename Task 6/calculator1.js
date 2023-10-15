/*global document */

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

document.addEventListener("DOMContentLoaded", function(){
// Получаем элементы формы
const quantityInput = document.getElementById('quantity');
const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
const optionsSelect = document.getElementById('options');
const propertyCheckbox = document.getElementById('property');
const priceElement = document.getElementById('price');

// Обработчик изменения количества
quantityInput.addEventListener('input', updatePrice);

// Обработчик изменения типа услуги
serviceTypeInputs.forEach(input => {
  input.addEventListener('change', updateForm);
});

// Обработчик изменения опций
optionsSelect.addEventListener('change', updatePrice);

// Обработчик изменения свойства
propertyCheckbox.addEventListener('change', updatePrice);

// Функция обновления формы при изменении типа услуги
function updateForm() {
  const selectedType = document.querySelector('input[name="serviceType"]:checked').value;
  
  // Проверяем выбранный тип услуги и показываем/скрываем соответствующие опции и свойства
  if (selectedType === '1') {
    optionsSelect.selectedIndex = 0;
    optionsContainer.style.display = 'none';
    propertyContainer.style.display = 'none';
  } else if (selectedType === '2') {
    optionsContainer.style.display = 'block';
    propertyContainer.style.display = 'none';
  } else if (selectedType === '3') {
    optionsSelect.selectedIndex = 0;
    optionsContainer.style.display = 'none';
    propertyContainer.style.display = 'block';
  }
  
  updatePrice();
}

// Функция обновления цены при изменении значений элементов формы
function updatePrice() {
  const quantity = parseInt(quantityInput.value);
  const selectedType = document.querySelector('input[name="serviceType"]:checked').value;
  let price = 0;
  
  // Рассчитываем цену в зависимости от выбранных значений
  if (selectedType === '1') {
    price = 10;
  } else if (selectedType === '2') {
    const selectedOption = optionsSelect.value;
    
    if (selectedOption === '') {
      price = 50;}
    else if (selectedOption === 'option1') {
      price = 100;
    } else if (selectedOption === 'option2') {
      price = 150;
    } else if (selectedOption === 'option3') {
      price = 200;
    }
  } else if (selectedType === '3') {
    if (propertyCheckbox.checked) {
      price = 170;
    }
    else{
      price = 90;
    }
  }
  
  // Умножаем цену на количество и выводим на страницу
  priceElement.textContent = price * quantity;
}

// Инициализация формы
updateForm();
});
