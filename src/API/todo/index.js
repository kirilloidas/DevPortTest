import { Api } from "../API"

export default {
    getArrayOfUserId(page) {
        return Api().get(`/todos?_page=${page}`)
    }
}