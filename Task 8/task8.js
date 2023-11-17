document.addEventListener('DOMContentLoaded', function () {
    const formWrapper = document.getElementById('feedbackFormWrapper');
    const openFormBtn = document.getElementById('openFormBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    openFormBtn.addEventListener('click', function () {
        formWrapper.style.display = 'flex';
        history.pushState({ formOpen: true }, null, '?formOpen=true');
    });

    closeFormBtn.addEventListener('click', function () {
        formWrapper.style.display = 'none';
        history.pushState({ formOpen: false }, null, '?formOpen=false');
    });

    window.addEventListener('popstate', function (event) {
        if (event.state && event.state.formOpen) {
            formWrapper.style.display = 'flex';
        } else {
            formWrapper.style.display = 'none';
        }
    });

    feedbackForm.addEventListener('input', function () {
        localStorage.setItem('feedbackFormData', JSON.stringify({
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            organization: document.getElementById('organization').value,
            message: document.getElementById('message').value,
            agreement: document.getElementById('agreement').checked,
        }));
    });

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(feedbackForm);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://formcarry.com/s/N_nhDhYffl');
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    feedbackMessage.textContent = 'Форма успешно отправлена!';
                } else {
                    feedbackMessage.textContent = 'Произошла ошибка при отправке формы. Попробуйте еще раз.';
                }

                feedbackForm.reset();

                setTimeout(function () {
                    formWrapper.style.display = 'none';
                }, 4000);
            }
        };

        xhr.send(formData);
    });

    const savedFormData = JSON.parse(localStorage.getItem('feedbackFormData'));
    if (savedFormData) {
        document.getElementById('fullName').value = savedFormData.fullName;
        document.getElementById('email').value = savedFormData.email;
        document.getElementById('phone').value = savedFormData.phone;
        document.getElementById('organization').value = savedFormData.organization;
        document.getElementById('message').value = savedFormData.message;
        document.getElementById('agreement').checked = savedFormData.agreement;
    }
});
