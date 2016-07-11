"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './reducers/rootReducer'

// update the DOM with the new state
const renderView = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById("app")
  )
}

// page initialization
renderView()

// re-render every time the store is updated
store.subscribe(renderView)

