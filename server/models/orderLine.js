module.exports = (sequelize, DataTypes) => {
  const OrderLine = sequelize.define('orderLine', {
    size: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.INTEGER
    }
  })

  return OrderLine
}
