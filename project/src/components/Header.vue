<script>
import drupal_coder from "../assets/images/drupal-coder.svg"
import cup from "../assets/images/cup.png"
import background_video from "../assets/videos/video.mp4"

export default {
  name: "header",
  data: () => {
    return {
      drupal_coder,
      background_video,
      cup
    }
  }
};
</script>

<template>
  <div class="wrapper container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark mx-0 px-0">
      <div class="container justify-content-center">
        <div class="row order-md-1 supp-menu">
          <div class="col-12">
            <div class="container order-md-1 ">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item glowing-link">
                    <a class="nav-link" href="#">ПОДДЕРЖКА DRUPAL</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                      АДМИНИСТРИРОВАНИЕ
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                      <li><a class="dropdown-item" href="#">МИГРАЦИЯ</a></li>
                      <li><a class="dropdown-item" href="#">БЭКАПЫ</a></li>
                      <li><a class="dropdown-item" href="#">АУДИТ БЕЗОПАСНОСТИ</a></li>
                      <li><a class="dropdown-item" href="#">ОПТИМИЗАЦИЯ СКОРОСТИ</a></li>
                      <li><a class="dropdown-item" href="#">ПЕРЕЕЗД НА HTTPS</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">ПРОДВИЖЕНИЕ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">РЕКЛАМА</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                      О НАС
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                      <li><a class="dropdown-item" href="#">КОМАНДА</a></li>
                      <li><a class="dropdown-item" href="#">DRUPALGIVE</a></li>
                      <li><a class="dropdown-item" href="#">БЛОГ</a></li>
                      <li><a class="dropdown-item" href="#">КУРСЫ DRUPAL</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">ПРОЕКТЫ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">КОНТАКТЫ</a>
                  </li>
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

    <video class="background-video" autoplay muted loop>
      <source v-bind:src="background_video" type="video/mp4">
    </video>
    <div class="overlay"></div>

    <div class="container main-container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center text-md-left header-title-div">
          <h1 class="header-upper-text big">Поддержка <br> сайтов на Drupal</h1>
          <p class="header-upper-text small">Сопровождение и поддержка сайтов <br> на CMS Drupal любых версий и
            запущенности
          </p>
          <a class="btn tariff-btn">Тарифы</a>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-6 col-md-4 supp">
              <div class="parts-wrapper">
                <div class="upper-part">
                  #1
                  <img v-bind:src="cup" alt="cup" id="cup-image">
                </div>
                <div class="lower-part">
                  Drupal-разработчик <br> в России по версии <br> рейтинга Рунета
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 supp">
              <div class="parts-wrapper">
                <div class="second-block">
                  3+
                </div>
                <div class="lower-part">
                  средний опыт <br> специалистов более <br> 3 лет
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 supp">
              <div class="parts-wrapper">
                <div class="second-block">
                  14
                </div>
                <div class="lower-part">
                  лет опыта в сфере <br> Drupal
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 supp">
              <div class="parts-wrapper">
                <div class="second-block">
                  50+
                </div>
                <div class="lower-part">
                  модулей и тем <br> в формате DrupalGive
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 supp">
              <div class="parts-wrapper">
                <div class="second-block">
                  90 000+
                </div>
                <div class="lower-part">
                  часов поддержки <br> сайтов на Drupal
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 supp">
              <div class="parts-wrapper">
                <div class="second-block">
                  300+
                </div>
                <div class="lower-part">
                  Проектов <br> на поддержке
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.background-video {
  position: absolute;
  z-index: -1;
  filter: blur(3px);
  overflow: hidden;
}

.overlay {
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/images/drupal-coder1.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-color: rgba(0, 0, 0, .8);
  background-size: 100%;
  z-index: -1;
}

.tariff-btn {
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 22px 20px;
  width: 230px;
  height: 60px;
  text-align: center;
  border: 2px solid #f14d34;
  border-radius: 5px;
  margin-bottom: 100px;
  line-height: 1;
}

.tariff-btn:hover {
  background-color: #f14d34;
}

.supp {
  margin-bottom: 30px;
}

.parts-wrapper {
  border-left: 3px solid #f14d34;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
  min-height: 80px;
  height: 100%;
}

.upper-part {
  font-size: 48px;
  margin-top: -27px;
}

.lower-part {
  margin-top: -2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: rgba(255, 255, 255, .7);
}

.second-block {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 5px;
  position: relative;
}

.wrapper {
  position: relative;
  font-weight: 700;
  height: 100%;
  padding: 30px 5px;
  color: white;
}

.header-upper-text {
  color: white;
}

.big {
  font-weight: 700;
  font-size: 25px;
  line-height: 1.2;
}

.small {
  font-size: 14px;
  margin-bottom: 50px;
}

#cup-image {
  vertical-align: baseline;
  position: absolute;
}

h2 {
  vertical-align: center;
  text-align: center;
}

.navbar-nav li a {
  padding: 8px 20px;
  border-bottom: 1px solid #312a2a;
}

.glowing-link {
  color: #f14d34;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus, .navbar-toggler:active {
  outline: none;
  box-shadow: none;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
}

.dropdown-menu {
  font-size: 12px;
  background-color: black;
  border-radius: 0;
}

.dropdown-item {
  color: white;
}

.navbar {
  z-index: 2;
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

.supp-menu {
  width: 100%;
}

.supp-logo {
  width: 100%;
}

@media screen and (min-width: 800px) {
  .overlay {
    background-size: 50%;
  }

  .main-container {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }

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

  .header-title-div {
    text-align: left;
  }

  .nav-item {
    margin: 0 5px;
  }

  .navbar-nav li a {
    border: none;
  }

  .dropdown-menu {
    background-color: #f14d34;
  }

  .dropdown-item:hover {
    background-color: #ab1a0e;
    color: white;
  }

  .glowing-link {
    white-space: nowrap;
    border-bottom: 3px #f14d34 solid;
  }

  .big {
    font-size: 40px;
  }

  .small {
    font-size: 18px;;
  }

  .supp {
    margin-bottom: 80px;
  }
}
</style>