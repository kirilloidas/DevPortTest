<template>
  <section class="to-do-page-container">
    <TopSection/>
    <ToDoFilters/>
  </section>
</template>
<script>
import ToDoFilters from './components/ToDoFilters.vue';
import TopSection from './components/TopSection.vue';
export default {
  name: 'TodoList',
  components: {
    ToDoFilters,
    TopSection
  }
}
</script>
<style lang="scss" scoped>
.to-do-page-container {
  padding: 20px
}
</style>