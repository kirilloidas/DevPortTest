<template>
  <section class="top-section">
    <ul class="top-section__list">
      <li 
        class="top-section__item"
        v-for="item of fieldsToShow"
        :key="item"
      >
        <InfoBlock
          :title="item"
          :value="getCurrentUser[item]"
        />
      </li>
    </ul>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
import InfoBlock from '@/components/InfoBlock.vue';

export default {
  name: 'TopSection',
  components: {
    InfoBlock
  },
  data() {
    return {
      fieldsToShow: ['name', 'username', 'email', 'phone']
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  }
}
</script>
<style lang="scss" scoped>
.top-section {
  margin-bottom: 30px;
  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
}
</style>