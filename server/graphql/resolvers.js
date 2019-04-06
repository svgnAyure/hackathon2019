module.exports = {
  Order: {
    orderLines: async (order, _, { models }) => {
      const result = await models.Order.findOne({
        where: { id: order.id },
        include: models.Pizza
      })

      return result.pizzas.map(p => ({
        pizza: { id: p.id, name: p.name, basePrice: p.basePrice },
        size: p.orderLine.size,
        amount: p.orderLine.amount
      }))
    }
  },

  Pizza: {
    price: pizza => pizza.basePrice,
    toppings: async (pizza, _, { models }) =>
      await models.Topping.findAll({
        include: {
          model: models.Pizza,
          where: { id: pizza.id }
        }
      })
  },

  Query: {
    getOrders: async (_, __, { models }) => await models.Order.findAll({ raw: true }),
    getPizzas: async (_, __, { models }) => await models.Pizza.findAll({ raw: true }),
    getToppings: async (_, __, { models }) => await models.Topping.findAll({ raw: true })
  },

  Mutation: {
    addOrder: async (_, { customer, pizzas }, { models }) => {
      const order = await models.sequelize.transaction(async transaction => {
        const order = await models.Order.create({ ...customer }, { transaction })

        await models.OrderLine.bulkCreate(
          pizzas.map(p => ({
            orderId: order.id,
            pizzaId: p.id,
            size: p.size,
            amount: p.amount
          })),
          { transaction }
        )

        return order
      })

      return true
    },

    updateOrder: async (_, { id, status }, { models }) => {
      await models.Order.update({ status }, { where: { id } })
      return true
    },

    deleteOrder: async (_, { id }, { models }) => {
      await models.Order.destroy({ where: { id } })
      return true
    }
  }
}
