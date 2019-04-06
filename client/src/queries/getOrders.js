import gql from 'graphql-tag'

export default gql`
  {
    getOrders {
      id
      name
      phone
      status
      orderLines {
        pizza {
          name
          price
        }
        size
        amount
      }
    }
  }
`
