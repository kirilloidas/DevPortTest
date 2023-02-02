import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './modules/users.module'
import GlobalModule from './modules/global.module'
import toDoListModule from './modules/toDoList.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserModule,
    GlobalModule,
    toDoListModule
  }
})
