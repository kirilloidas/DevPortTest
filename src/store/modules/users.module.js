import {UserAPI} from '@/API'
import router from '@/router'

export default {
    state: {
        users: []
    },
    actions: {
        getUsers({commit}, payload) {
            UserAPI.getUsers(payload)
                .then(({data}) => {
                    if(data.length) {
                        router.push('todo')
                        return commit('usersMutation', res.data)
                    }
                    commit('setModalMsg', 'login error')
                })
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