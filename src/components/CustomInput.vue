<template>
  <label class="input-label">
    <span class="input-label__text">{{ label }}</span>
    <input 
      class="input-label__input" 
      v-bind="$attrs"
      v-model="vModel"
    />
  </label>
</template>
<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    vModel: {
      get() {
        return this.$attrs.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input-label {
  display: block;
  &__text {
    font-size: 15px;
    margin-bottom: 14px;
    display: inline-block;
  }
  &__input {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    border: none;
  }
}
</style>