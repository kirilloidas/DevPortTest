import { ToDoAPI } from "@/API"
import { concatToDoArray } from "@/utils/concatToDoArray"
import configParser from "@/utils/configParser"
import { localFilter, apiFilter } from "@/utils/filtersParser"

export default {
    state: {
        todoArray: [],
        createdTasks: [],
        filter: {
            status: 'All',
            userId: 'All',
            title: ''
        },
        todoPage: 1
    },
    actions: {
        getToDoArray({commit, state}) {
            if(this.getters.loading) return
            return ToDoAPI.getTasks(apiFilter({...state.filter, _page: state.todoPage}))
                .then(({data}) => {
                    commit('todoPageMutation', ++state.todoPage)
                    commit('todoArrayMutation', concatToDoArray(state, data))
                })
        },
        createTask({commit, state}, payload) {
            return ToDoAPI.createTask(payload)
                .then(({data}) => {
                    commit('createdTasksMutation', data)
                    commit('todoArrayMutation', concatToDoArray(state, [data]))
                })
        }
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
        },
        createdTasksMutation(state, payload) {
            state.createdTasks = [...state.createdTasks, payload] 
        }
    },
    getters: {
        getToDoArray: state => state.todoArray,
        getToDoFilter: state => state.filter,
        getToDoPage: state => state.todoPage
    }
}