import { defineCustomElementWrapped } from "./defineCustomElementWithStyles";
import App from "./WeatherWidget.ce.vue";

customElements.define(
  "weather-widget",
  defineCustomElementWrapped(App)
);
