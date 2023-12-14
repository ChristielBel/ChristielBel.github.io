<script setup>
import Header from "@/components/Header.vue";
import Support from "@/components/Support.vue";
import Service from "@/components/Service.vue"
import TimeTasks from "@/components/TimeTasks.vue";
import Experience from "@/components/Experience.vue";
import Slider from "@/components/Slider.vue"
</script>

<template>
  <div class="main">
    <Header/>
    <Service/>
    <Support/>
    <Experience/>
    <TimeTasks/>
    <Slider/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.main {
  font-family: Montserrat, sans-serif;
  margin: 0;
}
</style>
