/* eslint-disable react-native/no-inline-styles */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
  Text,
} from 'react-native';
import {WSnackBar} from 'react-native-smart-tip';
import Card from '../components/Card';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import config from '../../config';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import PTRView from 'react-native-pull-to-refresh';

class HomeScreen extends Component {
  onBackButtonPressAndroid = () => {
    return true;
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

  _refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .get(`${config.API_URL}/departments`, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            this.setState({
              isLoading: false,
              dataSource: [...res.data.success],
            });
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
              actionClick: () => {
                // Click Action
              },
            };
            WSnackBar.show(snackBarOpts);
          });
      }
    });
  }

  render() {
    const {dataSource} = this.state;
    if (this.state.isLoading) {
      return (
        <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
          <PTRView onRefresh={this._refresh}>
            <View
              style={{
                flex: 1,
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}>
              <ActivityIndicator size={'large'} />
              <Text>Loding...</Text>
            </View>
          </PTRView>
        </AndroidBackHandler>
      );
    }
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <PTRView onRefresh={this._refresh}>
          <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {dataSource.map((data, i) => (
                <Card
                  key={i}
                  title={data.name}
                  style={styles.inputContainer}
                  url={{uri: data.path + data.icon}}
                  onSelect={() => {
                    this.props.navigation.navigate({
                      routeName: 'Chapters',
                      params: {
                        ChapterTitle: `${data.name}`,
                        department_id: `${data.id}`,
                      },
                    });
                  }}
                />
              ))}
            </ScrollView>
          </View>
        </PTRView>
      </AndroidBackHandler>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 10,
    width: 350,
    maxWidth: '100%',
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textViewStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textStyle: {
    zIndex: 1000,
    color: 'black',
  },
});

export default HomeScreen;
