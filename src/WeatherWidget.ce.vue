<template>
  <div class="container">
    <button class="btn btn-gear">x</button>
    <delete-button />
    <div class="wrapper">
      <rename-button />
    </div>
  </div>
</template>

<script>
import DeleteButton from "./components/UI/DeleteButton.ce.vue";
import RenameButton from './components/UI/RenameButton.ce.vue';
export default {
  name: "App",
  components: { DeleteButton, RenameButton },
};
</script>

<style lang="scss">
.container {
 width: 150px;
 height: 300px;
 background-color: #888;
}
.btn {
  border: none;
  outline: none;
  // padding: 8px;
  background-color: rgba(136, 136, 136, 0.3);
  color: #fff;
  border-radius: 4px;
  transition: all 0.25s ease;
}
</style>