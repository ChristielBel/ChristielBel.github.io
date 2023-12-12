<script setup>
import Header from "@/components/Header.vue";
import Support from "@/components/Support.vue";
import Service from "@/components/Service.vue"
import TimeTasks from "@/components/TimeTasks.vue";
</script>

<template>
  <div class="main">
    <Header/>
    <Service/>
    <Support/>
    <TimeTasks/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.main {
  font-family: Montserrat, sans-serif;
  margin: 0;
}
</style>
