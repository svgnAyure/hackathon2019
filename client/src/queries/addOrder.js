import gql from 'graphql-tag'

export default gql`
  mutation($name: String!, $email: String!, $phone: String!, $pizzas: [PizzaInput!]!) {
    addOrder(customer: { name: $name, email: $email, phone: $phone }, pizzas: $pizzas)
  }
`
