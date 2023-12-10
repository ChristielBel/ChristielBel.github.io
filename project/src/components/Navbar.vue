<script>
import drupal_coder from "../assets/images/drupal-coder.svg"
export default {
  name: "Navbar",
  data: () => {
    return {
      drupal_coder
    }
  }
 };
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark mx-0 px-0">
    <div class="container justify-content-center">
      <div class="row order-md-1 supp-menu">
        <div class="col-12">
          <div class="container order-md-1 m-0">
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
</template>

<style scoped>
.navbar-nav li a {
  border-bottom: 1px solid #312a2a;
}

.nav-item {
  padding: 0;
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
  padding: 8px 20px;
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

@media screen and (min-width: 768px) {
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
}
</style>