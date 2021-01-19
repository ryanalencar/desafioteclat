import React, { useContext } from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { navigate } from './RootNavigation'

import Main from '../pages/Main'
import { AuthContext } from './AuthProvider'

FontAwesome.loadFont()

const Stack = createStackNavigator()

export default function AppStack() {
  const { user, logout } = useContext(AuthContext)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={({ navigation }) => ({
          title: `Seja bem vindo ${user.email}`,
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
                onPress={() => logout()}
              />
            </View>
          )
        })}
      />
    </Stack.Navigator>
  )
}
