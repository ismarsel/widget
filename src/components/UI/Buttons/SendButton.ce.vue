<template>
  <button class="send-btn">
    <svg width="20px" height="20px" viewBox="0 0 64 64">
      <g>
        <path
          d="M0.576,29.094l-0.023,1.801l21.702,10.851l10.851,21.702l1.801-0.023l29-62l-0.782-0.548l-0.548-0.782L0.576,29.094z
          M58.269,4.317L22.803,39.783L3.296,30.03L58.269,4.317z M33.97,60.704l-9.753-19.507L59.683,5.731L33.97,60.704z"
        />
      </g>
    </svg>
  </button>
</template>

<script>
export default {
  name: "SendButton",
};
</script>

<style lang="scss" scoped>
.send-btn {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: transform 0.25s ease-in-out;
  &:hover {
    transform: translateX(2px);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateX(4px);
    transform: translateY(-4px);
  }
}
</style>