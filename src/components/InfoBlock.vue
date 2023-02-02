<template>
  <section class="info-block">
    <span class="info-block__title">{{ title }}</span>
    <span class="info-block__value">{{ value }}</span>
  </section>
</template>
<script>
export default {
  name: 'InfoBlock',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.info-block {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 5px;
  }

  &__value {
    color: var(--white);
  }
}
</style>