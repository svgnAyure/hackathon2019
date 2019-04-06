import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Order from './Order'
import Cart from './Cart'
import Login from './Login'
import Admin from './Admin'

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/order" exact component={Order} />
      <Route path="/login" exact component={Login} />
      <Route path="/admin" exact component={Admin} />
    </Switch>
  </BrowserRouter>
)

export default Router
