import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    },

    login (credentials) {
        return Api().post('login', credentials)
    },

    update (credentials) {
        return Api().put('user', credentials)
    }
}


// AutheticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })