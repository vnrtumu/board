import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ChaptersScreen from '../screens/ChaptersScreen';
import PointersScreen from '../screens/PointersScreen';
import BookMarkScreen from '../screens/BookMarkScreen';
import ProfileScreen from '../screens/ProfileScreen';

import LowPriority from '../screens/topTabs/LowProirity';
import HighPriority from '../screens/topTabs/HighPriority';
import MediumPriority from '../screens/topTabs/MediumPriority';

const BoardNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      },
    },
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },

    Chapters: {
      screen: ChaptersScreen,
    },
    Pointers: {
      screen: PointersScreen,
    },
  },
  {
    defaultNavigationOptions: {
      initialRouteName: 'Home',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
    },
  },
);

const topNav = createMaterialTopTabNavigator(
  {
    High: {
      screen: HighPriority,
    },
    Medium: {
      screen: MediumPriority,
    },

    Low: {
      screen: LowPriority,
    },
  },
  {
    defaultNavigationOptions: {
      initialRouteName: 'High',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
    },
  },
);

const BoardTabNavigator = createBottomTabNavigator({
  Departments: BoardNavigator,
  BookMarks: topNav,
  Profile: {
    screen: ProfileScreen,
  },
});

export default createAppContainer(BoardTabNavigator);
