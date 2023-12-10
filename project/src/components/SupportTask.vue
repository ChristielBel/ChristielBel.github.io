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
    },
    header: {
      String,
      required: true
    }
  }
};
</script>

<template>
  <div class="col-12 col-md-3 main-block">
    <div class="advantage">
      <div class="number">
        {{ number }}
      </div>
      <div class="header">
        {{ header }}
      </div>
      <div class="main-text">
        {{ text }}
      </div>
      <div class="image-wrapper">
        <img v-bind:src="image" alt="image" class="img-responsive">
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-block {
  padding: 5px 5px;
}

.advantage {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(5,12,51,.15);
  height: 100%;
  position: relative;
  padding: 25px 25px 45px;
  min-height: 292px;
  margin: 0 10px;
}

.number {
  margin-bottom: 20px;
  font-size: 12px;
  color: #828a9b;
}

.header {
  font-size: 18px;
  font-weight: 700;
  color: #050c33;
  line-height: 1.22;
  margin-bottom: 15px;
}

.main-text {
  font-size: 16px;
  color: #4e5a73;
  line-height: 1.37;
  z-index: 10;
}

.image-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 5;
}

@media screen and (min-width: 768px) {
  .advantage {
    min-height: 220px;
    margin: 0;
  }
}
</style>