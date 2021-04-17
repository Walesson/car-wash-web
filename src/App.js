import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme, GlobalStyle } from './services/theme'
import { Routes } from './routes'

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
