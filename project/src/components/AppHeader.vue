<script>
import cup from "../assets/images/cup.png"
import background_video from "../assets/videos/video.mp4"
import Navbar from "@/components/Navbar.vue";
import HeaderTextBlock from "@/components/HeaderTextBlock.vue";
import HeaderImageBlock from "@/components/HeaderImageTextBlock.vue";
import HeaderTextImageBlock from "@/components/HeaderImageTextBlock.vue";

export default {
  name: "AppHeader",
  components: {
    HeaderTextImageBlock,
    HeaderImageBlock,
    HeaderTextBlock,
    Navbar
  },
  data: () => {
    return {
      cup,
      lower_text1: "Drupal-разработчик \nв России по версии \nрейтинга Рунета",
      upper_text2: "3+",
      lower_text2: "средний опыт \nспециалистов более \n3 лет",
      upper_text3: "14",
      lower_text3: "лет опыта в сфере \nDrupal",
      upper_text4: "50+",
      lower_text4: "модулей и тем \nв формате DrupalGive",
      upper_text5: "90 000+",
      lower_text5: "часов поддержки \nсайтов на Drupal",
      upper_text6: "300+",
      lower_text6: "Проектов \nна поддержке",
      background_video
    }
  }
};
</script>

<template>
  <div class="wrapper container-fluid">
   <Navbar/>

    <video class="background-video" autoplay muted loop>
      <source v-bind:src="background_video" type="video/mp4">
    </video>
    <div class="overlay"></div>

    <div class="container main-container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center text-md-left header-title-div">
          <h1 class="header-upper-text big">Поддержка <br> сайтов на Drupal</h1>
          <p class="header-upper-text small">Сопровождение и поддержка сайтов <br> на CMS Drupal любых версий и
            запущенности
          </p>
          <a class="btn tariff-btn">Тарифы</a>
        </div>
        <div class="col-md-6">
          <div class="row">
            <HeaderTextImageBlock :image="cup" :lower_text="lower_text1" />
            <HeaderTextBlock :lower_text="lower_text2" :upper_text="upper_text2" />
            <HeaderTextBlock :lower_text="lower_text3" :upper_text="upper_text3" />
            <HeaderTextBlock :lower_text="lower_text4" :upper_text="upper_text4" />
            <HeaderTextBlock :lower_text="lower_text5" :upper_text="upper_text5" />
            <HeaderTextBlock :lower_text="lower_text6" :upper_text="upper_text6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.background-video {
  position: absolute;
  z-index: -1;
  filter: blur(3px);
  overflow: hidden;
}

.overlay {
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .8) url(@/assets/images/drupal-coder1.svg) no-repeat top left;
  background-size: 100%;
  z-index: -1;
}

.tariff-btn {
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 22px 20px;
  width: 230px;
  height: 60px;
  text-align: center;
  border: 2px solid #f14d34;
  border-radius: 5px;
  margin-bottom: 100px;
  line-height: 1;
}

.tariff-btn:hover {
  color: white !important;
  background-color: #f14d34;
}

.wrapper {
  position: relative;
  font-weight: 700;
  height: 100%;
  padding: 30px 5px;
  color: white;
}

.header-upper-text {
  color: white;
}

.big {
  font-weight: 700;
  font-size: 25px;
  line-height: 1.2;
}

.small {
  font-size: 14px;
  margin-bottom: 50px;
}

h2 {
  vertical-align: center;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .overlay {
    background-size: 50%;
  }

  .main-container {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .header-title-div {
    text-align: left;
  }

  .big {
    font-size: 40px;
  }

  .small {
    font-size: 18px;;
  }
}
</style>