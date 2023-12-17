<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Partner from "@/components/Partner.vue";
import pic1 from "../assets/images/1659783327rolex-logo-png.webp";
import pic2 from "../assets/images/Kia-logo.png";
import pic3 from "../assets/images/43ce9e524bcd2ba7645d68e89657224e.jpg";
import pic4 from "../assets/images/1635965943_3-papik-pro-p-lotos-vektornii-risunok-3.png";
import pic5 from "../assets/images/nike_PNG5.png";
import pic6 from "../assets/images/30dd69e2-8364-4984-9cd4-92d5d9c85aba.png";
import pic7 from "../assets/images/Lacoste-Logo-Transparent-Image.png"
import pic8 from "../assets/images/i.webp"
import pic9 from "../assets/images/e94eb06e.jpg"
import pic10 from "../assets/images/Fila-Logo-1600x900.png"
import pic11 from "../assets/images/Disney-Logo-PNG-File.png"
import pic12 from "../assets/images/Mango-logo.jpg"
import pic13 from "../assets/images/new-and-old-pepsi-png-logo-pictures-0.png"
import pic14 from "../assets/images/1661405603_49-papik-pro-p-ne-ignor-menya-barbi-stikeri-png-59-scaled.jpg"
import pic15 from "../assets/images/Mars-Logo.png"
import pic16 from "../assets/images/7c265688-f565-41a7-8d8b-13c6f9f862a0_rwc_0x0x7983x4500x7983.jpg"
import pic17 from "../assets/images/597a7035efcaa15d864652de.png"
import pic18 from "../assets/images/100-1002019_46-seahawk-student-athletes-named-to-fcsaa-all-academic-broward-college-seahawks.png"
import pic19 from "../assets/images/red_bull_PNG24.png"
import pic20 from "../assets/images/1636124787_11-papik-pro-p-logotip-vinks-foto-12.png"

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
      pic7,
      pic8,
      pic9,
      pic10,
      pic11,
      pic12,
      pic13,
      pic14,
      pic15,
      pic16,
      pic17,
      pic18,
      pic19,
      pic20
    }
  },
  mounted() {
    const swiper1 = new Swiper(this.$refs.swiper1, {
      slidesPerView: 'auto',
      spaceBetween: 5,
      centeredSlides: true,
      loop: true,
      longSwipes: false,
    });

    const swiper2 = new Swiper(this.$refs.swiper2, {
      slidesPerView: 'auto',
      spaceBetween: 5,
      centeredSlides: false,
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
            <Partner :image="pic13"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic17"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic19"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic3"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic7"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic15"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic12"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic20"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic4"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic10"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic8"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic14"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic2"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic11"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic16"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic18"/>
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
            <Partner :image="pic12"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic20"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic8"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic16"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic7"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic14"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic18"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic10"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic11"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic19"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic17"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic13"/>
          </div>
          <div class="swiper-slide">
            <Partner :image="pic9"/>
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