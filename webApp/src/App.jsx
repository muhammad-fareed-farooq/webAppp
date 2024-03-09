import React from 'react'
import Router_App from './Config/Router_App/Router_App'
import { Provider } from 'react-redux'
import { store } from './Store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Router_App/>
      </Provider>
    </div>
  )
}

export default App
