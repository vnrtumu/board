import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProfileScreen from '../screens/ProfileScreen';
import FeedBackScreen from '../screens/FeedBackScreen';
import ChangePassword from '../screens/ChangePassword';

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false,
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
  Change: {
    screen: ChangePassword,
    navigationOptions: {
      headerTitle: 'Change Password',
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
});

export default createAppContainer(ProfileNavigator);
