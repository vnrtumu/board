import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

const ChangePassword = props => {
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
          />
          <TouchableOpacity style={styles.febButton}>
            <Text style={styles.febButtonText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

export default ChangePassword;
