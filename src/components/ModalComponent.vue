<template>
  <section class="modal-wrap" v-show="getModalMsg">
    <div class="modal-container">
      <h2 class="modal-container__text">{{ getModalMsg }}</h2>
      <button class="modal_container__close-btn" @click="close">Close</button>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ModalComponent',
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

    &__close-btn {
      margin-top: 10px;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: lightskyblue;
    }
  }
}

</style>