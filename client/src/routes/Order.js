import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useProducts from '../hooks/useProducts'

import Header from '../components/Header'
import PizzaCard from '../components/PizzaCard'

function Order(props) {
  const { pizzas, toppings } = useProducts()
  const [selectedToppings, setSelectedToppings] = useState([])

  const filteredPizzas = pizzas.filter(p =>
    selectedToppings.every(t => p.toppings.map(t => t.id).includes(t))
  )

  const toggleTopping = (id, e) => {
    const isSelected = e.target.checked
    setSelectedToppings(
      isSelected
        ? [...selectedToppings, id]
        : selectedToppings.filter(t => t !== id)
    )
  }

  return (
    <div>
      <Header />
      <div className="section" id="pizzaSelectionDescription">
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12">
              <p className="flow-text">Velg toppings, deretter pizza</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12">
              <h6>Velg pizzafyll for å se utvalget.</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            {toppings.map(t => (
              <div key={t.id} className="col s6 m4 l3">
                <label>
                  <input
                    onClick={e => toggleTopping(t.id, e)}
                    value={t.id}
                    className="filled-in"
                    type="checkbox"
                  />
                  <span>{t.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12">
              <p className="flow-text">Pizzaer med valgt pizzafyll:</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            {filteredPizzas.map(p => (
              <PizzaCard key={p.id} pizza={p} />
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12">
              <Link to="/cart" className="btn orange large">
                Gå til handlekurv
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
