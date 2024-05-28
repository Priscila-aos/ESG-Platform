import React from 'react'
import GlobalStyle from './styles/global'
import RoutesApp from './routers'
import { AuthProvider } from './contexts/auth'

//rafce
const App = () => {
  return (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
  )
}

export default App