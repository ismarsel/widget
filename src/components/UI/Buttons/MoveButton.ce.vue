<template>
  <button class="move-btn">
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
    >
      <g>
        <rect y="42" width="51" height="2" />
        <rect y="30" width="51" height="2" />
        <rect y="20" width="51" height="2" />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
  name: "MoveButton",
};
</script>

<style lang="scss" scoped>
.move-btn {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
}
</style>