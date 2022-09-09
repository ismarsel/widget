<template>
  <div>
    <label for="location" class="label">Добавьте город</label>
    <div class="location">
      <input
        type="text"
        id="location"
        tabindex="0"
        class="location__input"
        placeholder="Введите город"
        v-model.trim="searchText"
        @keypress.enter="$emit('addLocation', searchText), clearInput()"
      />
      <send-button @click="$emit('addLocation', searchText), clearInput()" />
    </div>
  </div>
</template>

<script>
import SendButton from "./Buttons/SendButton.ce.vue";
export default {
  components: { SendButton },
  name: "LocationInput",
  props: ["modelValue"],
  emits: ["addLocation"],
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    clearInput() {
      this.searchText = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  padding-left: 5px;
}
.location {
  height: 30px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba(19, 19, 35, 0.13);
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  &__input {
    border: none;
    outline: none;
    background: transparent;
    line-height: 30px;
    font-style: italic;
  }
}
</style>