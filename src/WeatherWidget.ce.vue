<template>
  <div class="container widget">
    <div class="widget-header">
      &nbsp;
      <delete-button />
    </div>
    <weather-card />
    <weather-card />
    <weather-card />
  </div>
</template>

<script>
import DeleteButton from "./components/UI/DeleteButton.ce.vue";
import WeatherCard from "./components/WeatherCard.ce.vue";

export default {
  name: "App",
  components: { DeleteButton, WeatherCard },
};
</script>

<style lang="scss">
.container {
  position: relative;
  max-width: 350px;
  min-height: 300px;
  padding: 10px;
  border-radius: 4px;
}
.widget {
  background: linear-gradient(to bottom, #91d0e5, rgba(135, 135, 135, 0.3));
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 5px;
    background-color: #ddfd;
  }
}
</style>