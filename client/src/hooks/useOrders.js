import { useQuery } from 'react-apollo-hooks'

import getOrdersQuery from '../queries/getOrders'

function useOrders() {
  const { loading, data, refetch } = useQuery(getOrdersQuery, {
    pollInterval: 10000,
    fetchPolicy: 'network-only'
  })

  const orders = loading
    ? []
    : data.getOrders.reduce(
        (acc, cur) => {
          return {
            received: cur.status === 'waiting' ? [...acc.received, cur] : acc.received,
            inProgress: cur.status === 'inProgress' ? [...acc.inProgress, cur] : acc.inProgress,
            pickup: cur.status === 'pickup' ? [...acc.pickup, cur] : acc.pickup,
            complete: cur.status === 'complete' ? [...acc.complete, cur] : acc.complete
          }
        },
        {
          received: [],
          inProgress: [],
          pickup: [],
          complete: []
        }
      )

  return {
    loading,
    refetch,
    ...orders
  }
}

export default useOrders
