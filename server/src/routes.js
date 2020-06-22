const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuctionsController = require('./controllers/AuctionsController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)

    app.get('/auctions',
    AuctionsController.index)

    app.get('/auctions/:auctionId',
    AuctionsController.show)

    app.post('/auctions',
    AuctionsController.post)
}