import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import config from '../../config';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

class ChangePassword extends Component {
  state = {
    new_password: '',
    c_password: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  UpdatePassword = async () => {
    const {new_password} = this.state;
    const {c_password} = this.state;

    AsyncStorage.getItem('email').then(email => {
      if (email) {
        const ResetPass = {
          email: email,
          new_password: new_password,
          c_password: c_password,
        };
        console.log(ResetPass);
        axios
          .post(`${config.API_URL}/resetPass`, ResetPass)
          .then(res => {
            Snackbar.show({
              title: 'You Password Updated Successfully',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: '#fff',
              color: 'orange',
              action: {
                title: 'Close',
                color: 'green',
              },
            });
            this.props.navigation.navigate('Login');
          })
          .catch(err =>
            Snackbar.show({
              title: 'Something Went Wrong!',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: '#fff',
              color: 'red',
              action: {
                title: 'Close',
                color: 'green',
              },
            }),
          );
      }
    });
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.feedbackContainer}>
            <Text style={styles.headingTitle}>Change Password</Text>
          </View>
          <View style={styles.inputContainer}>
            <Fumi
              label={'New Password'}
              iconClass={FontAwesomeIcon}
              iconName={'eye-slash'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
              style={styles.subjectInput}
              onChangeText={val => this.onChangeText('new_password', val)}
            />
            <Fumi
              label={'Confirm Password'}
              iconClass={FontAwesomeIcon}
              iconName={'eye-slash'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
              style={styles.subjectInput}
              onChangeText={val => this.onChangeText('c_password', val)}
            />
            <TouchableOpacity
              style={styles.febButton}
              onPress={this.UpdatePassword}>
              <Text style={styles.febButtonText}>Update Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#900c3f',
  },
  feedbackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  headingTitle: {
    fontSize: 22,
    color: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  emailInput: {
    marginVertical: 10,
  },
  subjectInput: {
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  febButton: {
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  febButtonText: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ChangePassword;
