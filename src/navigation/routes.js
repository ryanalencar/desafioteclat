import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'

import { navigationRef, isReadyRef } from './RootNavigation'

import AuthStack from './AuthStack'
import AppStack from './AppStack'

export default function Routes() {
  const { user, setUser } = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true)

  function teste(usr) {
    setUser(usr)
    if (initializing) setInitializing(false)
  }

  useEffect(
    () => () => {
      isReadyRef.current = false
    },
    []
  )

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(teste)
    return subscriber
  }, [])
  auth()

  if (initializing) return null

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}
    >
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
