import Api from '@/services/Api'
import Auction from '../../../server/src/models/Auction'

export default {
    index () {
        return Api().get('auctions')
    },

    show(auctionId) {
        return Api().get(`auctions/${auctionId}`)
    },

    post (auction) {
        return Api().post('auctions', auction)
    }
}
// AutheticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })