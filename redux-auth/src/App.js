import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'
import NotFound from './NotFound'
import NavigationBar from './NavigationBar'
import requireAuth from './requireAuth'

export default class App extends Component {
  render(){
    return(
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/welcome' component={requireAuth(Welcome)} />
              <Route path='*' component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>)
  }
}
