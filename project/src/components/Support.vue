<script>
import SupportTask from "@/components/SupportTask.vue";
import supp1 from "../assets/images/support1.svg"
import supp2 from "../assets/images/support2.svg"
import supp3 from "../assets/images/support3.svg"
import supp4 from "../assets/images/support4.svg"
import supp5 from "../assets/images/support5.svg"
import supp6 from "../assets/images/support6.svg"
import supp7 from "../assets/images/support7.svg"
import supp8 from "../assets/images/support8.svg"


export default {
  name: "Support",
  components: {SupportTask},
  data: () => {
    return {
      number1: "01.",
      header1: "Постановка задачи по Email",
      text1: "Удобная и привычная постановка задач, при которой задачи фиксириуются и никогда не теряются.",
      number2: "02.",
      header2: "Система Helpdesk - отчетность, прозрачность",
      text2: "Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.",
      number3: "03.",
      header3: "Расширенная техническая поддержка",
      text3: "Возможность организации расширений техподдержки с 6:00 до 22:00 без выходных.",
      number4: "04.",
      header4: "Персональный менеджер проекта",
      text4: "Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.",
      number5: "05.",
      header5: "Удобные способы оплаты",
      text5: "Безныличный рассчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.",
      number6: "06.",
      header6: "Работаем с SLA и NDA",
      text6: "Работа в рамках соглашений о конфеденциальности и об уровне качества работ.",
      number7: "07.",
      header7: "Штатные специалисты",
      text7: "Надежные штатные специалисты, никаких фрилансеров.",
      number8: "08.",
      header8: "Удобные каналы связи",
      text8: "Консультации по телефону, скайпу, в мессенджерах.",
      supp1, supp2, supp3, supp4, supp5, supp6, supp7, supp8,
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1 class="support-title text-center">
          Поддержка <br> от Drupal-coder
        </h1>
      </div>
    </div>
    <div class="row flex-row">
      <SupportTask :number="number1" :header="header1" :text="text1" :image="supp1"/>
      <SupportTask :number="number2" :header="header2" :text="text2" :image="supp2"/>
      <SupportTask :number="number3" :header="header3" :text="text3" :image="supp3"/>
      <SupportTask :number="number4" :header="header4" :text="text4" :image="supp4"/>
      <SupportTask :number="number5" :header="header5" :text="text5" :image="supp5"/>
      <SupportTask :number="number6" :header="header6" :text="text6" :image="supp6"/>
      <SupportTask :number="number7" :header="header7" :text="text7" :image="supp7"/>
      <SupportTask :number="number8" :header="header8" :text="text8" :image="supp8"/>
    </div>
  </div>
</template>

<style scoped>
.support-title {
  padding-top: 100px;
  margin-bottom: 20px;
  text-align: center;
  color: #050c33;
  font-weight: 700;
  font-size: 24px;
}

@media screen and (min-width: 768px) {
  .support-title {
    margin-bottom: 55px;
    font-size: 42px;
  }
}
</style>