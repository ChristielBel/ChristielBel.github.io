<script>
export default {
  name: "FormLinkWithUs"
}
</script>

<template>
  <div class="container">
    <form class="form form-dark" @submit.prevent="" href="">
        <input type="text" class="form-control" id="name" placeholder="Ваше имя" required />
        <input type="tel" class="form-control" id="telephone" placeholder="Телефон" required />
        <input type="email" class="form-control" id="email" placeholder="E-mail" required />
        <textarea class="form-control" id="comment" rows="3" placeholder="Ваш комментарий" required></textarea>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="subscribe"/>
        <label class="form-check-label" for="subscribe">Отправляя заявку, я даю согласие на <span class="orange">обрабтку персональных данных</span>.<span class="red">*</span></label>
      </div>
      <button type="submit" class="btn btn-primary submit-button">Submit</button>
    </form>
  </div>
</template>

<style scoped>
input {
  color: white;
}

input {
  margin-bottom: 3px;
}
</style>