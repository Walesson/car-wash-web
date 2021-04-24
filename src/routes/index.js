import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register, BasePages } from '../pages'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/nova-conta' component={Register} />
      <Route path='/dashboard' component={BasePages} />
    </Switch>
  </Router>
)
