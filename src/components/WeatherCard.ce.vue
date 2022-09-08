<template>
  <div class="wrapper">
    <div class="title">Мелеуз</div>
    <div class="main-info">
      <div class="main-info__temperature">
        <img src="http://openweathermap.org/img/w/10d.png" alt="weather icon" />
        <span>12&#176;C</span>
      </div>
      <div class="main-info__feels-like">
        <p>Ощущается как 12&#176;C</p>
        <p>Пасмурно</p>
      </div>
    </div>
    <div class="detail-info">
      <span class="pressure">745 мм рт.ст.</span>
      <span class="humidity">55%</span>
      <span class="wind-speed">5,5 м/c</span>
      <span class="visibility">10 км</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  background-color: rgba(14, 86, 69, 0.299);
  border-radius: 4px;
}
.title {
  padding: 10px 0;
}
.main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__feels-like p {
    margin: 0;
    text-align: center;
  }
}
.detail-info {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
}

</style>