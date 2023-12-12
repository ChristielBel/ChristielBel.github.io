<script>
export default {
  name: "ExperienceTextBlock",
  props: {
    main_text: {
      String,
      required: true,
    },
    orange_part: {
      String
    }
  }
};
</script>

<template>
  <div class="col-8 col-md-6 supp">
    <div class="parts-wrapper">
      <div class="main-part">
        {{ main_text }}
        <span style="color: #f14d34">{{ orange_part }}</span>
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
  font-size: 16px;
  line-height: 1.44;
  color: rgba(256, 256, 256, .7);
}

.supp {
  margin-bottom: 30px;
}
</style>