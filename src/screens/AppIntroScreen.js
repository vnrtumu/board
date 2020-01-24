import React, {Component} from 'react';

import {StyleSheet, View, Text, Platform} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

export default class AppIntroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false,
    };
  }

  on_Done_all_slides = () => {
    this.setState({show_Main_App: true});
  };

  on_Skip_slides = () => {
    this.setState({show_Main_App: true});
  };
  render() {
    if (this.state.show_Main_App) {
      return this.props.navigation.navigate('Login');
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.on_Done_all_slides}
          showSkipButton={true}
          onSkip={this.on_Skip_slides}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
  },
});

const slides = [
  {
    key: 'k1',
    title: 'Cardilogy',
    text: 'Details About Cardilogy',
    image: {
      uri:
        'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF1744',
  },
  {
    key: 'k2',
    title: 'Microbiology',
    text: 'Details About Microbiology',
    image: {
      uri:
        'https://images.unsplash.com/photo-1575468130797-aa950b68aeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#D500F9',
  },
  {
    key: 'k3',
    title: 'Medical Technology Informations',
    text: 'Latest Technology Informations',
    image: {
      uri:
        'https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#2979FF',
  },
];
