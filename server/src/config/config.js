const User = require("../models/User");

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'WEB701ProjectNPC',
        user: process.env.DB_USER || 'WEB701ProjectNPC',
        password: process.env.DB_PASS || 'WEB701ProjectNPC',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './WEB701ProjectNPC.sqlite'
        }
    }
}
