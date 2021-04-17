import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, BasePages } from '../pages'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/dashboard' component={BasePages} />
    </Switch>
  </Router>
)
