<template>
  <div class="container widget">
    <div class="widget-header">
      <!-- &nbsp; -->
      <transition name="fade" mode="out-in">
        <close-button v-if="isSetting" @click="isSetting = !isSetting" />
        <gear-button v-else @click="isSetting = !isSetting" />
      </transition>
    </div>
    <keep-alive>
      <component :is="weatherComponent" v-for="(city, index) in cities" :key="index" :city="city" />
    </keep-alive>
  </div>
</template>

<script>
import CloseButton from "./components/UI/CloseButton.ce.vue";
import GearButton from "./components/UI/GearButton.ce.vue";

import WeatherSettings from "./components/WeatherSettings.ce.vue";
import WeatherCard from "./components/WeatherCard.ce.vue";

export default {
  name: "App",
  components: { WeatherSettings, WeatherCard, GearButton, CloseButton },
  data() {
    return {
      isSetting: true,
      cities: ['Банког', 'Гонког', 'Сидней']
    };
  },
  computed: {
    weatherComponent() {
      return this.isSetting ? "weather-settings" : "weather-card";
    },
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  max-width: 700px;
  min-width: 320px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
}

.widget {
  font-family: Montserrat, serif;
  background: linear-gradient(to bottom, #91d0e5, rgba(135, 135, 135, 0.3));
  &-header {
    position: absolute;
    top: 5px;
    right: 5px;
    &__title {
      display: flex;
      align-items: center;
    }
  }
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.5s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
  scale: 0.5;
}
</style>