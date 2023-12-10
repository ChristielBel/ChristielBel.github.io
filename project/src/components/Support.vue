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
      text1: "Удобная и привычная постановка задач, при которой задачи фиксириуются и никогда не теряются.",
      image1: "supp1",
      number2: "02.",
      text2: "Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.",
      image2: "supp2",
      number3: "03.",
      text3: "Возможность организации расширений техподдержки с 6:00 до 22:00 без выходных.",
      image3: "supp3",
      number4: "04.",
      text4: "Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.",
      image4: "supp4",
      number5: "05.",
      text5: "Безныличный рассчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.",
      image5: "supp5",
      number6: "06.",
      text6: "Работа в рамках соглашений о конфеденциальности и об уровне качества работ.",
      image6: "supp6",
      number7: "07.",
      text7: "Надежные штатные специалисты, никаких фрилансеров.",
      image7: "supp7",
      number8: "08.",
      text8: "Консультации по телефону, скайпу, в мессенджерах.",
      image8: "supp8"

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
    <div class="row">
      <SupportTask :number="number1" :text="text1" :image="image1"/>
      <SupportTask :number="number2" :text="text2" :image="image2"/>
      <SupportTask :number="number3" :text="text3" :image="image3"/>
      <SupportTask :number="number4" :text="text4" :image="image4"/>
      <SupportTask :number="number5" :text="text5" :image="image5"/>
      <SupportTask :number="number6" :text="text6" :image="image6"/>
      <SupportTask :number="number7" :text="text7" :image="image7"/>
      <SupportTask :number="number8" :text="text8" :image="image8"/>
    </div>
  </div>
</template>

<style scoped>
.support-title {
  font-size: 25px;
  font-weight: 700;
}
</style>