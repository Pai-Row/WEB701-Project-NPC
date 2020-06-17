const {Auction} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const Auctions = await Auction.findAll({
                limit: 10
            })
            res.send(Auctions)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the auction information'
            })
        }
    },
    
    async post (req, res) {
        try {
            const Auction = await Auction.create(req,body)
            res.send(Auction)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying create the auction'
            })
        }
    }
    
}