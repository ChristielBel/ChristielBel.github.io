<script>

import ServiceBlock from "@/components/ServiceBlock.vue";
import competency1 from "@/assets/images/competency-20.svg";
import competency2 from "@/assets/images/competency-21.svg";
import competency3 from "@/assets/images/competency-22.svg";
export default {
  name: "TimeTasks",
  components:{ServiceBlock},
  data() {
    return {
      text1:"Настройка события GA в интернет-магазине",
      text2:"Разработка мобильной версии сайта",
      text3:"Интеграция модуля оплаты",
      header1:"От 1ч",
      header2:"От 20ч",
      header3:"От 8ч",
      competency1,
      competency2,
      competency3
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="service-title">
          Наши профессиональные разработчики выполняют быстро любые задачи
        </h1>
        <div>Разрабатываем и оптимизируем модули, расширяем
          <br>
          функциональность сайтов, обновляем дизайн
        </div>
      </div>
    </div>
    <div class="row row-flex">
      <ServiceBlock :image="competency1" :header="header1" :text="text1"/>
      <ServiceBlock :image="competency2" :header="header2" :text="text2"/>
      <ServiceBlock :image="competency3" :header="header3" :text="text3"/>
    </div>
  </div>
</template>

<style scoped>
.service-title {
  padding-top: 50px;
  margin-bottom: 20px;
  color: #050c33;
  font-weight: 700;
  font-size: 24px;
}

@media screen and (min-width: 768px) {
  .service-title {
    padding-top: 100px;;
    font-size: 42px;
  }
}
</style>