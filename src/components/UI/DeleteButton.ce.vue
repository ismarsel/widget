<template>
  <button class="delete" type="button">
    <svg
      class="svg"
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
    >
      <polygon
        fill="none"
        stroke="#000000"
        stroke-width="3"
        stroke-miterlimit="10"
        points="32,1 26,1 26,10 20,12 14,6 6,14 12,20 
		10,26 1,26 1,38 10,38 12,44 6,50 14,58 20,52 26,54 26,63 32,63 38,63 38,54 44,52 50,58 58,50 52,44 54,38 63,38 63,26 54,26 
		52,20 58,14 50,6 44,12 38,10 38,1 	"
      />
      <circle
        fill="none"
        stroke="#000000"
        stroke-width="3"
        stroke-miterlimit="10"
        cx="32"
        cy="32"
        r="6"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "DeleteButton",
};
</script>

<style lang="scss" scoped>
.delete {
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: transform 0.25s ease-in-out;
  &:hover {
    transform: rotate(22deg);
  }
}
</style>