<script>
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
  },
  methods: {
    openForm() {
      //изменение стейта, при котором показывается форма и проигрывается анимация появления
      //при закрытии формы через крестик, нужно реализовать изменение этого стейта в обратаную сторону
      this.$store.dispatch('showForm');
      this.$router.push({ name: 'form' });
    },
  }
}
</script>

<template>
  <div class="col-12 col-lg-4"  ref="tariffBlock">
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
          <button @click="openForm" class="btn contact-us">Свяжитесь с нами!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parts-wrapper {
  border: 1px #c2c2c2 solid;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 20px;
  transition: all .3s;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 3px #c2c2c2;
}

.header-wrapper {
  padding: 15px 5px;
  color: #f14d34;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 50px;
  border-bottom: 1px #c2c2c2 solid;
}

.services {
  list-style: url("../assets/images/check.svg");
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
  text-transform: uppercase;
  width: 100%;
}

.contact-us:hover {
  color: white ;
  background-color: #f14d34;
}

@media screen and (min-width: 1000px) {
  .parts-wrapper {
    margin-bottom: 70px;
  }

  .parts-wrapper:hover {
    transform: scale(110%);
  }

  .parts-wrapper:hover .contact-us {
    color: white ;
    background-color: #f14d34;
  }

  .parts-wrapper:hover .header-wrapper::after {
    left: 25px;
    width: 85%;
  }

  .header-wrapper {
    margin-top: 30px;
  }

  .header-wrapper::after {
    width: 80%;
    left: 38px;
    top: 125px;
  }

}
</style>