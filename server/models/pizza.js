module.exports = (sequelize, DataTypes) => {
  const Pizza = sequelize.define('pizza', {
    name: {
      type: DataTypes.STRING
    },
    basePrice: {
      type: DataTypes.INTEGER
    }
  })

  Pizza.associate = models => {
    Pizza.belongsToMany(models.Order, {
      through: models.OrderLine,
      foreignKey: 'pizzaId'
    })
    Pizza.belongsToMany(models.Topping, {
      through: models.Recipe,
      foreignKey: 'pizzaId'
    })
  }

  return Pizza
}
