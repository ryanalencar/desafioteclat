import React from 'react'
import { AuthProvider } from './AuthProvider'
import Routes from './routes'

const Providers = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
)

export default Providers
