/* eslint-disable handle-callback-err */
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
import {WSnackBar} from 'react-native-smart-tip';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import axios from 'axios';

class ChangePassword extends Component {
  state = {
    current_password: '',
    new_password: '',
    c_password: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  UpdatePassword = async () => {
    const {current_password} = this.state;
    const {new_password} = this.state;
    const {c_password} = this.state;

    if (current_password) {
      if (new_password) {
        if (c_password) {
          if (new_password === c_password) {
            const ChangePass = {
              current_password: current_password,
              new_password: new_password,
              c_password: c_password,
            };
            AsyncStorage.getItem('token').then(token => {
              if (token) {
                axios
                  .post(`${config.API_URL}/changePassword`, ChangePass, {
                    headers: {
                      Authorization: 'Bearer ' + token,
                    },
                  })
                  .then(res => {
                    AsyncStorage.removeItem('token');
                    const snackBarOpts = {
                      data: 'You Password Updated Successfully',
                      position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
                      duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
                      textColor: '#ff490b',
                      backgroundColor: '#050405',
                      actionText: 'close',
                      actionTextColor: 'white',
                      actionClick: () => {},
                    };
                    WSnackBar.show(snackBarOpts);
                    this.props.navigation.navigate('Login');
                  })
                  .catch(err => {
                    const snackBarOpts = {
                      data: 'Please check the network first.',
                      position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
                      duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
                      textColor: '#ff490b',
                      backgroundColor: '#050405',
                      actionText: 'close',
                      actionTextColor: 'white',
                      actionClick: () => {},
                    };
                    WSnackBar.show(snackBarOpts);
                  });
              }
            });
          } else {
            const snackBarOpts = {
              data: 'New and confirm Pass Should match',
              position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
              actionClick: () => {},
            };
            WSnackBar.show(snackBarOpts);
          }
        } else {
          const snackBarOpts = {
            data: 'confirm Password Should not be Empty',
            position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
            duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
            textColor: '#ff490b',
            backgroundColor: '#050405',
            actionText: 'close',
            actionTextColor: 'white',
            actionClick: () => {},
          };
          WSnackBar.show(snackBarOpts);
        }
      } else {
        const snackBarOpts = {
          data: 'New Password Should not be Empty',
          position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
          duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
          textColor: '#ff490b',
          backgroundColor: '#050405',
          actionText: 'close',
          actionTextColor: 'white',
          actionClick: () => {},
        };
        WSnackBar.show(snackBarOpts);
      }
    } else {
      const snackBarOpts = {
        data: 'Current Password Should not be Empty',
        position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
        duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
        textColor: '#ff490b',
        backgroundColor: '#050405',
        actionText: 'close',
        actionTextColor: 'white',
        actionClick: () => {},
      };
      WSnackBar.show(snackBarOpts);
    }
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
              label={'Old Password'}
              iconClass={FontAwesomeIcon}
              iconName={'eye'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType={'next'}
              secureTextEntry
              style={styles.emailInput}
              onChangeText={val => this.onChangeText('current_password', val)}
            />
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
