import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ChaptersScreen from '../screens/ChaptersScreen';
import PointersScreen from '../screens/PointersScreen';
import ProfileScreen from '../screens/ProfileScreen';

import LowPriority from '../screens/topTabs/LowProirity';
import HighPriority from '../screens/topTabs/HighPriority';
import MediumPriority from '../screens/topTabs/MediumPriority';
import FeedBackScreen from '../screens/FeedBackScreen';

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
});

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
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
      },
    },

    Chapters: {
      screen: ChaptersScreen,
      navigationOptions: {
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
      },
    },
    Pointers: {
      screen: PointersScreen,
      navigationOptions: {
        headerTitleStyle: {
          flex: 1,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
      },
    },
    FeedBack: {
      screen: FeedBackScreen,
      navigationOptions: {
        headerTitle: 'FeedBack',
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
      },
    },
  },
  // {
  //   defaultNavigationOptions: {
  //     initialRouteName: 'Home',
  //   },
  // },
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
    },
  },
);

const BoardTabNavigator = createBottomTabNavigator(
  {
    Departments: {
      screen: BoardNavigator,
      navigationOptions: {
        tabBarLabel: 'Deparments',
        tabBarIcon: ({tintColor}) => (
          <Fontisto name="nav-icon-grid" size={26} style={{color: tintColor}} />
        ),
      },
    },
    BookMarks: {
      screen: topNav,
      navigationOptions: {
        tabBarLabel: 'Bookmarks',
        tabBarIcon: ({tintColor}) => (
          <Icon name="bookmark" size={26} style={{color: tintColor}} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" size={24} style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#900c3f',
      labelStyle: {
        fontSize: 12,
        margin: 0,
        padding: 0,
      },
      tabStyle: {
        marginTop: 10,
      },
    },
  },
);

export default createAppContainer(BoardTabNavigator);
