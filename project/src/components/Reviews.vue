<script>
export default {
  name: "Reviews",
  props: {
    text: {
      String,
      required: true
    },
    caption: {
      String,
      required: true
    },
    link: {
      String,
      required: true
    },
    logo: {
      String,
      required: true
    }
  }
};
</script>

<template>
  <div class="reviews">
    <div class="logocompany">
      <img :src="logo" alt="logo">
    </div>
    <div class="review">
      {{ text }}
    </div>
    <div class="caption">
      {{ caption }}
      <a class="caption-link" :href="link">{{ link }}</a>
    </div>
  </div>
</template>

<style scoped>
.logocompany {
  margin-top: 20px;
  margin-left: 15px;
}

.review {
  margin-left: 15px;
  margin-top: 45px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #050c33;
}

.caption {
  margin-left: 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: #838b9c;
  margin-bottom: 20px;
}

.caption-link {
  text-decoration: underline;
  color: #050c33;
  outline: none;
  font-weight: 400;
}

@media screen and (min-width: 1300px) {
  .logocompany {
    margin-top: 70px;
  }

  .review {
    flex: 2;
    margin-right: 15px;
  }

  .reviews {
    margin-left: 80px;
    width: 55%;
  }
}
</style>