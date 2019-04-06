import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'

import Header from '../components/Header'
import useOrders from '../hooks/useOrders'
import updateOrderMutation from '../queries/updateOrder'
import deleteOrderMutation from '../queries/deleteOrder'

function Admin(props) {
  const { loading, refetch, pickup, inProgress, received, complete } = useOrders()
  const updateOrder = useMutation(updateOrderMutation)
  const deleteOrder = useMutation(deleteOrderMutation)

  const handleUpdate = async (id, status) => {
    await updateOrder({ variables: { id, status } })
    refetch()
  }

  const handleDelete = async id => {
    await deleteOrder({ variables: { id } })
    refetch()
  }

  const sumOrder = arr => {
    const price = arr.orderLines
      .map(l => {
        const sizeToPrice = {
          small: 0.75,
          medium: 1,
          large: 1.25
        }
        return l.pizza.price * sizeToPrice[l.size] * l.amount
      })
      .reduce((a, b) => a + b, 0)
    return Math.round(price)
  }

  return loading ? (
    'Fetching data'
  ) : (
    <div>
      <Header />
      <div className="section" id="pizzaSelectionDescription">
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12">
              <p className="flow-text">Administrer dine bestillinger </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="row">
          <div className="col s12 m6 admin-list">
            <h4>Mottatt</h4>
            <table>
              <tbody>
                <tr>
                  <th>Navn</th>
                  <th>Telefon</th>
                  <th> Sum </th>
                  <th> Handling </th>
                </tr>
                {received.map(order => (
                  <tr key={order.id}>
                    <td>{order.name} </td>
                    <td>{order.phone} </td>
                    <td>kr {sumOrder(order)},-</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(order.id, 'inProgress')}
                        className="btn green"
                        id="collectedBtn"
                      >
                        Start
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="btn red"
                        id="deleteBtn"
                      >
                        Slett
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col s12 m6 admin-list">
            <h4>In progress</h4>
            <table>
              <tbody>
                <tr>
                  <th>Navn</th>
                  <th>Telefon</th>
                  <th> Sum </th>
                  <th> Handling </th>
                </tr>
                {inProgress.map(order => (
                  <tr key={order.id}>
                    <td>{order.name} </td>
                    <td>{order.phone} </td>
                    <td>kr {sumOrder(order)},-</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(order.id, 'pickup')}
                        className="btn green"
                        id="collectedBtn"
                      >
                        pickup
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="btn red"
                        id="deleteBtn"
                      >
                        Slett
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col s12 m6 admin-list">
            <h4>Pickup</h4>
            <table>
              <tbody>
                <tr>
                  <th>Navn</th>
                  <th>Telefon</th>
                  <th> Sum </th>
                  <th> Handling </th>
                </tr>
                {pickup.map((order, index) => (
                  <tr key={order.id}>
                    <td>{order.name} </td>
                    <td>{order.phone} </td>
                    <td>kr {sumOrder(order)},-</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(order.id, 'complete')}
                        className="btn green"
                        id="collectedBtn"
                      >
                        Hentet
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="btn red"
                        id="deleteBtn"
                      >
                        Slett
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col s12 m6 admin-list">
            <h4>Fullført</h4>
            <table>
              <tbody>
                <tr>
                  <th>Navn</th>
                  <th>Telefon</th>
                  <th>Sum</th>
                  <th>Handling</th>
                </tr>
                {complete.map(order => (
                  <tr key={order.id}>
                    <td>{order.name} </td>
                    <td>{order.phone} </td>
                    <td>kr {sumOrder(order)},-</td>
                    <td>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="btn red"
                        id="deleteBtn"
                      >
                        Slett
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
