module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'waiting'
    }
  })

  Order.associate = models => {
    Order.belongsToMany(models.Pizza, {
      through: models.OrderLine,
      foreignKey: 'orderId'
    })
  }

  return Order
}
