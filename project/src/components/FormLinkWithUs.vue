<script>
export default {
  name: "FormLinkWithUs",
  data() {
    return {
      nameValue: "",
      phoneValue: "",
      emailValue: "",
      commentValue: "",
      agreementValue: false,
      buttonDisabled: false
    }
  },
  methods: {
    saveName() {
      localStorage.setItem("name", this.nameValue);
    },
    savePhone() {
      localStorage.setItem("phone", this.phoneValue);
    },
    saveEmail() {
      localStorage.setItem("email", this.emailValue);
    },
    saveComment() {
      localStorage.setItem("comm", this.commentValue);
    },
    saveAgreement() {
      localStorage.setItem("agreement", this.agreementValue);
    },
    submitForm() {
      let form = document.querySelector("form");
      let formData = new FormData(form);
      let responseBlock = document.getElementById("response-block");
      this.buttonDisabled = true;

      fetch("https://formcarry.com/s/vTUnbIdRSE", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      })
          .then(response => {
            if (response.status === 200) {
              responseBlock.innerHTML = "Данные успешно отправлены";
              responseBlock.style.color = "white";
              responseBlock.style.display = "block";
              localStorage.clear();
              this.updateForm();
            } else {
              responseBlock.innerHTML = "Ошибка при отправке данных";
              responseBlock.style.color = "red";
              responseBlock.style.display = "block";
            }
          })
          .catch(error => {
            responseBlock.innerHTML = "Ошибка при отправке данных";
            responseBlock.style.color = "red";
            responseBlock.style.display = "block";
            console.log(error);
          })
          .finally(() => this.buttonDisabled = false);
    },
    updateForm() {
      this.nameValue = ""
      this.phoneValue = "";
      this.emailValue = "";
      this.commentValue = "";
      this.agreementValue = false;
    }
  },
  mounted() {
    this.nameValue = localStorage.getItem("name");
    this.phoneValue = localStorage.getItem("phone");
    this.emailValue = localStorage.getItem("email");
    this.commentValue = localStorage.getItem("comm");
    this.agreementValue = localStorage.getItem("agreement");
  }
};
</script>

<template>
  <div class="container p-0">
    <form class="form" @submit.prevent="submitForm">
      <input @input="saveName" v-model="nameValue" type="text" class="form-control" id="name" placeholder="Ваше имя"  required/>
      <input @input="savePhone" v-model="phoneValue" type="tel" class="form-control" id="telephone" placeholder="Телефон" name="phone"
             required/>
      <input @input="saveEmail" v-model="emailValue" type="email" class="form-control" id="email" placeholder="E-mail" name="email"
             required/>
      <textarea @input="saveComment" v-model="commentValue" class="form-control" id="comment" placeholder="Ваш комментарий"
                name="comment" required></textarea>
      <div class="form-check my-7 p-2">
        <input @change="saveAgreement" v-model="agreementValue" type="checkbox" class="form-check-input" id="agreement" name="check" required/>
        <span class="check">
        </span>
        <label class="form-check-label" for="subscribe">Отправляя заявку, я даю согласие на  <a href="/privacy-policy"
                                                                                               class="orange">обрабтку
          персональных данных</a>.<span class="red">*</span></label>
      </div>
      <div class="m-0 p-0" id="response-block"></div>
      <button type="submit" class="btn submit-button" :disabled="buttonDisabled">Свяжитесь с нами</button>
    </form>
  </div>
</template>

<style scoped>
form {
  max-width: 100%;
}

::placeholder {
  color: #ffffff !important;
}

input {
  background: 0 0;
  border: 1px solid rgba(256, 256, 256, .3);
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
  padding: 26px 24px;
  color: #fff !important;
  margin-bottom: 7px;
}

input:focus {
  background: 0 0;
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #f44336;
}

textarea {
  background: 0 0;
  border: 1px solid rgba(256, 256, 256, .3);
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
  padding: 26px 24px;
  margin-bottom: 7px;
  color: white !important;
}

textarea:focus {
  background: 0 0;
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #f44336;
}

.form-check-input {
  position: absolute;
  left: 20px;
  bottom: 20px;
  opacity: 0;
  width: 25px;
  height: 25px;
  z-index: 10;
}

.check {
  position: absolute;
  top: 10px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 2px solid rgba(256, 256, 256, .5);
  border-radius: 5px;
}

.check:after {
  content: "";
  display: block;
  width: 21px;
  height: 21px;
  background: url(../assets/images/checked-icon.svg) no-repeat center;
  background-size: contain;
  transition: opacity .2s, transform .4s;
  opacity: 0;
}

.form-check-input:checked ~ .check {
  background: 0 0;
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #f44336;
}

.form-check-input:checked ~ .check:after {
  opacity: 100%;
}

.form-check-label {
  margin-left: 30px;
  font-size: 12px;
  margin-bottom: 10px;
}

.submit-button {
  background: #f14d34;
  border: 2px solid #f14d34;
  border-radius: 5px;
  color: #fff !important;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  width: 100%;
  padding: 20px 14px;
  line-height: 1;
  transition: background .3s;
}

.submit-button:hover {
  background: none;
  border: 2px #f14d34 solid;
}

.submit-button:focus,
.submit-button:disabled,
.submit-button:active,
.submit-button:not(:disabled):not:active{
  background: none;
  border: 2px #f14d34 solid;
  box-shadow: none;
  outline: none;
}

.form a {
  text-decoration: none;
  color: #f14d34;
}

.red {
  color: red;
}

#response-block {
  bottom: -40px;
  position: absolute;
}

@media screen and (min-width: 768px) {
  .form-check-input {
    bottom: 10px;
  }
}

@media screen and (min-width: 1024px) {
  form {
    width: 420px;
    margin-left: auto;
  }

  .check {
    top: 8px
  }
}
</style>