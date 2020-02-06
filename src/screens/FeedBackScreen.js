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
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import axios from 'axios';

class FeedBackScreen extends Component {
  state = {
    email: '',
    subject: '',
    message: '',
  };

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  SUbmitFeedBack = async () => {
    const {email} = this.state;
    const {subject} = this.state;
    const {message} = this.state;
    const feedBack = {
      email: email,
      subject: subject,
      message: message,
    };

    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post(`${config.API_URL}/feedback`, feedBack, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            const snackBarOpts = {
              data: 'You Feedback Delivered Successfully',
              position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
              actionClick: () => {
                // Click Action
              },
            };
            WSnackBar.show(snackBarOpts);
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
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.feedbackContainer}>
            <Text style={styles.headingTitle}>How You Feel About the App</Text>
          </View>
          <View style={styles.inputContainer}>
            <Fumi
              label={'Email Address'}
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
            <Fumi
              label={'Subject'}
              iconClass={FontAwesomeIcon}
              iconName={'text-width'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.subjectInput}
              onChangeText={val => this.onChangeText('subject', val)}
            />
            <AutoGrowingTextInput
              style={styles.textInput}
              placeholder={'Your Message'}
              minHeight={40}
              onChangeText={val => this.onChangeText('message', val)}
            />
            <TouchableOpacity
              style={styles.febButton}
              onPress={this.SUbmitFeedBack}>
              <Text style={styles.febButtonText}>Submit</Text>
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

export default FeedBackScreen;
