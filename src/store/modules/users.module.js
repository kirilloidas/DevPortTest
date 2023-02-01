import {UserAPI} from '@/API'

export default {
    state: {
        users: []
    },
    actions: {
        getUsers({commit}, payload) {
            UserAPI.getUsers(payload)
                .then(res => commit('usersMutation', res.data))
        }
    },
    mutations: {
        usersMutation(state, payload) {
            state.users = payload
        }
    },
    getters: {
        getUsers: state => state.users
    }
}