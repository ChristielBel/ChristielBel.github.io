<script>
import Service from "@/App.vue";

export default {
  name: "TariffBlock",
  props: {
    type: {
      String,
      required: true
    },
    addTime: {
      Boolean,
      required: true
    },
    time: {
      String,
    },
    option: {
      String,
      required: true
    },
    amount: {
      String,
      required: true
    }
  }
}
</script>

<template>
  <div class="col-12 col-md-4">
    <div class="parts-wrapper">
      <div class="header-wrapper">
        {{ type }}
      </div>
      <div class="main-part">
        <ul class="services">
          <li class="services-item">Консультации по работе и SEO</li>
          <li class="services-item">Услуги дизайнера</li>
          <li v-if="addTime" class="services-item">{{ time }}</li>
          <li class="services-item">Неиспользованные оплаченные часы {{ option }}</li>
          <li class="services-item">Предоплата от {{ amount }} рублей в месяц</li>
        </ul>
      </div>
      <div class="button-wrapper">
        <button class="btn contact-us">Свяжитесь с нами!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parts-wrapper {
  background-color: white;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 20px;
}

.header-wrapper {
  padding: 15px 5px;
  color: #f14d34;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 50px;
}

.header-wrapper::after {
  z-index: 10;
  width: 85%;
  left: 35px;
  top: 95px;
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  background-color: #c2c2c2;
}

.services {
  list-style: none;
  padding-left: 20px;
  padding-bottom: 30px;
}

.services-item {
  font-size: 16px;
  line-height: 1.22;
  font-weight: 500;
  color: #4e5a73;;
  padding: 10px 0 10px 10px;
}

.button-wrapper {
  display: flex;
}

.contact-us {
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  color: #f14d34;
  text-decoration: none;
  padding: 22px 20px;
  height: 60px;
  text-align: center;
  border: 2px solid #f14d34;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  line-height: 0.7;
  text-transform: capitalize;
  width: 100%;
}

.contact-us:hover {
  color: white ;
  background-color: #f14d34;
}
</style>