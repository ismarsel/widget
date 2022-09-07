import { defineCustomElement } from 'vue';
import App from './WeatherWidget.ce.vue';

const widget = defineCustomElement(App);
customElements.define('weather-widget', widget);