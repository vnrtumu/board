import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

const RegisterScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/bg4.png')}
        style={styles.bgStyle}>
        <ScrollView>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo2.png')}
              style={styles.logoStyle}
            />
          </View>
          <View>
            <View style={styles.formContainer}>
              <Text style={styles.formText}>Create Your Account</Text>
            </View>
            <View style={styles.inputContainer}>
              <Fumi
                label={'Enter Your Name'}
                iconClass={FontAwesomeIcon}
                iconName={'user'}
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
                label={'Password'}
                iconClass={FontAwesomeIcon}
                iconName={'eye'}
                iconColor={'#f95a25'}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                style={styles.passwordInput}
              />
              <View style={styles.btnContiners}>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={() =>
                    props.navigation.navigate({routeName: 'Home'})
                  }>
                  <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottmText}>
            <Text style={styles.btmTxt}>Already a Board Pointer's User?</Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => props.navigation.navigate({routeName: 'Login'})}>
              <Text style={styles.signupTxt}> Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
  },
  bgStyle: {
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
  },
  logoStyle: {
    height: 150,
    width: 150,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  formText: {
    color: 'white',
    fontSize: 25,
  },
  formTitle: {
    color: 'white',
    fontSize: 35,
  },
  inputContainer: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  emailInput: {
    marginVertical: 10,
    borderRadius: 5,
  },
  passwordInput: {
    marginVertical: 10,
    borderRadius: 5,
  },
  btnContiners: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  submitBtn: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  forgotPassText: {
    fontSize: 15,
    color: 'white',
  },
  loginText: {
    fontSize: 25,
    color: 'white',
  },
  forgotPass: {
    justifyContent: 'flex-end',
  },
  bottmText: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btmTxt: {
    color: 'white',
    fontSize: 15,
  },
  signupTxt: {
    color: 'red',
    fontSize: 22,
  },
});

export default RegisterScreen;
