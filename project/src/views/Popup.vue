<script>
import FormLinkWithUs from "@/components/FormLinkWithUs.vue";

export default {
  components: {FormLinkWithUs},
  computed: {
    isFormVisible() {
      return this.$store.getters.isFormVisible;
    }
  }
};
</script>

<template>
  <div class="popup-wrapper">
    <div class="cover"></div>
    <FormLinkWithUs/>
  </div>
</template>

<style scoped>
.cover {
  z-index: -1;
  display: block;
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.35);
}

.popup-wrapper {
  border-radius: 5px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #1b1e21;
  width: 90%;
  height: 60%;
  top: 15%;
  left: 5%;
  padding: 20px;
  z-index: 15;
}

@media screen and (min-width: 1024px) {
  .popup-wrapper {
    width: 50%;
    height: 80%;
    top: 10%;
    left: 25%;
  }
}
</style>