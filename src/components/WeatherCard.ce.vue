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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  background-color: antiquewhite;
}
.title {

}
.main-info {
}
.main-info__temperature {
}
.main-info__feels-like {
}
.detail-info {
}
.pressure {
}
.humidity {
}
.wind-speed {
}
.visibility {
}
</style>