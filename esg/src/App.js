import React from 'react'
import GlobalStyle from './styles/global'
import RoutesApp from './routers'
import { AuthProvider } from './contexts/auth'

const App = () => {
  return (
  // colocando tudo dentro de AuthProvider, toda aplicação passa a ter acesso ao contexto que criado em useAuth
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
  )
}

export default App

