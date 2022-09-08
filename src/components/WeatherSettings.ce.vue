<template>
  <div class="cities-list">
    <drag-item>{{ city }}</drag-item>
  </div>
</template>

<script>
import DragItem from './DragItem.ce.vue';

export default {
  name: "WeatherSettings",
  components: { DragItem },
  props: {
    city: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.cities-list {
  width: 90%;
  background-color: rgba(231, 38, 12, 0.2);
}
</style>