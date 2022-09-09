<template>
  <div
    class="cities-list drop-zone"
    :index="index"
    @drop="onDrop($event, index)"
    @dragover.prevent
    @dragenter.prevent
  >
    <drag-item
      @removeItem="$emit('removeItem', index)"
      draggable="true"
      @dragstart="onEventDragStart($event, index)"
      >{{ city }}</drag-item
    >
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
      type: Number,
    },
  },
  emits: ["removeItem", "onDrag", "onDrop"],
  data() {
    return {
      swapBBuffer: "",
      swapIndex: "",
      cities: [],
    };
  },
  methods: {
    onEventDragStart(event, index) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      this.$emit("onDrag", event, index);
    },
    onDrop(index) {
      this.$emit("onDrop", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.cities-list {
  width: 90%;
  background-color: rgba(65, 5, 5, 0.154);
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
}
</style>