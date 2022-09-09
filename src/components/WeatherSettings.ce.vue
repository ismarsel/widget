<template>
  <div class="cities-list">
    <drag-item @removeItem="$emit('removeItem', index)">{{ city }}</drag-item>
  </div>
</template>

<script>
import DragItem from "./DragItem.ce.vue";

export default {
  name: "WeatherSettings",
  components: { DragItem },
  props: {
    city: {
      type: String,
    },
    index: {
      type: Number
    }
  },
  emits: ["removeItem"],
};
</script>

<style lang="scss" scoped>
.cities-list {
  width: 90%;
}
</style>