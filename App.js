import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { NativeRouter } from 'react-router-native'
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import common from './native-base-theme/variables/commonColor'
import thunk from 'redux-thunk'

import reducer from './reducer'
import Routes from './components/Routes'

const store = createStore(reducer, applyMiddleware(thunk))

const App = _ => (
  <Provider store={store}>
    <NativeRouter>
      <StyleProvider style={getTheme(common)}>
        <Routes />
      </StyleProvider>
    </NativeRouter>
  </Provider>
)

export default App
