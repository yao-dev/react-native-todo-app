import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthWithLoading from './screens/AuthWithLoading';
import Login from './screens/Login';
import NewHome from './screens/NewHome';
import Signup from './screens/Signup';

const AuthLoading = createStackNavigator({
  AuthLoading: {
    screen: AuthWithLoading
  }
}, {
  headerMode: 'none'
})

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  }
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

const AppStack = createStackNavigator({
  Home: {
    screen: NewHome,
  },
})

const ReactNavigationContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  }, {
    initialRouteName: 'AuthLoading',
  })
);

export default ReactNavigationContainer;
