import axios from "axios"
import store from "../store/index"

export const Api = () => {
    const result = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com'
    })
    result.interceptors.request
        .use(
            (request) => {
                store.commit('setLoading', true)
                return request
            }
        )
    result.interceptors.response
        .use(
            (response) => {
                store.commit('setLoading', false)
                return response
            },
            (error) => {
                console.log(error)
                handleError()
                return Promise.reject(error)
            }
        )
    return result
}

export const handleError = () => {store.commit('setModalMsg', 'Something went wrong'); store.commit('setLoading', false)}
