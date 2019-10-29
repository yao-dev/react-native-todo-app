import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
      }
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false,
      }
    }
  },
  Home: {
    screen: Home,
  },
}, {
  initialRouteName: 'Login',
});

const ReactNavigationContainer = createAppContainer(AppNavigator);

export default ReactNavigationContainer;
