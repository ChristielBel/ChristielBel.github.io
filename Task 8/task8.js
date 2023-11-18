/*global document*/
/*global window*/
/*global localStorage*/
/*global history*/
/*global XMLHttpRequest*/
/*global FormData*/
/*global console*/
/*global location*/
/*global setTimeout*/

document.addEventListener("DOMContentLoaded", function () {
    const formWrapper = document.getElementById("feedbackFormWrapper");
    const openFormBtn = document.getElementById("openFormBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackMessage = document.getElementById("feedbackMessage");

    openFormBtn.addEventListener("click", function () {
        formWrapper.style.display = "flex";
        history.pushState({formOpen: true}, null, "?formOpen=true");
    });

    closeFormBtn.addEventListener("click", function () {
        formWrapper.style.display = "none";
        history.replaceState(null, null, location.pathname);
    });

    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.formOpen) {
            formWrapper.style.display = "flex";
        } else {
            formWrapper.style.display = "none";
        }
    });

    feedbackForm.addEventListener("input", function () {
        localStorage.setItem("feedbackFormData", JSON.stringify({
            agreement: document.getElementById("agreement").checked,
            email: document.getElementById("email").value,
            fullName: document.getElementById("fullName").value,
            message: document.getElementById("message").value,
            organization: document.getElementById("organization").value,
            phone: document.getElementById("phone").value
        }));
    });

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(feedbackForm);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://formcarry.com/s/N_nhDhYffl");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                if (xhr.status === 200) {
                    feedbackMessage.textContent = "Форма успешно отправлена!";
                } else {
                    let m = "Произошла ошибка. Попробуйте еще раз.";
                    feedbackMessage.textContent = m;
                }

                feedbackForm.reset();

                setTimeout(function () {
                    formWrapper.style.display = "none";
                }, 4000);
            }
        };

        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    });

    const savedFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
    if (savedFormData) {
        document.getElementById("fullName").value = savedFormData.fullName;
        document.getElementById("email").value = savedFormData.email;
        document.getElementById("phone").value = savedFormData.phone;
        document.getElementById("org").value = savedFormData.organization;
        document.getElementById("message").value = savedFormData.message;
        document.getElementById("agreement").checked = savedFormData.agreement;
    }
});
