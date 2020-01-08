import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Alert,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

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
          .post('http://www.boardpointers.ml/api/feedback', feedBack, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res =>
            Snackbar.show({
              title: 'You Feedback Delivered Successfully',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: '#fff',
              color: 'orange',
              action: {
                title: 'Close',
                color: 'green',
                onPress: () => {
                  this.setState({
                    name: '',
                    email: '',
                    password: '',
                  });
                },
              },
            }),
          )
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
