<template>
  <div id="app">
    <header class="page-header"></header>
    <main class="page-main">
      <ModalComponent/>
      <router-view/>
      <img 
        class="page-main__spinner"
        src="@/assets/img/spinner.png" 
        v-show="loading"
      />
    </main>
    <footer class="page-footer"></footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ModalComponent from './components/ModalComponent.vue';
export default {
  name: 'App', 
  components: {
    ModalComponent
  },
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>

<style lang="scss" src="@/assets/styles/variables.scss"></style>
<style lang="scss" src="@/assets/styles/global.scss"></style>
<style lang="scss" src="@/assets/styles/spinner.scss"></style>
