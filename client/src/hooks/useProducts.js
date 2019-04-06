import { useQuery } from 'react-apollo-hooks'

import getPizzasQuery from '../queries/getPizzas'
import getToppingsQuery from '../queries/getToppings'

function useProducts() {
  const { loading: loadingPizzas, data: pizzas } = useQuery(getPizzasQuery)
  const { loading: loadingToppings, data: toppings } = useQuery(getToppingsQuery)
  const loading = loadingPizzas || loadingToppings

  return {
    loading,
    pizzas: loading ? [] : pizzas.getPizzas,
    toppings: loading ? [] : toppings.getToppings
  }
}

export default useProducts
