<script>
import FormLinkWithUs from "@/components/FormLinkWithUs.vue";

export default {
  components: {FormLinkWithUs},
  computed: {
    isFormVisible() {
      return this.$store.state.isFormVisible;
    },
  },
  watch: {
    isFormVisible: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
        if (newValue !== oldValue) {
          this.animatePopup();
        }
      },
    },
  },
  methods: {
    animatePopup() {
      if (this.isFormVisible) {
        // Анимация появления
        const startTimestamp = performance.now();
        const duration = 500;

        const animate = (timestamp) => {
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          // Используем кубическую кривую Безье для более плавного эффекта
          this.$el.style.opacity = easeInOutCubic(progress);
          console.log(progress);
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      } else {
        // Анимация исчезновения
        const startTimestamp = performance.now();
        const duration = 500;

        const animate = (timestamp) => {
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          // Используем кубическую кривую Безье для более плавного эффекта
          const easedProgress = easeInOutCubic(progress);
          console.log(progress);
          this.$el.style.opacity = 1 - easedProgress;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            this.$router.go(-1);
          }
        };

        requestAnimationFrame(animate);
      }
    },
    closePopup() {
      this.$store.dispatch('hideForm');
    },
  },
};

// Функция кубической кривой Безье для плавного перехода
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
}
</script>

<template>
  <div class="popup-wrapper" :class="{ 'visible': isFormVisible}">
    <div class="cover"></div>
    <FormLinkWithUs/>
    <div class="close-button" @click="closePopup">×</div>
  </div>
</template>

<style scoped>
.cover {
  z-index: -1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
}

.popup-wrapper {
  border-radius: 5px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #1b1e21;
  width: 90%;
  height: 60%;
  top: 15%;
  left: 5%;
  padding: 20px;
  z-index: 15;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.popup-wrapper.visible {
  opacity: 0;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  padding: 1px 9px;
}

@media screen and (min-width: 1024px) {
  .popup-wrapper {
    width: 50%;
    left: 25%;
  }
}
</style>