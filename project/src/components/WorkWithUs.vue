<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Partner from "@/components/Partner.vue";
import pic1 from "../assets/images/logo.png";
import pic2 from "../assets/images/logo_0.png";
import pic3 from "../assets/images/logo_2.png";
import pic4 from "../assets/images/logo-estee.png";
import pic5 from "../assets/images/lpcma_rus_v4.jpg";
import pic6 from "../assets/images/nashagazeta_ch.png";

export default {
  name: "WorkWithUs",
  components: {Partner},
  data: () => {
    return {
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
    }
  },
  mounted() {
    const swiper1 = new Swiper(this.$refs.swiper1, {
      slidesPerView: 'auto',
      spaceBetween:5,
      centeredSlides:true,
      loop: true,
      longSwipes: false,
    });

    const swiper2 = new Swiper(this.$refs.swiper2, {
      slidesPerView: 'auto',
      spaceBetween:5,
      centeredSlides:false,
      loop: true,
      longSwipes: false,
    });
    setInterval(() => {
      swiper1.slideNext();
      swiper2.slideNext();
    }, 3000);
  },
}
</script>

<template>
  <div class="work-main-block">
    <div class="container-fluid wind">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1 class="wwu-title">
            С нами работают
          </h1>
          <div class="wwu-text col-8 mx-auto">
            Десятки компаний доверяют нам самок ценное, что у них есть в интернете -
            свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
          </div>
        </div>
      </div>
      <div class="swiper-container" ref="swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Partner :image="pic1"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic2"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic3"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic1"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic2"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic3"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic4"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic5"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic6"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic4"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic5"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic6"/>
          </div>
        </div>

      </div>
      <div class="swiper-container" ref="swiper2">
        <div class="swiper-wrapper swipe2">
          <div class="swiper-slide">
            <Partner :image="pic4"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic5"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic6"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic4"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic5"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic6"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic1"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic2"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic3"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic1"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic2"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic3"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wind {
  max-width: 100%;
  overflow: hidden;
}



.swiper-slide {
  margin: 5px;
  width: 160px;
  height: 90px;
  float: left;
}

.work-main-block {
  position: relative;
}

.wwu-title {
  padding-top: 100px;
  margin-bottom: 20px;
  text-align: center;
  color: #050c33;
  font-weight: 700;
  font-size: 42px;
}

.wwu-text {
  text-align: center;
  margin-bottom: 40px;
}

@media screen and (min-width: 768px) {
  .wwu-title {
    margin-bottom: 55px;
    font-size: 42px;
  }

  .swiper-slide {
    width: 225px;
    height: 115px;
  }


}
</style>