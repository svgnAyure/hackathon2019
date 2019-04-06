const { GraphQLServer } = require('graphql-yoga')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const models = require('./models')

const context = ({ request, response }) => ({
  models
})

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context
})

const startServer = async () => {
  await models.sequelize.sync({
    force: true
  })

  await models.Topping.bulkCreate([
    { name: 'Ost' },
    { name: 'Tomatsaus' },
    { name: 'Ananas' },
    { name: 'Skinke' },
    { name: 'Pepperoni' },
    { name: 'Bacon' },
    { name: 'Nachos' }
  ])

  await models.Pizza.bulkCreate([
    { name: "Gamers' Choice", basePrice: 139 },
    { name: 'Hackathonfavoritten', basePrice: 159 },
    { name: 'Bouvet Speciale', basePrice: 149 },
    { name: 'Minimalisten', basePrice: 99 },
    { name: 'Vegetar', basePrice: 139 },
    { name: 'Antivegetar', basePrice: 149 }
  ])

  await models.Recipe.bulkCreate([
    { pizzaId: 1, toppingId: 1 },
    { pizzaId: 1, toppingId: 2 },
    { pizzaId: 1, toppingId: 5 },

    { pizzaId: 2, toppingId: 1 },
    { pizzaId: 2, toppingId: 2 },
    { pizzaId: 2, toppingId: 3 },
    { pizzaId: 2, toppingId: 4 },
    { pizzaId: 2, toppingId: 5 },
    { pizzaId: 2, toppingId: 6 },
    { pizzaId: 2, toppingId: 7 },

    { pizzaId: 3, toppingId: 1 },
    { pizzaId: 3, toppingId: 2 },
    { pizzaId: 3, toppingId: 5 },
    { pizzaId: 3, toppingId: 7 },

    { pizzaId: 4, toppingId: 2 },

    { pizzaId: 5, toppingId: 1 },
    { pizzaId: 5, toppingId: 2 },
    { pizzaId: 5, toppingId: 3 },

    { pizzaId: 6, toppingId: 1 },
    { pizzaId: 6, toppingId: 4 },
    { pizzaId: 6, toppingId: 5 },
    { pizzaId: 6, toppingId: 6 }
  ])

  await models.Order.bulkCreate([
    { name: 'Kristian', phone: '12345678', email: 'asdf', status: 'waiting' }
  ])
  await models.OrderLine.bulkCreate([
    { orderId: 1, pizzaId: 1, size: 'medium', amount: 1 },
    { orderId: 1, pizzaId: 2, size: 'medium', amount: 2 }
  ])

  await server.start({
    port: 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions'
  })

  console.log('Server running...')
}

startServer()
