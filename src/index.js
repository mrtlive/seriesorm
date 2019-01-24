import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// eslint-disable-next-line


if (module.hot) {
  module.hot.accept(App)
}
