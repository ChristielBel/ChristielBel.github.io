<script>
import FormLinkWithUs from "@/components/FormLinkWithUs.vue";

export default {
  name: "AppFooter",
  components: {FormLinkWithUs}
}
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="header">
                Оставить заявку на поддержку сайта
              </div>
              <div class="description">
                Срочно нужна поддержка сайта?
                Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой?
                Тогда вам точно к нам!
                Просто оставьте заявку и наш менеджер с вами свяжется!
              </div>
              <div class="contacts">
                <h6>8 800 222-26-73</h6>
                <a href="https://info@drupal-coder.ru">info@drupal-coder.ru</a>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <FormLinkWithUs/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="social-links-wrapper">
                <ul class="social-links">
                  <li class="social-link-item"><a href="https://vk.com/initlab" title="VK">
                    <img src="" alt="VK">
                  </a></li>
                  <li class="social-link-item"><a href="https://teleg.one/initlabbot" title="Telegram">
                    <img src="" alt="Telegram">
                  </a></li>
                  <li class="social-link-item"><a href="https://www.youtube.com/channel/UCyFEbngMB-bK2ulNtd_W43A" title="YouTube">
                    <img src="" alt="YouTube">
                  </a></li>
                  <li class="social-link-item"><a href="https://zen.yandex.ru/id/6037ce072f500a068c630fec" title="Dzen">
                    <img src="" alt="Dzen">
                  </a></li>
                  <li class="social-link-item"><a href="https://www.facebook.com/initlabkr/" title="FB">
                    <img src="" alt="FB">
                  </a>
                  </li>
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
.social-links {
  margin: 0;
  padding: 0;
  list-style: none;
}

.social-link-item {
  display: inline-block;
  margin-right: 10px;
}
</style>