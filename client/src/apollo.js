import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: `http://192.168.0.154:4000/graphql`
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
