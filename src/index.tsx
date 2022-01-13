import './index.css'
import { BrowserRouter as MainRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter>
        <App />
      </MainRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
