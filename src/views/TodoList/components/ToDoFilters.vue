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
      :list="getUserIdArray"
      :value="getToDoFilter.userId"
      @firstOpen="() => firstOpenUserIdList('getUserIdArray')"
      @setValue="value => setFilter('userId', value)"
    />
    <CustomInputWithFieldset
      legend="Title"
      placeholder="Title"
      :value="getToDoFilter.title"
      @input="value => setFilter('title', value)"
    />
  </section>
</template>
<script>
import DropdownList from '@/components/DropdownList.vue';
import CustomInputWithFieldset from '@/components/CustomInputWithFieldset.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ToDoFilters',
  components: {
    DropdownList,
    CustomInputWithFieldset
  },
  data() {
    return {
      statusList: ['All', 'Completed', 'Uncompleted', 'Favorites']
    }
  },
  computed: {
    ...mapGetters(['getToDoFilter', 'getUserIdArray'])
  },
  methods: {
    firstOpenUserIdList(actionName) {
      this.$store.dispatch(actionName)
    },
    setFilter(key, value) {
      this.$store.commit('todoFilterMutation', {[key]: value})
    }
  }
}
</script>
<style lang="scss" scoped>
.filters-container {
  display: flex;
}
</style>