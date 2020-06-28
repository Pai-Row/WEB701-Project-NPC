module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define('Bid', {
        amount: DataTypes.DECIMAL
    })

    Bid.associate = function(models) {
        Bid.belongsTo(models.Auction, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Bid
}
