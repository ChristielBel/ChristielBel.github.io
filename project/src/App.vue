<script setup>
import Support from "@/components/Support.vue";
import Service from "@/components/Service.vue";
import TimeTasks from "@/components/TimeTasks.vue";
import Experience from "@/components/Experience.vue";
import LastCases from "@/components/LastCases.vue";
import Faq from "@/components/Faq.vue";
import Team from "@/components/Team.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import Slider from "@/components/Slider.vue";
</script>

<template>
  <div class="main">
    <AppHeader />
    <Service />
    <Support />
    <Experience />
    <TimeTasks />
    <Team />
    <LastCases />
    <Slider/>
    <Faq />
    <AppFooter />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.main {
  font-family: Montserrat, sans-serif;
  margin: 0;
}
</style>
