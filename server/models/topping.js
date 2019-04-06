module.exports = (sequelize, DataTypes) => {
  const Topping = sequelize.define('topping', {
    name: {
      type: DataTypes.STRING
    }
  })

  Topping.associate = models => {
    Topping.belongsToMany(models.Pizza, {
      through: models.Recipe,
      foreignKey: 'toppingId'
    })
  }

  return Topping
}
