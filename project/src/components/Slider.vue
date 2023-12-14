<script>

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="slider-title">Отзывы</h1>
      </div>
    </div>
    <div class="row">
      <div class="content">
        <div class="reviews">
          <div class="logocompany">
            <img src="@/assets/images/logo_0.png" alt="logo">
          </div>
          <div class="review">
            Долгие поиски единственного и неповторимого мастера на
            многострадальный сайт www.cielparfum.com, который был
            собран крайне некомпетентным программистом и раз в
            месяц стабильно грозил погибнуть, привели меня на сайт
            и, в итоге, к ребятам из Drupal-coder. И вот уже
            практически полгода как не проходит и дня, чтобы я не
            поудивлялась и не порадовалась своему везению!
            Починили все, что не работало - от поиска до отображения
            меню. Провели редизайн - не отходя от желаемого, но со
            своими существенными и качественными дополнениями.
            Осуществили ряд проектов - конкурсы, тесты и тд. А уж
            мелких починок и доработок - не счесть! И главное - все
            качественно и быстро (не взирая на не самый "быстрый"
            тариф). Есть вопросы - замечательный Алексей всегда
            подскажет, поддержит, отремонтирует и/или просто
            сделает с нуля. Есть задумка для реализации -
            замечательный Сергей обсудит и предложит идеальный
            вариант. Есть проблема - замечательные Надежда и Роман
            починят, поправят, сделают! Ребята доказали, что эта CMS -
            мощная и грамотная система управления. Надеюсь, что
            наше сотрудничество затянется надолго! Спасибо!
          </div>
          <div class="caption">
            С уважением, Наталья Сушкова, руководитель Отдела веб-проектов Группы компаний "Си Эль парфюм"
            <a class="caption-link" href="http://www.cielparfum.com/">http://www.cielparfum.com/</a>
          </div>
        </div>
        <div class="buttons">
          <button type="button" data-role="none" class="arrow prev-button" aria-label="Previous">Previous</button>
          <span class="num">
            <span class="current-num">
              01
            </span>
            / 08
          </span>
          <button type="button" data-role="none" class="arrow next-button" aria-label="Next">Next</button>
        </div>
        <div class="back1"></div>
        <div class="back2"></div>
      </div>
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
  box-shadow: 0px 4px 60px rgba(162,162,162,.25);
  border-radius: 5px;
  position: absolute;
  top: -40px;
  bottom: 0;
  left: 64px;
  right: 64px;
  z-index: 5;
  height: 41px;
}

.back2{
  height: 72px;
  display: block;
  background: #fff;
  opacity: .34;
  border: 1px solid rgba(0,0,0,.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 60px rgba(162,162,162,.25);
  border-radius: 5px;
  position: absolute;
  top: -72px;
  bottom: 0;
  left: 128px;
  right: 128px;
  z-index: 4;
}

.logocompany {
  margin-top: 20px;
  margin-left: 15px;
}

.review {
  margin-left: 15px;
  margin-top: 45px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #050c33;
}

.caption {
  margin-left: 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: #838b9c;
  margin-bottom: 20px;
}

.caption-link {
  text-decoration: underline;
  color: #050c33;
  outline: none;
  font-weight: 400;
}

.content {
  margin: auto;
  margin-top: 74px;
  position: relative;
  padding: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0px 4px 60px rgba(162, 162, 162, .25);
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

  .logocompany{
    margin-top: 70px;
  }

  .review {
    flex: 2;
    margin-right: 15px;
  }

  .reviews{
    margin-left: 80px;
    width: 55%;
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
}
</style>