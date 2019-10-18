import React from 'react'
import { YellowBox } from 'react-native'
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

const App = _ => {

  YellowBox.ignoreWarnings(['Setting a timer'])

  return (
    <Provider store={store}>
      <NativeRouter>
        <StyleProvider style={getTheme(common)}>
          <Routes />
        </StyleProvider>
      </NativeRouter>
    </Provider>
  )
}

export default App
