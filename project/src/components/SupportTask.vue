<script>
export default {
  name: "SupportTask",
  props: {
    number: {
      String,
      required: true
    },
    text: {
      String,
      required: true
    },
    image: {
      String,
      required: true
    }
  }
}
</script>

<template>
<div class="col-12 col-md-3">
  <div class="number">
    {{ number}}
  </div>
  <div class="main-text">
    {{text}}
  </div>
  <div class="image-wrapper">
    <img v-bind:src="image" alt="">
  </div>
</div>
</template>

<style scoped>

</style>