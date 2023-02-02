<template>
  <ul class="todo-list" v-infinite-scrolling="scrollHandler">
    <li 
      class="todo-list__item"
      v-for="task of getList"
      :key="task.id"
    >
      <ul class="secondary-list">
        <li 
          class="secondary-list__item"
          :class="[item]"
          v-for="item of Object.keys(task)"
          :key="item"
        >
          {{ task[item] }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListTodo',
  computed: {
    ...mapGetters(['getToDoArray']),
    getList() {
      return [{userId: 'userId', id: 'id', title: 'title', completed: 'completed' }, ...this.getToDoArray]
    }
  },
  methods: {
    scrollHandler() {

    }
  }
}
</script>
<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-height: 400px;

  &__item {
    padding: 10px;
    border: var(--light-gray-border);
    .secondary-list {
      display: flex;
      align-items: center;
      padding: 0 20px;
      &__item {
        color: var(--white);

        &.id, &.userId, &.completed {
          width: 10%;
        }
        &.title {
          width: 70%;
        }
      }
    }
  }
}
</style>