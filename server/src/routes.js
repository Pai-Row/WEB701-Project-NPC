const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuctionsController = require('./controllers/AuctionsController')
const UserController = require('./controllers/UserController')
const BidController = require('./controllers/BidController')


module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)

    app.put('/user',
        UserController.update)

    app.get('/auctions',
        AuctionsController.index)

    app.get('/auctions/:auctionId',
        AuctionsController.show)

    app.post('/auctions',
        AuctionsController.post)

    app.get('/bid',
        BidController.index)

    app.post('/bid',
        BidController.post)
}