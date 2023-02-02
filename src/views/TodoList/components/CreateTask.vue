<template>
   <section class="create-task-container">
    <span class="create-task-container__title">Create ToDo</span>
    <div class="create-task-container__inputs">
      <CustomInputWithFieldset
        legend="User ID"
        v-model="userId"
        v-numeric-only
      />
      <CustomInputWithFieldset
        legend="Title"
        v-model="title"
      />
      <CustomButton 
        class="create-task-container__btn"
        @click.native="addTask()"
      >
        Add
      </CustomButton>
    </div>
   </section> 
</template>
<script>
import CustomInputWithFieldset from '@/components/CustomInputWithFieldset.vue';
import CustomButton from '@/components/CustomButton.vue';
export default {
  name: 'CreateTask',
  components: {
    CustomInputWithFieldset,
    CustomButton
  },
  data() {
    return {
      userId: '',
      title: ''
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch('createTask', {userId: +this.userId, title: this.title})
        .then(() => {
          this.userId = ''
          this.title = ''
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.create-task-container {
  &__title {
    margin-bottom: 5px;
  }
  &__inputs {
    display: flex;
    align-items: flex-end;
  }
  &__btn {
    margin-left: 5px;
    width: 50px;
  }
}
</style>