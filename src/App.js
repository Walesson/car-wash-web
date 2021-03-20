import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme, GlobalStyle } from './services/theme'
import { LandingPage } from './pages'

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
