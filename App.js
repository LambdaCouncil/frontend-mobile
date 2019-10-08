import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'
import Register from './components/Register'

const store = createStore(reducer, applyMiddleware(thunk))

export default _ => (
  <Provider store={store}>
    <Register />
  </Provider>
)
