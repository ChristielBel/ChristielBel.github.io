<script>
import Reviews from "@/components/Reviews.vue"
import logo1 from "@/assets/images/logo_0.png"
import logo2 from "@/assets/images/logo.png"
import logo3 from "@/assets/images/farbors_ru.jpg"
import logo4 from "@/assets/images/nashagazeta_ch.png"
import logo5 from "@/assets/images/logo-estee.png"
import logo6 from "@/assets/images/cableman_ru.png"
import logo7 from "@/assets/images/logo_2.png"
import logo8 from "@/assets/images/lpcma_rus_v4.jpg"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: "Slider",
  components:{Reviews,SwiperSlide,Swiper},
  data() {
    return {
      text1:"Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый «быстрый» тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!",
      text2:"Работать с Drupal Coder — это не просто создание сайтов, это создание успешных веб-проектов. Мы с уверенностью рекомендуем Drupal Coder как надежного и профессионального партнера для всех, кто стремится к качественному веб-присутствию.",
      text3:"Хочу выразить благодарность Drupal Coder за их профессионализм и отличную работу над нашим веб-проектом. Сотрудничество с данной командой оказалось удивительным опытом, который превзошел все наши ожидания.",
      text4:"Наш проект требовал сложных технических решений, и команда Drupal Coder продемонстрировала выдающийся уровень компетенции. Они не только создали для нас отличный веб-сайт, но и предоставили ценные рекомендации по его улучшению и оптимизации. Особенно хочу отметить внимание к деталям и готовность к оперативному внесению изменений. Drupal Coder проявили гибкость и понимание наших потребностей, что сделало процесс сотрудничества максимально комфортным. Спасибо за ваш профессионализм, креативный подход и внимание к клиенту. Мы уверены, что наше долгосрочное сотрудничество с Drupal Coder будет успешным и продуктивным.",
      text5:"Хочу выразить благодарность Drupal Coder и лично их ведущему разработчику, Александру Иванову, за отличную работу по созданию и улучшению нашего веб-сайта. Сотрудничество с ними превзошло наши ожидания. Drupal Coder - это надежный партнер для тех, кто ценит профессионализм и качество веб-разработки. Мы рады сотрудничеству с этой компанией и с уверенностью рекомендуем ее услуги всем, кто ищет надежного партнера для создания или улучшения своего веб-пространства.",
      text6:"Миграция, импорт контента и апргейд  Drupal",
      text7:" Оптимизация и ускорение Drupal-сайтов",
      text8:"Веб-маркетинг, консультации и работы по SEO",
      caption1:"С уважением, Наталья Сушкова, руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»",
      caption2:"Леонид Иванов, руководитель проекта Personal Writer",
      caption3:"С наилучшими пожеланиями, Филиппов Марк",
      caption4:"Винокуров Николай",
      caption5:"С уважением, Кузин Вадим Леонидович, Генеральный директор Estee-design",
      caption6:"ЫАОВТдыовадотдвтм",
      caption7:"ыдвтжвтпжвлтаж",
      caption8:"ьаадвытпдтыпдт",
      link1:"https://www.cielparfum.com/",
      link2:"https://personal-writer.com/",
      link3:"https://www.farbors.ru/",
      link4:"https://nashagazeta.ch/",
      link5:"https://estee-design.ru/",
      link6:"https://www.cableman.ru/",
      link7:"https://www.serebro.ag/",
      link8:"https://lpcma.tsu.ru/",
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
        },
      },
      methods: {
        prevSlide() {
          this.$refs.mySwiper.swiper.slidePrev();
        },
        nextSlide() {
          this.$refs.mySwiper.swiper.slideNext();
        },
      },
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="slider-title">Отзывы</h1>
      </div>
    </div>
    <div class="row slick">
      <swiper ref="mySwiper" :options="swiperOptions" :slides-per-view="1" class="content">
        <swiper-slide>
          <Reviews :text="text1" :caption="caption1" :link="link1" :logo="logo1"/>
        </swiper-slide>
        <swiper-slide>
          <Reviews :text="text2" :caption="caption2" :link="link2" :logo="logo2"/>
        </swiper-slide>
        <swiper-slide>
          <Reviews :text="text3" :caption="caption3" :link="link3" :logo="logo3"/>
        </swiper-slide>
        <swiper-slide>
          <Reviews :text="text4" :caption="caption4" :link="link4" :logo="logo4"/>
        </swiper-slide>
        <swiper-slide>
          <Reviews :text="text5" :caption="caption5" :link="link5" :logo="logo5"/>
        </swiper-slide>
        <swiper-slide>
          <Reviews :text="text6" :caption="caption6" :link="link6" :logo="logo6"/>
        </swiper-slide>
        <swiper-slide>
          <Reviews :text="text7" :caption="caption7" :link="link7" :logo="logo7"/>
        </swiper-slide>
        <swiper-slide>
          <Reviews :text="text8" :caption="caption8" :link="link8" :logo="logo8"/>
        </swiper-slide>
        <div class="buttons">
          <button type="button" @click="prevSlide" data-role="none" class="arrow prev-button swiper-button-prev" aria-label="Previous">Previous</button>
          <span class="num">
            <span class="current-num">
              01
            </span>
            / 08
          </span>
          <button type="button" @click="nextSlide" data-role="none" class="arrow next-button swiper-button-next" aria-label="Next">Next</button>
        </div>
        <div class="back1"></div>
        <div class="back2"></div>
      </swiper>
    </div>
  </div>
