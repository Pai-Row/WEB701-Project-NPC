const {Auction} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const auctions = await Auction.findAll({
                limit: 10
            })
            res.send(auctions)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the auction information'
            })
        }
    },
    
    async post (req, res) {
        try {
            const auction = await Auction.create(req,body)
            res.send(auction)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying create the auction'
            })
        }
    }
    
}