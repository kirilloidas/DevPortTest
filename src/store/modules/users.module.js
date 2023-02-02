import {UserAPI} from '@/API'
import router from '@/router'

export default {
    state: {
        currentUser: {},
        userIdArray: [],
    },
    actions: {
        getUsers({commit}, payload) {
            UserAPI.getUsers(payload)
                .then(({data}) => {
                    if(data.length) {
                        router.push('todo')
                        return commit('userMutation', data[0])
                    }
                    commit('setModalMsg', 'login error')
                })
        },
        getUserId({commit}) {
            UserAPI.getUsers()
                .then(({data}) => {
                    commit('userIdArrayMutation', data)
                })
        }
    },
    mutations: {
        userMutation(state, payload) {
            state.currentUser = payload
        },
        userIdArrayMutation(state, payload) {
            state.userIdArray = payload.map(el => el.id)
        },
    },
    getters: {
        getCurrentUser: state => state.currentUser,
        getUserIdArray: state => state.userIdArray,
    }
}