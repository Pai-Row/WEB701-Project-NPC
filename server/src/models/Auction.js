module.exports = (sequelize, DataTypes) => {
    const Auction = sequelize.define('Auction', {
        photographer: DataTypes.STRING,
        title: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        endDate: DataTypes.STRING,
        photograph: DataTypes.STRING,
        description: DataTypes.TEXT
   
    })

    return Auction
}
