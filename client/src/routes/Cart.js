import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import useRouter from '../hooks/useRouter'
import storage from '../utils/storage'
import addOrderMutation from '../queries/addOrder'

function Cart(props) {
  const [items, setItems] = useState(storage.get())
  const { history } = useRouter()
  const addOrder = useMutation(addOrderMutation)

  const handleDelete = idx => {
    setItems(storage.remove(idx))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const phone = e.target[2].value

    await addOrder({
      variables: {
        name,
        email,
        phone,
        pizzas: items.map(i => ({
          id: i.pizza.id,
          size: i.size,
          amount: Number(i.amount)
        }))
      }
    })
    setItems(storage.clear())
    history.push('/order')
  }

  return (
    <>
      <Header />
      <nav id="navbar" className="nav-home blue">
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12">
              <Link to="/" className="btn green" id="navBtn1">
                Gå til start
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="section">
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12">
              <table>
                <tbody>
                  <tr>
                    <th>Ant.</th>
                    <th>Pizza</th>
                    <th>Sum</th>
                    <th />
                  </tr>

                  {items.map((p, i) => (
                    <tr key={i}>
                      <td>{p.amount}</td>
                      <td>{p.pizza.name}</td>
                      <td>{p.price},-</td>
                      <td>
                        <div onClick={() => handleDelete(i)}>
                          <button className="btn small">
                            <i className="material-icons">clear</i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container valign-wrapper">
          <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" className="validate" />
                  <label htmlFor="first_name">Navn</label>
                </div>
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Epost</label>
                </div>
                <div className="input-field col s12">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Telefon</label>
                </div>
              </div>
              <button className="btn large orange" disabled={!items.length}>
                Lagre ordre
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
