<template>
  <button class="custom-button">
    <slot/>
  </button>
</template>
<script>
export default {
  name: 'CustomButton'
}
</script>
<style lang="scss" scoped>
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  width: 100%;
  height: 41px;
  border: none;
  cursor: pointer;
  background-color: var(--green);
  transition: all .3s ease-in-out;

  &:hover {
    background-color: var(--green-hover);
  }

  &.not-active {
    background-color: var(--gray);
    pointer-events: none;
  }
}
</style>