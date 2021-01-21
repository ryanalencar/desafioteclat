/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
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
        googleLogin: async () => {
          try {
            const { idToken } = await GoogleSignin.signIn()
            const googleCredential = auth.GoogleAuthProvider.credential(idToken)
            await auth().signInWithCredential(googleCredential)
          } catch (error) {
            console.log(error)
          }
        },
        fbLogin: async () => {
          try {
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email'
            ])
            if (result.isCancelled) {
              throw 'User cancelled the login process'
            }
            const data = await AccessToken.getCurrentAccessToken()
            if (!data) {
              throw 'Something went wrong obtaining access token'
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken
            )
            await auth().signInWithCredential(facebookCredential)
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
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.defaultProps = {
  children: <></>
}

AuthProvider.propTypes = {
  children: PropTypes.any
}
