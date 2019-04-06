const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../data/database.sqlite'
})

const models = {
  Order: sequelize.import('./order'),
  OrderLine: sequelize.import('./orderLine'),
  Pizza: sequelize.import('./pizza'),
  Topping: sequelize.import('./topping'),
  Recipe: sequelize.import('./recipe'),
  Admin: sequelize.import('./admin')
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