</template>

<style scoped>

.slider-title {
  padding-top: 100px;
  margin-bottom: 20px;
  text-align: center;
  color: #050c33;
  font-weight: 700;
  font-size: 24px;
}

.back1{
  display: block;
  opacity: .5;
  border: 1px solid rgba(0,0,0,.1);
  box-sizing: border-box;
  box-shadow: 0 4px 60px rgba(162,162,162,.25);
  border-radius: 5px;
  position: absolute;
  top: -20px;
  bottom: 0;
  left: 20px;
  right: 20px;
  z-index: 5;
  height: 20px;
}

.back2{
  display: block;
  background: #fff;
  opacity: .34;
  border: 1px solid rgba(0,0,0,.1);
  box-sizing: border-box;
  box-shadow: 0 4px 60px rgba(162,162,162,.25);
  border-radius: 5px;
  position: absolute;
  top: -40px;
  bottom: 0;
  left: 40px;
  right: 40px;
  z-index: 4;
  height: 40px;
}

.content {
  margin: 74px auto auto;
  position: relative;
  padding: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0 4px 60px rgba(162, 162, 162, .25);
  border-radius: 5px;
  z-index: 10;
}

.buttons {
  padding: 10px 15px;
  text-align: center;
  border-top: 1px solid #cdcdcd;
}

.arrow {
  width: 16px;
  height: 32px;
  border: none;
  box-shadow: none;
  font-size: 0;
  outline: none;
}

.prev-button {
  background: url(@/assets/images/arrow-left.svg) no-repeat center;
  background-size: contain;
}

.current-num {
  color: #050c33;
}

.num {
  display: inline-block;
  margin: 0 46px;
  font-size: 28px;
  vertical-align: middle;
  color: #e0e0e0;
}

.next-button {
  background: url(@/assets/images/arrow-right.svg) no-repeat center;
  background-size: contain;
}

@media screen and (min-width: 1300px) {
  .slider-title {
    margin-bottom: 55px;
    font-size: 42px;
  }

  .content {
    width: 980px;
    max-width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 10px 15px;
    text-align: center;
    border-left: 1px solid #cdcdcd;
    border-top: none;;
  }

  .back1{
    top: -40px;
    bottom: 0;
    left: 64px;
    right: 64px;
    height: 41px;
  }

  .back2{
    top: -72px;
    left: 128px;
    right: 128px;
    height: 72px;
  }
}
</style>