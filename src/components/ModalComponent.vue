<template>
  <section class="modal-wrap" v-show="getModalMsg">
    <div class="modal-container">
      <h2 class="modal-container__text">{{ getModalMsg }}</h2>
      <CustomButton @click.native="close">Close</CustomButton>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import CustomButton from './CustomButton.vue';
export default {
  name: 'ModalComponent',
  components: {
    CustomButton
  },
  computed: {
    ...mapGetters(['getModalMsg'])
  },
  methods: {
    close() {
      this.$store.commit('setModalMsg', '')
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-container {
    padding: 30px 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
    border-radius: 15px;

    &__text {
      margin-bottom: 10px;
    }
  }
}

</style>