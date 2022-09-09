<template>
  <div class="wrapper">
    <div class="title">{{ city }}</div>
    <div class="main-info">
      <div class="main-info__temperature">
        <img :src="`${apiUrlIcon}${weatherData.icon}.png`" alt="weather icon" />
        {{ Math.round(weatherData.temp) }}&#176;<span>C</span>
      </div>
      <div class="main-info__feels-like">
        <p>Ощущается как {{ Math.round(weatherData.feels_like) }}&#176;C</p>
        <p>{{ weatherData.description }}</p>
      </div>
    </div>
    <div class="detail-info">
      <span class="pressure">
        <img
          src="../assets/weather-icons/weather-pressure.png"
          alt="давление"
        />
        {{ weatherData.pressure }} мм рт.ст.</span
      >
      <span class="humidity">
        <img src="../assets/weather-icons/weather-drop.png" alt="влажность" />
        {{ weatherData.humidity }} %</span
      >
      <span class="wind-speed">
        <img src="../assets/weather-icons/weather-wind.png" alt="ветер" />{{
          weatherData.speed
        }}
        м/c</span
      >
      <span class="visibility">
        <img src="../assets/weather-icons/weather-eye.png" alt="видимость" />{{
          visibility / 1000
        }}
        км</span
      >
    </div>
  </div>
</template>

<script>
const apiKey = "4a07809da1efc6826def26e362e29a15";
const apiUrlBase = "https://api.openweathermap.org/data/2.5/";

export default {
  name: "WeatherCard",
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      apiUrlIcon: "http://openweathermap.org/img/w/",
      weatherData: {},
      visibility: null,
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      const res = await fetch(
        `${apiUrlBase}weather?q=${this.city}&lang=ru&units=metric&appid=${apiKey}`
      );
      const { weather, main, visibility, wind } = await res.json();
      // this.weatherData = main;
      Object.assign(this.weatherData, ...weather, main, wind);
      this.visibility = visibility;
    },
  },
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
  font-size: 26px;
  font-weight: 300;
}
.main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__temperature {
    font-size: 48px;
    font-weight: 600;
    img {
      vertical-align: middle;
      width: 70px;
    }
    span {
      font-weight: 300;
    }
  }
  &__feels-like p {
    margin: 0px;
    text-align: center;
    font-style: italic;
    &:first-child {
      font-size: 14px;
    }
    &:last-child::first-letter {
      text-transform: uppercase;
    }
  }
}
.detail-info {
  display: grid;
  justify-items: stretch;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5px;
  margin-top: 40px;
  border-top: 1px solid #333;
  padding: 10px 0;
  font-size: 14px;
  span {
    min-width: 75px;
    display: flex;
    justify-content: space-between;
  }
  span:nth-child(even) {
    justify-self: end;
  }
  img {
    width: 18px;
    height: 18px;
    padding-right: 7px;
  }
}
</style>