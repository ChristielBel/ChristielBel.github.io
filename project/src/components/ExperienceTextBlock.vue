<script>
export default {
  name: "ExperienceTextBlock",
  props: {
    main_text: {
      String,
      required: true,
    }
  }
}

</script>

<template>
  <div class="col-12 col-md-6">
    <div class="parts-wrapper">
      <div class="main-part">
        {{ main_text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.parts-wrapper {
  border-left: 3px solid #f14d34;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
  height: 100%;
}

.main-part {
  margin-top: -2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: rgba(256,256,256,.7);
}

@media screen and (min-width: 768px) {
}
</style>