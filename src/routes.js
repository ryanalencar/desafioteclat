import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Login from './pages/Login'
import Signup from './pages/Signup'

const Routes = createAppContainer(
  createStackNavigator({ Login, Signup, Main }, { headerMode: 'none' })
)

export default Routes
