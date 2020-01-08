import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';
import ImageLoader from '../components/ImageLoader';

export default class SplashScreen extends Component {
  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        setTimeout(() => {
          this.props.navigation.navigate('Home');
        }, 2000);
      } else {
        setTimeout(() => {
          this.props.navigation.navigate('AppIntro');
        }, 2000);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageLoader
          style={styles.image}
          source={require('../assets/logo.png')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
