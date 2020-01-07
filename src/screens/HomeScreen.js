import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';

import Card from '../components/Card';
import {ScrollView} from 'react-native-gesture-handler';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('output').then(output => {
      if (output) {
        const out = JSON.parse(output);
        const token = out.token;
        console.log(token);
        fetch('http://www.boardpointers.ml/api/departments', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
          .then(response => response.json())
          .then(response => {
            // console.log(response.success);
            // // AsyncStorage.setItem('department_id', response.success.id);
            this.setState({
              dataSource: [...response.success],
            });
          })
          .catch(error => {
            console.log(error);
          });
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
