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
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import config from '../../config';

class ForgotPass extends Component {
  state = {
    email: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  UpdatePassword = async () => {
    const {email} = this.state;
    const forgotPass = {
      email: email,
    };
    // alert(`${config.API_URL}/forgotPass`);
    axios
      .post(`${config.API_URL}/forgotPass`, forgotPass)
      .then(res => {
        AsyncStorage.setItem('email', this.state.email);
        this.props.navigation.navigate('Verify');
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
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.feedbackContainer}>
            <Text style={styles.headingTitle}>Forgot Password</Text>
            <Text style={{color: '#fff'}}>
              Please enter your registered email.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Fumi
              label={'Enter your email'}
              iconClass={FontAwesomeIcon}
              iconName={'envelope'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType={'next'}
              style={styles.emailInput}
              onChangeText={val => this.onChangeText('email', val)}
            />
            <TouchableOpacity
              style={styles.febButton}
              onPress={this.UpdatePassword}>
              <Text style={styles.febButtonText}>Send Otp</Text>
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

export default ForgotPass;
