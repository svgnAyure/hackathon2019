import gql from 'graphql-tag'

export default gql`
  {
    getPizzas {
      id
      name
      price
      toppings {
        id
        name
      }
    }
  }
`
