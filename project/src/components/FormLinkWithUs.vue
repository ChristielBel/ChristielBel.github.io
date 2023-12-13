<script>
export default {
  name: "FormLinkWithUs",
  data: () => {
    return {

    }
  },
};
</script>

<template>
  <div class="container">
    <form class="form" @submit.prevent="" href="">
        <input type="text" class="form-control" id="name" placeholder="Ваше имя" required />
        <input type="tel" class="form-control" id="telephone" placeholder="Телефон" required />
        <input type="email" class="form-control" id="email" placeholder="E-mail" required />
        <textarea class="form-control" id="comment" rows="3" placeholder="Ваш комментарий" required></textarea>
      <div class="form-check my-7 p-2">
        <input type="checkbox" class="form-check-input" id="subscribe"/>
        <span class="check">
        </span>
        <label class="form-check-label" for="subscribe">Отправляя заявку, я даю согласие на <a href="/privacy-policy" class="orange">обрабтку персональных данных</a>.<span class="red">*</span></label>
      </div>
      <button type="submit" class="btn btn-primary submit-button">Свяжитесь с нами</button>
    </form>
  </div>
</template>

<style scoped>
::placeholder {
  color: #ffffff;
}

input {
  background: 0 0;
  border: 1px solid rgba(256,256,256,.3);
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
  padding: 26px 24px;
  color: #fff;
  margin-bottom: 7px;
}

input:focus   {
  background: 0 0;
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f44336;
}

textarea:focus {
  background: 0 0;
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f44336;
}

textarea {
  background: 0 0;
  border: 1px solid rgba(256,256,256,.3);
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
  padding: 26px 24px;
  margin-bottom: 7px;
}

.form-check-input {
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
  border: 2px solid rgba(256,256,256,.5);
  border-radius: 5px;
}

.check:after {
  content: "";
  display: block;
  width: 21px;
  height: 21px;
  background: url(../assets/images/checked-icon.svg) no-repeat center;
  background-size: contain;
  transition: opacity .2s,transform .4s;
  opacity: 0;
}

.form-check-input:checked ~ .check {
  background: 0 0;
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f44336;
}

.form-check-input:checked ~ .check:after {
  opacity: 100%;
}

.form-check {

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
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  width: 100%;
  padding: 20px 14px;
  line-height: 1;
  transition: background .3s
}

.submit-button:hover {
  background: none;
  border: 2px #f14d34 solid;
}

.form a {
  text-decoration: none;
  color: #f14d34;
}

.red {
  color: red;
}

@media screen and (min-width: 1024px) {
  .check {
    top: 8px
  }
}
</style>