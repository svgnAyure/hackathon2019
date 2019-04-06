import gql from 'graphql-tag'

export default gql`
  mutation($id: Int!, $status: String!) {
    updateOrder(id: $id, status: $status)
  }
`
