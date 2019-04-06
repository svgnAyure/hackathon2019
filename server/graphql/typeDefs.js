const gql = require('graphql-tag')

module.exports = gql`
  type Order {
    id: Int!
    name: String!
    phone: String!
    status: String!
    orderLines: [OrderLine!]!
  }

  type OrderLine {
    pizza: Pizza!
    size: String!
    amount: Int!
  }

  type Pizza {
    id: Int!
    name: String!
    price: Int!
    toppings: [Topping!]!
  }

  type Topping {
    id: Int!
    name: String!
  }

  input PersonInput {
    name: String!
    email: String!
    phone: String!
  }

  input PizzaInput {
    id: Int!
    size: String!
    amount: Int!
  }

  type Query {
    getOrders: [Order!]!
    getPizzas: [Pizza!]!
    getToppings: [Topping!]!
  }

  type Mutation {
    addOrder(customer: PersonInput!, pizzas: [PizzaInput!]!): Boolean!
    updateOrder(id: Int!, status: String): Boolean!
    deleteOrder(id: Int!): Boolean!
  }
`
