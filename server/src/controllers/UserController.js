const {User} = require('../models')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = {
    async update (req, res) {
        try {
            const emailExists = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (emailExists) {
                res.status(400).send({
                    error: 'This email is already in use'
                })
            } else {
                let originalPassword = req.body.password
    
                const SALT_FACTOR = 8
                await bcrypt
                .genSaltAsync(SALT_FACTOR)
                .then(salt => bcrypt.hashAsync(originalPassword, salt, null))
                .then(hash => {
                    req.body.password = hash
                })
    
                const user = await User.update(
                    req.body,
                    { 
                        where: { 
                            id: req.body.id 
                        },
                    });
                res.send(user)
            }
        } catch (err) {
            res.status(400).send({
                error: 'Couldnt update user details.'   
            })
        }
    }
}