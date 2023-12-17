<script>
import TariffBlock from "@/components/TariffBlock.vue";

export default {
  name: "Tariff",
  components: {TariffBlock},
  data() {
    return {
      type1: "Стартовый",
      option1: "переносятся на следующий месяц",
      addTime1: false,
      amount1: "6 000",
      type2: "Бизнес",
      addTime2: true,
      time2: "Высокое время реакции - до 2 рабочих дней",
      option2: "не переносятся",
      amount2: "30 000",
      type3: "VIP",
      addTime3: true,
      time3: "Максимальное время реакции - в день обращения",
      option3: "не переносятся",
      amount3: "270 000"
    }
  }
}
</script>

<template>
  <div class="tariff-main-block">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tariff-title text-center">
            Тарифы
          </div>
        </div>
      </div>
      <div class="row">
        <TariffBlock :type="type1" :add-time="addTime1" :amount="amount1" :option="option1"/>
        <TariffBlock :type="type2" :add-time="addTime2" :time="time2" :amount="amount2" :option="option2"/>
        <TariffBlock :type="type3" :add-time="addTime3" :time="time3" :amount="amount3" :option="option3"/>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="description">
           Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="individual-link">
            <a class="individual" href="">получить индивидуальный тариф</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tariff-main-block {
  background-image: url(../assets/images/drupal-tariff.svg);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: auto 100%;
}


.tariff-title {
  padding-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  color: #050c33;
  font-weight: 700;
  font-size: 24px;
}

.description {
  text-align: center;
  font-size: 18px;
  color: #828a9b;
  margin: 20px 15px 5px;
  line-height: 1.22;
}

.individual-link {
  margin: 0 auto;
  text-align: center;
}

.individual {
  display: flex;
  color: #050c33;
  font-size: 18px;
  text-align: center;
  text-decoration: underline;
  text-transform: capitalize;
  margin-bottom: 50px;
  justify-content: center;
  margin-top: 20px;
}

@media screen and (min-width: 768px) {

  .tariff-title {
    font-size: 42px;
  }
}
</style>