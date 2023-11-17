document.getElementById('openFormButton').addEventListener('click', function() {
    document.getElementById('feedbackFormPopup').style.display = 'block';
    history.pushState({ formOpen: true }, '', '/feedback-form');
  });
  
  window.addEventListener('popstate', function(event) {
    if (event.state && event.state.formOpen) {
      document.getElementById('feedbackFormPopup').style.display = 'block';
    } else {
      document.getElementById('feedbackFormPopup').style.display = 'none';
    }
  });
  
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    // Отправка данных на сервер с помощью XHR или Axios
    // Пример с использованием Axios:
    axios.post('https://formcarry.com/s/ВАШ_ID_ФОРМЫ', formData)
      .then(function(response) {
        document.getElementById('feedbackMessage').innerText = 'Сообщение успешно отправлено';
        document.getElementById('feedbackMessage').style.display = 'block';
        // Очистка формы
        document.getElementById('feedbackForm').reset();
      })
      .catch(function(error) {
        document.getElementById('feedbackMessage').innerText = 'Ошибка при отправке сообщения';
        document.getElementById('feedbackMessage').style.display = 'block';
      });
  });
  
  // Восстановление последних введенных значений из LocalStorage
  document.addEventListener('DOMContentLoaded', function() {
    const lastFormData = JSON.parse(localStorage.getItem('lastFormData'));
    if (lastFormData) {
      document.getElementById('fullName').value = lastFormData.fullName;
      document.getElementById('email').value = lastFormData.email;
      document.getElementById('phone').value = lastFormData.phone;
      document.getElementById('organization').value = lastFormData.organization;
      document.getElementById('message').value = lastFormData.message;
      document.getElementById('agreement').checked = lastFormData.agreement;
    }
  });
  
  // Сохранение последних введенных значений в LocalStorage перед закрытием страницы
  window.addEventListener('beforeunload', function() {
    const formData = {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      organization: document.getElementById('organization').value,
      message: document.getElementById('message').value,
      agreement: document.getElementById('agreement').checked
    };
    localStorage.setItem('lastFormData', JSON.stringify(formData));
  });
