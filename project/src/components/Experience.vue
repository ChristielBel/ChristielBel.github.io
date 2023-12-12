<script>
import HeaderTextBlock from "@/components/HeaderTextBlock.vue";
import ExperienceTextBlock from "@/components/ExperienceTextBlock.vue";
import laptop from "../assets/images/laptop.png"

export default {
  name: "Experience",
  components: {ExperienceTextBlock, HeaderTextBlock},
  data: () => {
    return {
      text1: "Только системный подход - конроль версий, резервирвание и тестирование!",
      text2: "Только Drupal сайты, не берем на поддержку сайты на других CMS!",
      text3: "Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем",
      colored: "свои модули Drupal",
      text4: "Поддерживаем сайты на Drupal 5, 6, 7 и 8",
      laptop
    }
  }
}
</script>

<template>
  <div class="experience-main-block">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-12 col-md-6 col-md-offset-6">
          <div class="row">
            <div class="col-12">
              <div class="experience-title text-left">
               Экспертиза в Drupal, <br>опыт 14 лет!
              </div>
            </div>
          </div>
          <div class="row">
            <ExperienceTextBlock :main_text="text1"/>
            <ExperienceTextBlock :main_text="text2"/>
            <ExperienceTextBlock :main_text="text3" :orange_part="colored"/>
            <ExperienceTextBlock :main_text="text4"/>
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img v-bind:src="laptop" alt="laptop" class="img-responsive laptop">
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-main-block {
  z-index: -10;
  padding: 200px 0 350px;
  position: relative;
  background: linear-gradient(254.72deg,rgba(255,255,255,.276) -114.85%,rgba(255,255,255,0) 69.04%),#040613;
  color: #fff;
}

.experience-main-block:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/images/drupal-logo-2.svg) no-repeat right bottom;
  background-size: contain;
  z-index: 10;
}

.experience-title {
  padding-top: 5px;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
  line-height: 1.22;
  font-size: 24px;
}

.image-wrapper {
  padding: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 80%;
  z-index: 10;
  max-width: 735px;
}

.laptop {
  width: 100%;
  height: auto;
  transform: translateY(16%)
}

@media screen and (min-width: 768px) {
  .experience-main-block {
    padding: 200px 0 120px;
    background: linear-gradient(250.72deg,rgba(255,255,255,.276) -60.85%,rgba(255,255,255,0) 80.04%),#040613;
  }
  .image-wrapper {
    width: 40%;
  }

  .experience-title {
    padding-top: 120px;
    font-size: 42px;
  }
}

</style>