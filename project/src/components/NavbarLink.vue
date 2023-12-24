<script>
export default {
  name: "NavbarLink",
  props: {
    text: {
      String,
      required: true
    },
    link: {
      String,
      required: true
    }
  }
};
</script>

<template>
  <li class="nav-item">
    <a class="nav-link glowing-link" v-bind:href="link">
      <div class="text"> {{ text }}</div>
    </a>
  </li>
</template>

<style scoped>
.nav-item {
  white-space: nowrap;
  padding: 0;
}

.glowing-link {
  border-bottom: 3px #f14d3400 solid;
  transition: border-color 0.3s ease;
}

.text {
  text-decoration: none;
  display: inline-block;
  width: 100%;
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

@media screen and (max-width: 1000px) {
  .nav-item {
    border-bottom: 1px solid #312a2a;
  }
}

@media screen and (min-width: 1000px) {
  .glowing-link:hover {
    border-bottom: 3px #f14d34FF solid;
  }

  .text:hover {
    color: white;
  }
}
</style>