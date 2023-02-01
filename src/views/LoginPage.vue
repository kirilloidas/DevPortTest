<template>
  <section class="login-page">
    <form class="form-container" @submit.prevent>
      <h2 class="form-container__title">description</h2>
      <div class="main-form-block">
        <CustomInput 
          class="main-form-block__input"
          label="description"
          placeholder="Username"
          v-model="userName"
          v-letters-only
        />
        <CustomInput 
          class="main-form-block__input"
          placeholder="Phone Number"
          v-model="phoneNumber"
          v-numbers-and-symbols-for-phone
        />
        <CustomButton
          class="main-form-block__button"
          @click.native="submit"
          text="Register"
          :class="{'not-active': isNotActiveBtn}"
        />
      </div>
    </form>
  </section>
</template>
<script>
import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';
export default {
  name: 'LoginPage',
  components: {
    CustomInput,
    CustomButton
  },
  data() {
    return {
      userName: '',
      phoneNumber: ''
    }
  },
  computed: {
    isNotActiveBtn() {
      return !this.userName.length || !this.phoneNumber.length
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('getUsers', {userName: this.userName, phoneNumber: this.phoneNumber})
      console.log(21312312)
    }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .form-container {
    width: 447px;
    background-color: var(--light-gray);

    &__title {
      padding: 15px 0;
      text-align: center;
    }

    .main-form-block {
      padding: 15px 25px 30px;

      &__input {
        margin-bottom: 20px;
      }

      &__button {
        margin-top: 5px;
      }
    }
  }
}
</style>