<template>
  <ul class="todo-list" v-infinite-scrolling="scrollHandler">
    <li 
      class="todo-list__item"
      v-for="(task, index) of getList"
      :key="task.id"
    >
      <ul class="secondary-list">
        <li class="secondary-list__item userId">{{ task.userId }}</li>
        <li class="secondary-list__item id">{{ task.id }}</li>
        <li class="secondary-list__item title">{{ task.title }}</li>
        <li class="secondary-list__item completed">{{ task.completed }}</li>
        <li class="secondary-list__item btn" v-show="index !== 0">
          <CustomButton @click.native="addToFavorites(task.id)">Add</CustomButton>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex';
import CustomButton from '@/components/CustomButton.vue';
import favoritesTask from '@/utils/favoritesTasks'

export default {
  name: 'ListTodo',
  components: {
    CustomButton
  },
  computed: {
    ...mapGetters(['getToDoArray']),
    getList() {
      return [{userId: 'userId', id: 'id', title: 'title', completed: 'completed' }, ...this.getToDoArray]
    }
  },
  methods: {
    scrollHandler() {
      this.$store.dispatch('getToDoArray')
    },
    addToFavorites(id) {
      favoritesTask.addId(id)
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
  overflow: overlay;

  &__item {
    padding: 10px;
    border: var(--light-gray-border);
    .secondary-list {
      display: flex;
      align-items: center;
      padding: 0 20px;
      &__item {
        color: var(--white);
        display: block;

        &.id, &.userId, &.completed{
          width: 7%;
        }
        &.title {
          width: 65%;
        }
        &.btn {
          display: flex;
          justify-content: center;
          padding-left: 20px;
          width: 14%;
        }
      }
    }
  }
}
</style>