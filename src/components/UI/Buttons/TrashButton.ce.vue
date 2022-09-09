<template>
  <button class="trash-btn" type="button">
    <svg width="17px" height="17px" viewBox="0 0 64 64">
        <path
          d="M13,64h38V10h3V8H40V0H24v8H10v2h3V64z M26,2h12v6H26V2z M49,10v52H15V10H49z"
        />
        <rect x="25" y="20" width="2" height="34" />
        <rect x="37" y="20" width="2" height="34" />
    </svg>
  </button>
</template>

<script>
export default {
  name: "TrashButton",
};
</script>

<style lang="scss" scoped>
.trash-btn {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #ff2828;
  }
  svg {
    fill: currentColor;
  }
}
</style>