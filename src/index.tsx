import React from 'react'
import ReactDOM from 'react-dom'
// import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
// import { Provider } from 'react-redux'

import App from './containers/App'
import theme from './theme'
// import store from './store'

const rootEl = (
  <ThemeProvider theme={theme}>
    {/* <Provider store={store}> */}
    {/* <CssBaseline /> */}
    <App />
    {/* </Provider>, */}
  </ThemeProvider>
)

const entryEl = document.getElementById('root')

ReactDOM.render(rootEl, entryEl);















