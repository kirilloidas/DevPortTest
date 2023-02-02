<template>
  <fieldset class="fieldset-container" v-click-outside="hide">
    <legend class="fieldset-container__legend">{{ legend }}</legend>
    <div class="label-container" @click="toggleOpen">
      <input class="label-container__input ellipsis" :value="value" placeholder="Select" readonly/>
      <img class="label-container__arrow-icon" src="@/assets/img/arrow.svg" alt="arrow" />
    </div>
    <ul class="dropdown-list" v-show="isOpened">
      <li 
        class="dropdown-list__item" 
        v-for="item of list" 
        :key="item"
        :class="{choosed: item === value}"
        @click="clickHandler(item)"
      >{{ item }}</li>
    </ul>
  </fieldset>
</template>
<script>
import inputMixin from '@/mixins/input.mixin'
export default {
  name: 'DropdownInput',
  mixins: [inputMixin],
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    hide() {
      this.isOpened = false
    },
    clickHandler(item) {
      this.setValue(item)
      this.isOpened = false
    },
    firstOpen() {
      this.$emit('firstOpen')
    },
    toggleOpen() {
      if(!this.isOpened && !this.list.filter(el => el !== 'All').length) this.firstOpen()
      this.isOpened = !this.isOpened
    }
  }
}
</script>
<style lang="scss" scoped src="@/assets/styles/fieldset-styles.scss"></style>
<style lang="scss" scoped>
.fieldset-container {
  position: relative;
  padding: 0;

  &__legend {
    margin-left: 14.5px;
  }
  .label-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 14.5px 10px 16px;
    cursor: pointer;

    &__input {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      border: none;
      width: 100%;
      outline: none;
      cursor: pointer;
    }

    &__arrow-icon {
      transition: all .3s ease-in-out;
    }

    &__opened {
      transform: rotate(180deg);
      transform-origin: 50% 50%;
    }
  }
  .dropdown-list {
    position: absolute;
    left: 0;
    top: 40px;
    border-radius: 8px;
    background: var(--white);
    border: var(--light-gray-border);
    width: 100%;
    max-height: 100px;
    overflow: scroll;

    &__item {
      cursor: pointer;
      transition: all .3s ease-in-out;
      padding: 10px;

      &:hover{
        background: var(--light-gray-disabled);
      }
      &.choosed {
      background: var(--green);
    }
    }
  }
}
</style>