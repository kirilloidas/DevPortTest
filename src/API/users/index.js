import { Api } from ".."

export default {
    getUsers(obj) {
        return Api().get(`/users?username=${obj.userName}&phone=${obj.phoneNumber}`)
    }
}