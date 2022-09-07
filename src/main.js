/* import { defineCustomElement } from 'vue';
import App from './WeatherWidget.ce.vue';

const widget = defineCustomElement(App);
customElements.define('weather-widget', widget); */
import { defineCustomElementWrapped } from "./defineCustomElementWithStyles";
import App from "./WeatherWidget.ce.vue";

customElements.define(
  "weather-widget",
  defineCustomElementWrapped(App)
);
