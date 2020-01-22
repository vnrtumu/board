import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';

import Card from '../components/Card';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

import config from '../../config';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
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
              dataSource: [...res.data.success],
            });
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
      }
    });
  }

  render() {
    const {dataSource} = this.state;
    return (
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
