import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPass from '../screens/ForgotPass';
import ResetPass from '../screens/ResetPass';
import BoardNavigator from './BoardNavigator';

import SplashScreen from '../screens/SplashScreen';
import AppIntroScreen from '../screens/AppIntroScreen';
import VerifyOtp from '../screens/VerifyOtp';

const AuthNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  AppIntro: {
    screen: AppIntroScreen,
    navigationOptions: {
      header: null,
    },
  },
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
  Forgot: {
    screen: ForgotPass,
    navigationOptions: {
      header: null,
    },
  },
  Verify: {
    screen: VerifyOtp,
    navigationOptions: {
      header: null,
    },
  },
  Reset: {
    screen: ResetPass,
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
