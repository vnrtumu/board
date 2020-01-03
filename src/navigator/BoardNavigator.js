import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

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

const tabScreenConfig = {
  Departments: {
    screen: BoardNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Fontisto name="nav-icon-grid" size={24} style={{color: '#fff'}} />
        );
      },
      tabBarColor: '#000',
      tabBarLabel: 'Departments',
    },
  },
  BookMarks: {
    screen: topNav,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => {
        return <Icon name="bookmark" size={24} style={{color: '#fff'}} />;
      },
      tabBarColor: '#969ACA',
      tabBarLabel: 'Bookmarks',
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="user" size={24} style={{color: '#fff'}} />;
      },
      tabBarColor: '#900C3F',
    },
  },
};

const BoardTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: 'white',
  inactiveColor: '#3e2465',
  shifting: true,
  barStyle: {
    backgroundColor: '#008000',
  },
});

export default createAppContainer(BoardTabNavigator);
