import { ToDoAPI } from "@/API"
import configParser from "@/utils/configParser"

export default {
    state: {
        todoArray: [],
        filter: {
            status: '',
            userId: '',
            title: ''
        },
        todoPage: 1
    },
    actions: {
        getToDoArray({commit, state}) {
            console.log(21312312312)
            ToDoAPI.getTasks({...state.filter, _page: state.todoPage})
                .then(({data}) => {
                    commit('todoPageMutation', ++state.todoPage)
                    commit('todoArrayMutation', state.todoArray.concat(data))
                })
        },
    },
    mutations: {
        todoArrayMutation(state, payload) {
            state.todoArray = payload
        },
        todoFilterMutation(state, payload) {
            state.filter = configParser(state.filter, payload)
        },
        todoPageMutation(state, payload) {
            state.todoPage = payload
        }
    },
    getters: {
        getToDoArray: state => state.todoArray,
        getToDoFilter: state => state.filter,
        getToDoPage: state => state.todoPage
    }
}