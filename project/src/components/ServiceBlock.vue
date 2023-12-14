<script>
export default {
  name: "ServiceBlock",
  props: {
    image: {
      String,
      required: true
    },
    header: {
      String,
    },
    text: {
      String,
      required: true
    }
  }
};
</script>

<template>
  <div :class="[header ? 'col-12 col-md-4 text-center text-md-left' : 'col-6 col-md-3']">
    <div v-if="!!header" class="center-bg-image"></div>
    <div v-else class="background-image"></div>
    <div class="image-wrapper">
      <img :src="image" alt="Supp" class="supp">
    </div>
    <div v-if="!!header" class="header">
      {{header}}
    </div>
    <div v-else class="dummy"></div>
    <div class="main-text">
      {{text}}
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  display: block;
}

.background-image {
  position: absolute;
  width: 115px;
  height: 70px;
  opacity: 7%;
  background: url(/src/assets/images/logo_not_pix.svg) no-repeat center;
  background-size: contain;
  left: -38px;
  top: 70px;
}

.center-bg-image{
  position: absolute;
  width: 115px;
  height: 70px;
  opacity: 7%;
  background: url(/src/assets/images/logo_not_pix.svg) no-repeat center;
  background-size: contain;
  left: -38px;
  top: 70px;
}

.supp {
  position: relative;
  margin-bottom: 25px;
  margin-top: 55px;
  display: inline-block;
}

.dummy{
  margin-bottom: 10px;
}

.header {
  font-weight: 700;
  font-size: 25px;
  color: #050c33;
}

@media screen and (max-width: 768px){
  .center-bg-image{
    left: 175px;
  }
}
</style>