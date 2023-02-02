<template>
  <section class="filters-container">
    <DropdownList
      class="filters-container__drop-list"
      legend="Status"
      :list="statusList"
      :value="getToDoFilter.status"
      @setValue="value => setFilter('status', value)"
    />
    <DropdownList
      class="filters-container__drop-list"
      legend="User id"
      :list="getUserIdList"
      :value="getToDoFilter.userId"
      @firstOpen="() => firstOpenUserIdList('getUserId')"
      @setValue="value => setFilter('userId', value)"
    />
    <CustomInputWithFieldset
      legend="Title"
      placeholder="Title"
      :value="getToDoFilter.title"
      @input="value => setFilter('title', value)"
    />
    <CreateTask
      class="filters-container__create"
    />
  </section>
</template>
<script>
import DropdownList from '@/components/DropdownList.vue';
import CustomInputWithFieldset from '@/components/CustomInputWithFieldset.vue';
import CreateTask from './CreateTask.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ToDoFilters',
  components: {
    DropdownList,
    CustomInputWithFieldset,
    CreateTask
  },
  data() {
    return {
      statusList: ['All', 'Completed', 'Uncompleted', 'Favorites']
    }
  },
  computed: {
    ...mapGetters(['getToDoFilter', 'getUserIdArray']),
    getUserIdList() {
      return ['All', ...this.getUserIdArray]
    }
  },
  methods: {
    firstOpenUserIdList(actionName) {
      this.$store.dispatch(actionName)
    },
    setFilter(key, value) {
      this.$store.commit('todoPageMutation', 1)
      this.$store.commit('todoFilterMutation', {[key]: value})
      this.$store.commit('todoArrayMutation', [])
      this.$store.dispatch('getToDoArray')
    }
  }
}
</script>
<style lang="scss" scoped>
.filters-container {
  display: flex;
  align-items: flex-end;

  &__create {
    margin-left: 40px;
  }
}
</style>