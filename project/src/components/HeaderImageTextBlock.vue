<script>
export default {
  name: "HeaderTextImageBlock",
  props: {
    image: {
      String,
      required: true
    },
    lower_text: {
      String,
      required: true
    }

  }
};
</script>

<template>
  <div class="col-6 col-md-4 supp">
    <div class="parts-wrapper">
      <div class="upper-part">
        #1
        <img v-bind:src="image" alt="image" id="ins-image">
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
}

.lower-part {
  margin-top: -2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: rgba(255, 255, 255, .7);
  white-space: pre;
}

.upper-part {
  font-size: 48px;
  margin-top: -27px;
}

#ins-image {
  vertical-align: baseline;
  position: absolute;
}

@media screen and (min-width: 768px) {
  .supp {
    margin-bottom: 80px;
  }
}
</style>