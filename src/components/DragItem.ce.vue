<template>
  <div class="draggable-item">
    <move-button />
    <slot>Чикаго</slot>
    <trash-button @click="$emit('removeItem', $event)" />
  </div>
</template>

<script>
import TrashButton from "./UI/Buttons/TrashButton.ce.vue";
import MoveButton from "./UI/Buttons/MoveButton.ce.vue";

export default {
  name: "DragItem",
  components: { TrashButton, MoveButton },
  emits: ["removeItem"],
};
</script>

<style lang="scss" scoped>
.draggable-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 10px;
  :last-child {
    margin-left: auto;
  }
}
</style>