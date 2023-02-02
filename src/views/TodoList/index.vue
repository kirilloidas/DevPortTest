<template>
  <section class="to-do-page-container">
    <TopSection/>
    <ToDoFilters/>
    <ListTodo/>
  </section>
</template>
<script>
import ToDoFilters from './components/ToDoFilters.vue';
import TopSection from './components/TopSection.vue';
import ListTodo from './components/ListTodo.vue';
export default {
  name: 'TodoList',
  components: {
    ToDoFilters,
    TopSection,
    ListTodo
  }
}
</script>
<style lang="scss" scoped>
.to-do-page-container {
  padding: 20px
}
</style>