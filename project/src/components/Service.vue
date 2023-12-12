<script>
import ServiceBlock from "@/components/ServiceBlock.vue"
import supp1 from "../assets/images/competency-1.svg"
import supp2 from "../assets/images/competency-2.svg"
import supp3 from "../assets/images/competency-3.svg"
import supp4 from "../assets/images/competency-4.svg"
import supp5 from "../assets/images/competency-5.svg"
import supp6 from "../assets/images/competency-6.svg"
import supp7 from "../assets/images/competency-7.svg"
import supp8 from "../assets/images/competency-8.svg"

export default {
  name: "Service",
  components:{ServiceBlock},
  data() {
    return {
      text1:"Добавление информации на сайт, создание новых разделов",
      text2:"Разработка и оптимизация модулей сайтв",
      text3:"Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами",
      text4:"Любые доработки функционала и дизайна",
      text5:"Аулит и мониторинг безопасности Drupal сайтов",
      text6:"Миграция, импорт контента и апргейд  Drupal",
      text7:" Оптимизация и ускорение Drupal-сайтов",
      text8:"Веб-маркетинг, консультации и работы по SEO",
      supp1,
      supp2,
      supp3,
      supp4,
      supp5,
      supp6,
      supp7,
      supp8
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="service-title">
          13 лет совершенствуем <br>
          компетенции в Друпал <br>
          поддержке!
        </h1>
        <div>Разрабатываем и оптимизируем модули, расширяем
          <br>
          функциональность сайтов, обновляем дизайн
        </div>
      </div>
    </div>
    <div class="row row-flex">
      <ServiceBlock :image="supp1" :text="text1"/>
      <ServiceBlock :image="supp2" :text="text2"/>
      <ServiceBlock :image="supp3" :text="text3"/>
      <ServiceBlock :image="supp4" :text="text4"/>
      <ServiceBlock :image="supp5" :text="text5"/>
      <ServiceBlock :image="supp6" :text="text6"/>
      <ServiceBlock :image="supp7" :text="text7"/>
      <ServiceBlock :image="supp8" :text="text8"/>
    </div>
  </div>
</template>

<style scoped>
.service-title {
  padding-top: 100px;
  margin-bottom: 20px;
  color: #050c33;
  font-weight: 700;
  font-size: 24px;
}

@media screen and (min-width: 768px) {
  .service-title {
    font-size: 42px;
  }
}
</style>

<!--<ServiceBlock :image="supp1" :text="text1"/>-->
