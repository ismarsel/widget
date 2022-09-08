<template>
  <button class="close-btn" type="button">
    <svg width="20px" height="20px" viewBox="0 0 64 64">
      <line
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linejoin="bevel"
        stroke-miterlimit="10"
        x1="63"
        y1="63"
        x2="32"
        y2="32"
      />
      <line
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linejoin="bevel"
        stroke-miterlimit="10"
        x1="32"
        y1="32"
        x2="1"
        y2="1"
      />
      <line
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linejoin="bevel"
        stroke-miterlimit="10"
        x1="63"
        y1="1"
        x2="1"
        y2="63"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "CloseButton",
};
</script>

<style lang="scss" scoped>
.close-btn {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ff2828;
    transform: rotate(90deg);
  }
  svg line {
    stroke: currentColor;
  }
}
</style>