import './index.css'
import { BrowserRouter as MainRouter } from 'react-router-dom'
import { colors } from 'constant'
import { Provider } from 'react-redux'
import { store } from 'store'
import { StrictMode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App'
import ReactDOM from 'react-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.red,
      light: colors.light
    },
    secondary: {
      main: colors.orange,
      dark: colors.darkOrange
    }
  }
})

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRouter>
          <App />
        </MainRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
