import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Signup from '../pages/Signup'
import Login from '../pages/Login'

FontAwesome.loadFont()

const Stack = createStackNavigator()

const AuthStack = () => (
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

export default AuthStack
