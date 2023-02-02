import {queryParametersParser} from "@/utils/queryParametersParser"
import { Api } from "../API"

export default {
    getUsers(config = {userName: '', phoneNumber: ''}) {
        return Api().get(`/users?${queryParametersParser(config)}`)
    }
}