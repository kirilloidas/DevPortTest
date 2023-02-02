import queryParametersParser from "@/utils/queryParametersParser"
import { Api } from "../API"

export default {
    getTasks(config) {
        return Api().get(`/todos?${queryParametersParser(config)}`)
    }
}