import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'
import Home from './components/Register'
import LogIn from './components/LogIn'

const store = createStore(reducer, applyMiddleware(thunk))

export default _ => (
  <Provider store={store}>
    {/* <Home /> */}
    <LogIn />
  </Provider>
)
