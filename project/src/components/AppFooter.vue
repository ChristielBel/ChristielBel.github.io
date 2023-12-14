<script>
import FormLinkWithUs from "@/components/FormLinkWithUs.vue";
import FB from "../assets/images/FB.svg"
import VK from "../assets/images/VK.png"
import Telegram from "../assets/images/Telegram.png"
import YouTube from "../assets/images/YT.png"

export default {
  name: "AppFooter",
  components: {FormLinkWithUs},
  data: () => {
    return {
      FB,
      VK,
      Telegram,
      YouTube
    }
  }
}
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="block-header">
                Оставить заявку на<br>
                поддержку сайта
              </div>
              <div class="description">
                Срочно нужна поддержка сайта?
                Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой?
                Тогда вам точно к нам!
                Просто оставьте заявку и наш менеджер с вами свяжется!
              </div>
              <div class="contacts">
                <ul>
                  <li><h6>8 800 222-26-73</h6></li>
                  <li><a href="https://info@drupal-coder.ru">info@drupal-coder.ru</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <FormLinkWithUs/>
            </div>
          </div>
          <div class="row bottom-row">
            <div class="col-12">
              <div class="social-wrapper">
                <ul class="social">
                  <li class="social-item"><a href="" title="FB">
                    <img class="social-image" :src="FB" alt="FB">
                  </a></li>
                  <li class="social-item"><a href="" title="VK">
                    <img class="social-image" :src="VK" alt="VK">
                  </a></li>
                  <li class="social-item"><a href="" title="Telegram">
                    <img class="social-image" :src="Telegram" alt="Telegram">
                  </a></li>
                  <li class="social-item"><a href=""
                                             title="YouTube">
                    <img class="social-image" :src="YouTube" alt="YouTube">
                  </a></li>
                </ul>
              </div>
            </div>
            <div class="col-12">
              <div class="copyright">
                Проект ООО «Инитлаб», Краснодар, Россия.<br>
                Drupal является зарегистрированной торговой маркой Dries Buytaert
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  margin-top: 45px;
  padding-top: 35px;
  padding-bottom: 36px;
  background: linear-gradient(254.72deg, rgba(255, 255, 255, .276) -114.85%, rgba(255, 255, 255, 0) 69.04%), url(../assets/images/D-flying.svg) no-repeat top center/25%, url(../assets/images/D-footer.svg) no-repeat bottom right/30%, #040613;
  color: #fff;
}

.block-header {
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.22;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 30px;
  line-height: 1.55;
  font-weight: 500;
  font-size: 14px;
  color: rgba(256, 256, 256, .7);
}

.contacts {
  margin-bottom: 30px;
}

.contacts ul {
  list-style: none;
}

.contacts ul li {
  margin-bottom: 10px;
}

.contacts ul li a {
  text-decoration: underline;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
}

.contacts ul li h6 {
  font-size: 32px;
  color: #fff;
  font-weight: 700;
}

.contacts ul li a:before {
  content: "";
  display: block;
  width: 18px;
  height: 18px;
  background: url(../assets/images/phone.svg) no-repeat center;
  background-size: contain;
  position: absolute;
  left: 25px;
  bottom: 70px;
  opacity: .8;
}

.contacts ul li h6:before {
  content: "";
  display: block;
  width: 24px;
  height: 18px;
  background: url(../assets/images/mail.svg) no-repeat center;
  background-size: contain;
  position: absolute;
  left: 23px;
  bottom: 33px;
  opacity: .8;
}

.social-wrapper {
  padding-top: 40px;
}

.social {
  margin: 0;
  padding: 0 0 5px 0;
  list-style: none;

}

.social-item {
  display: inline-block;
  margin-right: 10px;
}

.social li a {
  border: 2px solid #f14d34;
  background: #f14d34;
  border-radius: 5px;
  color: #fff;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  transition: background .3s;
}

.social-image {
  width: 18px;
}

.copyright {
  margin-top: 5px;
  font-size: 14px;
  color: white;
}

.bottom-row {
  margin-top: 70px;
}

.bottom-row:after {
  width: 200vw;
  content: "";
  display: block;
  position: absolute;
  right: -100px;
  height: 1px;
  background: rgba(256, 256, 256, .3);
}

@media screen and (min-width: 768px) {
  .contacts {
    margin-bottom: 0;
  }
  .contacts ul li a:before {
    left: 25px;
    bottom: 130px;
  }

  .contacts ul li h6:before {
    left: 23px;
    bottom: 90px;
  }
}

@media screen and (min-width: 1024px) {
  .block-header {
    font-size: 42px;
    text-align: left;
  }

  .description {
    margin-bottom: 80px;
  }

  .contacts ul li a:before {
    left: 25px;
    bottom: 73px;
  }

  .contacts ul li h6:before {
    left: 23px;
    bottom: 35px;
  }
}

</style>