import React, { useState } from 'react'

import storage from '../utils/storage'

function PizzaCard({ pizza }) {
  const [canClick, setCanClick] = useState(true)
  const [size, setSize] = useState('medium')
  const [amount, setAmount] = useState(1)

  const sizeToPrice = {
    small: 0.75,
    medium: 1,
    large: 1.25
  }

  const price = Math.round(pizza.price * amount * sizeToPrice[size])

  const handleAddToCart = () => {
    const pizzaToAdd = { pizza, size, amount, price }
    storage.add(pizzaToAdd)

    setCanClick(false)
    setTimeout(() => setCanClick(true), 1000)
  }

  return (
    <div key={pizza.id} className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img alt="" src={`images/pizza_images/pizza${pizza.id}.jpg`} />
          <span className="card-title">{pizza.name}</span>
          <button
            disabled={!canClick}
            onClick={handleAddToCart}
            className="btn-floating halfway-fab waves-effect waves-light green accent-4"
          >
            <i className="material-icons">{canClick ? 'shopping_cart' : 'check'}</i>
          </button>
        </div>
        <div className="card-content" id="pizzaCards">
          <div className="col s12">
            <label>Inneholder</label>
          </div>
          <div className="topping-list col s12">
            {pizza.toppings.map(t => (
              <div key={t.id}>{t.name}</div>
            ))}
          </div>
          <div className="input-field">
            <div className="col s12 m6">
              <label>Antall</label>
              <input
                type="number"
                min={1}
                onChange={e => setAmount(e.target.value)}
                defaultValue={amount}
                placeholder="Antall"
              />
            </div>
            <div className="col s12 m6">
              <label>Størrelse</label>
              <select
                onChange={e => setSize(e.target.value)}
                defaultValue={size}
                className="browser-default"
              >
                <option value="small">Liten</option>
                <option value="medium">Medium</option>
                <option value="large">Stor</option>
              </select>
            </div>
            <div className="col s12">
              <label>Pris</label>
              <h5>kr {price},-</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard
