import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'

export const AuthContext = createContext()

export function AuthProvider() {
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
          } catch (error) {
            console.log(error)
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
          } catch (error) {
            console.log(error)
          }
        },
        logout: async () => {
          try {
            await auth().signOut()
          } catch (error) {
            console.log(error)
          }
        }
      }}
    />
  )
}
