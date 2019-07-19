import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the App container component
import App from './App'

// Import the store
import store from './store'

// Pass the store into the Provider
export default function AppWithStore() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }