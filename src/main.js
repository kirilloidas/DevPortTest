import Vue from 'vue'
import App from './App.vue'
import clickOutSide from './directives/clickOutSide'
import infiniteScrolling from './directives/infiniteScrolling'
import lettersOnly from './directives/lettersOnly'
import numbersAndSymbolsForPhone from './directives/numbersAndSymbolsForPhone'
import numericOnly from './directives/numericOnly'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('letters-only', lettersOnly)
Vue.directive('numbers-and-symbols-for-phone', numbersAndSymbolsForPhone)
Vue.directive('click-outside', clickOutSide)
Vue.directive('infinite-scrolling', infiniteScrolling)
Vue.directive('numeric-only', numericOnly)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
