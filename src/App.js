import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme, GlobalStyle } from './services/theme'
import { Login } from './pages'

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  )
}

export default App
