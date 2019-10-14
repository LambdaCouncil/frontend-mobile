import React, { useEffect } from 'react'
import { Provider, connect } from 'react-redux'
import { Route, Switch, withRouter, Redirect } from "react-router-native"
import { ActivityIndicator, View } from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import { NativeRouter } from 'react-router-native'
import thunk from 'redux-thunk'

import reducer from './reducer'
import firebase from './firebase'
import Register from './components/Register'
import Login from './components/LogIn'
import ProtectedRoutes from "./ProtectedRoutes"
import { setUser, clearUser } from './actions'

const App = connect(
  state => ({ ...state }),
  { setUser, clearUser })(withRouter(props => {

    useEffect(_ => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          props.setUser(user)
          props.history.push('/home')
        } else {
          props.history.push('/')
          props.clearUser()
        }
      })
    }, [])

    return (props.isLoading ? (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="lime" />
      </View>
    ) : (
        <Switch>

          <Route
            exact path="/"
            render={props => <Login {...props} />}
          />

          <Route
            path="/register"
            render={props => <Register {...props} />}
          />

          <ProtectedRoute
            component={props => <ProtectedRoutes />}
            currentUser={props.currentUser}
          />

        </Switch>
      )
    )
  }))

const store = createStore(reducer, applyMiddleware(thunk))

const Base = _ => (
  <Provider store={store}>
    <NativeRouter>
      <App />
    </NativeRouter>
  </Provider>
)

const ProtectedRoute = ({ component: Component, currentUser }) => (
  <Route render={props => currentUser ?
    <Component {...props} currentUser={currentUser} />
    : <Redirect to={{
      pathname: '/',
      state: { from: props.location }
    }} />
  }
  />
)

const styles = {
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
}

export default Base
