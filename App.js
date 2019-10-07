import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'
import Home from './components/Home'

const store = createStore(reducer, applyMiddleware(thunk))

export default _ => (
  <Provider store={store}>
    <Home />
  </Provider>
)
