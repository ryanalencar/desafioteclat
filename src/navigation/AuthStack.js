import React, { useEffect } from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { GoogleSignin } from '@react-native-community/google-signin'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

FontAwesome.loadFont()

const Stack = createStackNavigator()

export default function AuthStack() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '760152158797-phthe6dop3pfpqqqikd8ge6oko2cihbm.apps.googleusercontent.com'
    })
  })
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0
          },
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          )
        })}
      />
    </Stack.Navigator>
  )
}
