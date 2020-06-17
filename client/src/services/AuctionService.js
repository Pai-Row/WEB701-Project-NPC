import Api from '@/services/Api'

export default {
    index () {
        return Api().get('auction')
    }
}
// AutheticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })