import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  AsyncStorage,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

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
    AsyncStorage.getItem('output').then(output => {
      if (output) {
        const out = JSON.parse(output);
        const token = out.token;
        fetch('http://www.boardpointers.ml/api/changePassword', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            current_password: current_password,
            new_password: new_password,
            c_password: c_password,
          }),
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            Alert.alert('Your Password Changed Successfully');
            this.props.navigation.navigate('Login');
          })
          .catch(error => {
            console.error(error);
          });
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
