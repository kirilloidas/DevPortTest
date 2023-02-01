export default {
    state: {
        loading: false,
        modalMsg: ''
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setModalMsg(state, payload) {
            state.modalMsg = payload
        }
    },
    getters: {
        loading: state => state.loading,
        getModalMsg: state => state.modalMsg
    }
}