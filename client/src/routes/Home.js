import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

function App(props) {
  return (
    <div>
      <Header />
      <div className="section" id="section1">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Enkelt, godt og billig</h4>
              <p className="flow-text" id="section1text">
                Å bestille pizza har aldri vært enklere!
              </p>

              <Link to="/order">
                <button className="btn large orange">
                  <i className="material-icons left">local_pizza</i>
                  Kom i gang!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="textsection">
        {' '}
      </div>
    </div>
  )
}

export default App
