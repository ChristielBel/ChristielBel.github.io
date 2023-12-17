<script>
export default {
  name: "HeaderTextBlock",
  props: {
    upper_text: {
      String,
      required: true
    },
    lower_text: {
      String,
      required: true
    }
  }
}
</script>

<template>
  <div class="col-6 col-lg-4 supp">
    <div class="parts-wrapper">
      <div class="second-block">
        {{ upper_text }}
      </div>
      <div class="lower-part">
        {{ lower_text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.supp {
  margin-bottom: 30px;
}

.parts-wrapper {
  border-left: 3px solid #f14d34;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
  min-height: 80px;
  height: 100%;
  white-space: pre;
}

.lower-part {
  margin-top: -2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: rgba(255, 255, 255, .7);
}

.second-block {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 5px;
  position: relative;
}

@media screen and (min-width: 1000px) {
  .supp {
    margin-bottom: 80px;
  }
}
</style>