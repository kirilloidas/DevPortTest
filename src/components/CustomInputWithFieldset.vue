<template>
  <fieldset class="fieldset-container">
    <legend class="fieldset-container__legend">{{ legend }}</legend>
    <label class="label-container">
      <input 
        class="label-container__input" 
        v-model="vModel" 
      />
    </label>
  </fieldset>
</template>
<script>
import inputMixin from '@/mixins/input.mixin'
export default {
  name: 'CustomInput',
  mixins: [inputMixin],
  computed: {
    vModel: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
<style lang="scss" scoped src="@/assets/styles/fieldset-styles.scss"></style>
<style lang="scss" scoped>
.fieldset-container {
  padding: 7px 16px 10px 14.5px;
  .label-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__input {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      border: none;
      width: 65px;
      outline: none;
    }

    &__arrow-icon {
      transition: all .3s ease-in-out;
    }

    &__opened {
      transform: rotate(180deg);
      transform-origin: 50% 50%;
    }
  }
}
</style>