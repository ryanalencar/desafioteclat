import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { stackNavigatorConfig } from './config/stackNavigator'

import Main from './pages/Main'

const Routes = createAppContainer(createStackNavigator({ Main }, stackNavigatorConfig))

export default Routes
