<script>
import NavbarLink from "@/components/NavbarLink.vue";
import NavbarDropDownLink from "@/components/NavbarDropDownLink.vue";
import drupal_coder from "../assets/images/drupal-coder.svg"

export default {
  name: "Navbar",
  components: {NavbarLink, NavbarDropDownLink},
  data: () => {
    return {
      drupal_coder,
      // для обычных ссылок
      text1: "ПОДДЕРЖКА DRUPAL", link1: "#",
      text3: "ПРОДВИЖЕНИЕ", link3: "#",
      text4: "РЕКЛАМА", link4: "#",
      text6: "ПРОЕКТЫ", link6: "#",
      text7: "КОНТАКТЫ", link7: "#",

      // для раскрывающихся
      text2: "АДМИНИСТРИРОВАНИЕ",
      link2: "#",
      dropDownTexts2: ['МИГРАЦИЯ', 'БЭКАПЫ', 'АУДИТ БЕЗОПАСНОСТИ'
        , 'ОПТИМИЗАЦИЯ СКОРОСТИ', 'ПЕРЕЕЗД НА HTTPS'],
      dropdownLinks2: ['', '', '', '', ''],

      text5: "О НАС",
      link5: "#",
      dropDownTexts5: ['КОМАНДА', 'DRUPALGIVE', 'БЛОГ', 'КУРСЫ DRUPAL'],
      dropdownLinks5: ['', '', '', ''],
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-xl navbar-dark mx-0 px-0">
    <div class="container-fluid justify-content-center">
      <div class="row order-xl-1 supp-menu">
        <div class="col-12">
          <div class="container-fluid order-xl-1 m-0">
            <div class="row collapse navbar-collapse" id="navbarNav">
              <ul class="col-12 navbar-nav">
                <NavbarLink :text="text1" :link="link1"/>
                <NavbarDropDownLink :text="text2" :link="link2" :dropDownTexts="dropDownTexts2"
                                    :dropDownLinks="dropdownLinks2"/>
                <NavbarLink :text="text3" :link="link3"/>
                <NavbarLink :text="text4" :link="link4"/>
                <NavbarDropDownLink :text="text5" :link="link5" :dropDownTexts="dropDownTexts5"
                                    :dropDownLinks="dropdownLinks5"/>
                <NavbarLink :text="text6" :link="link6"/>
                <NavbarLink :text="text7" :link="link7"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row supp-logo">
        <div class="col-6">
          <a class="navbar-brand" href="#">
            <img class="header-logo" v-bind:src="drupal_coder" alt="Home" rel="home">
          </a>
        </div>
        <div class="col-6 text-right">
          <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.col-12{
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav li a {
  border-bottom: 1px solid #312a2a;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: none;
  box-shadow: none;
}

.navbar-dark .navbar-nav {
  color: white;
}

.navbar {
  z-index: 20;
  font-weight: 500;
  background-color: black;
  font-size: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.header-logo {
  width: 156px;
  height: 31px;
}

@media screen and (max-width: 1200px){
  .supp-menu {
    width: 105%;
  }

  .supp-logo {
    width: 105%;
  }
}

@media screen and (min-width: 1200px) {
  .navbar {
    border: none;
    background: none;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .header-logo {
    margin-left: 50px;
  }

  .navbar-nav li a {
    border: none;
  }
}
</style>