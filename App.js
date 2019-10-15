import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { NativeRouter } from 'react-router-native'
import thunk from 'redux-thunk'

import reducer from './reducer'
import Routes from './components/Routes'

const store = createStore(reducer, applyMiddleware(thunk))

const App = _ => (
  <Provider store={store}>
    <NativeRouter>
      <Routes />
    </NativeRouter>
  </Provider>
)

export default App
