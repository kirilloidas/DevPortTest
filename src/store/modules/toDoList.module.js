import { ToDoAPI } from "@/API"
import configParser from "@/utils/configParser"

export default {
    state: {
        todoArray: [],
        filter: {
            status: '',
            userId: '',
            title: ''
        }
    },
    actions: {
        getToDoArray({commit}, payload) {

        },
    },
    mutations: {
        todoArrayMutation(state, payload) {

        },
        todoFilterMutation(state, payload) {
            state.filter = configParser(state.filter, payload)
        },
    },
    getters: {
        getToDoArray: state => state.todoArray,
        getToDoFilter: state => state.filter
    }
}