<script setup>
import Header from "@/components/Header.vue";
import Support from "@/components/Support.vue";
import Experience from "@/components/Experience.vue";
</script>

<template>
  <div class="main">
    <Header/>
    <Support/>
    <Experience/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.main {
  font-family: Montserrat, sans-serif;
  margin: 0;
}
</style>
