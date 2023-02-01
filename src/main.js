import Vue from 'vue'
import App from './App.vue'
import lettersOnly from './directives/lettersOnly'
import numbersAndSymbolsForPhone from './directives/numbersAndSymbolsForPhone'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('letters-only', lettersOnly)
Vue.directive('numbers-and-symbols-for-phone', numbersAndSymbolsForPhone)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
