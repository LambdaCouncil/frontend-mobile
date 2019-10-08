import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { NativeRouter, Route, Switch } from "react-router-native"

import reducer from './reducer'
import { View, Text } from 'react-native'

import Register from './components/Register'
import Login from './components/LogIn'
import ProtectedRoutes from "./ProtectedRoutes"

const store = createStore(reducer, applyMiddleware(thunk))

export default _ => (
  <Provider store={store}>
    <NativeRouter>
      <Switch>
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route exact path="/register" render={props => <Register {...props} />} />

        <ProtectedRoute component={ProtectedRoutes} />
      </Switch>
    </NativeRouter>
  </Provider>
)

const isAuthed = _ => true;

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) =>
    isAuthed()
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  }
  />
)