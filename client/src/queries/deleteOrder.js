import gql from 'graphql-tag'

export default gql`
  mutation($id: Int!) {
    deleteOrder(id: $id)
  }
`
