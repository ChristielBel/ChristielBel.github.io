import { withDirectives } from 'vue';

<script>
export default {
  name: "NavbarDropDownLink",
  props: {
    text: {
      String,
      required: true
    },
    link: {
      String,
      required: true
    },
    dropDownTexts: {
      Array,
      requared: true
    },
    dropDownLinks: {
      Array,
      requared: true
    }
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isDesktopMenuOpen: false,
      isArrowRotated: false,
    };
  },
  methods: {
    toggleArrowRotation() {
      this.isArrowRotated = !this.isArrowRotated;
    },
  }
};
</script>

<template>
  <li class="nav-item dropdown">
    <a class="nav-link glowing-link" v-bind:href="link" id="navbarDropdown1" role="button" data-toggle="dropdown"
       aria-haspopup="true" aria-expanded="false" @click="toggleArrowRotation">
      <div class="text drop-btn"> {{ text }}</div>
      <div class="arrow-icon" :class="{ 'rotated': isArrowRotated }"></div>
    </a>
    <ul class="list-menu drop-content dropdown-menu" aria-labelledby="navbarDropdown1">
      <li v-for="(dropDownText, index) in dropDownTexts" :key="index">
        <a class="list-item dropdown-item" :href="dropDownLinks[index]">{{ dropDownText }}</a>
      </li>
    </ul>
  </li>
</template>

<style scoped>
.drop-content {
  display: none;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
  padding: 8px 0;
}

.drop-content li {
  color: black;
  padding: 2px 0;
  text-decoration: none;
  display: block;
}

.nav-item, .list-menu {
  white-space: nowrap;
  padding: 0;
}

.text {
  text-decoration: none;
  display: inline-block;
  margin-right: 5px;
  color: white;
  background-color: transparent;
  transition: color 0.3s ease;
}

.text:hover {
  color: #f14d34;
  background-color: transparent;
}

.text:active {
  color: #ab1a0e;
  background-color: transparent;
}

li a {
  border-bottom: 1px solid #312a2a;
}

.list-menu {
  font-size: 12px;
  background-color: black;
  border-radius: 0;
}

.list-item {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding: 4px 4px;
  color: white;
}

.nav-link {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1000px){
  .arrow-icon {
    width: 10px;
    height: 10px;
    background-image: url("@/assets/images/arrow-menu.svg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 5px;
    transition: transform 0.5s ease;
  }

  .rotated {
    transform: rotate(90deg);
  }

  .list-item {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding: 4px 4px;
    color: white;
    margin-left: 5px;
    background-color: transparent;
    transition: color 0.3s ease;
  }

  .list-item:hover {
    color: #f14d34;
    background-color: transparent;
  }

  .list-item:active {
    color: #ab1a0e;
    background-color: transparent;
  }
}

@media screen and (min-width: 1000px) {
  .dropdown:hover .drop-content {
    position: absolute;
  }

  .dropdown {
    border-bottom: none;
  }

  .nav-link:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-image: url("@/assets/images/arrow-menu.svg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 5px;
    transition: transform 0.5s ease;
  }

  .nav-link:hover:after {
    transform: rotate(90deg);
  }

  .dropdown:hover .drop-content {
    display: block;
  }

  .text:hover {
    color: white;
  }

  .nav-item {
    margin: 0 5px;
  }

  .navbar-nav li a {
    border: none;
  }

  .list-menu {
    background-color: #f14d34;
  }

  .list-item:hover {
    background-color: #ab1a0e;
    color: white;
  }
}
</style>