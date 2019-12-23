import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BoardNavigator from './BoardNavigator';

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: BoardNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AuthNavigator);
