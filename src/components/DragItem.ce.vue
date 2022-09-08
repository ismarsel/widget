<template>
  <div class="draggable-item">
    <move-button />
    <slot>Чикаго</slot>
    <trash-button />
  </div>
</template>

<script>
import TrashButton from "./UI/TrashButton.ce.vue";
import MoveButton from "./UI/MoveButton.ce.vue";

export default {
  name: "DragItem",
  components: { TrashButton, MoveButton },
};
</script>

<style lang="scss" scoped>
.draggable-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: rgba(51, 51, 51, 0.2);
  :last-child {
    margin-left: auto;
  }
}
</style>