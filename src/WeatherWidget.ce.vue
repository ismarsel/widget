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
      <component
        :is="weatherComponent"
        v-for="(city, index) in cities"
        :key="index"
        :city="city"
        :index="index"
        @removeItem="removeItem(index)"
      />
    </keep-alive>
    <location-input
      v-if="isSetting && cities.length < 4"
      @addLocation="addLocation($event)"
    />
  </div>
</template>

<script>
import CloseButton from "./components/UI/Buttons/CloseButton.ce.vue";
import GearButton from "./components/UI/Buttons/GearButton.ce.vue";

import WeatherSettings from "./components/WeatherSettings.ce.vue";
import WeatherCard from "./components/WeatherCard.ce.vue";
import LocationInput from "./components/UI/LocationInput.ce.vue";

export default {
  name: "App",
  components: {
    WeatherSettings,
    WeatherCard,
    GearButton,
    CloseButton,
    LocationInput,
  },
  data() {
    return {
      isSetting: false,
      cities: [],
    };
  },
  mounted() {
    this.cities = JSON.parse(localStorage.getItem('cities')) || [];
    if (!this.cities.length) this.isSetting = true;
  },
  watch: {
    cities: {
      handler() {
        this.setStorage();
      },
      deep:true
    },
  },
  computed: {
    weatherComponent() {
      return this.isSetting ? "weather-settings" : "weather-card";
    },
  },
  methods: {
    addLocation(city) {
      if (!city && city != " ") return;
      city = city.charAt(0).toUpperCase() + city.slice(1);
      this.cities.push(city);
    },
    removeItem(city) {
      console.log(city);
      this.cities.splice(city, 1);
    },
    setStorage() {
      localStorage.setItem('cities', JSON.stringify(this.cities))
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap");
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