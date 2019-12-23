import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const FeedBackScreen = props => {
  return (
    <View style={styles.mainContainer}>
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
        />
        <AutoGrowingTextInput
          style={styles.textInput}
          placeholder={'Your Message'}
          minHeight={40}
        />
        <TouchableOpacity style={styles.febButton}>
          <Text style={styles.febButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
