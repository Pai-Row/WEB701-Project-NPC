const {Bid} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const bid = await Bid.findAll({
                where: {
                    AuctionId: req.body.AuctionId
                }
            })
            res.send(bid)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the bid'
            })
        }
    },

    async post (req, res) {
        try {
            const bid = await Bid.create(req.body)
            res.send(bid)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the bid'
            })
        }
    }
}