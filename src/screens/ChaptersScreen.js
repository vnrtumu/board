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

import ChapterCard from '../components/ChapterCard';
import axios from 'axios';
import config from '../../config';
import {WSnackBar} from 'react-native-smart-tip';
import PTRView from 'react-native-pull-to-refresh';

class ChaptersScreen extends Component {
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
    const departmentId = this.props.navigation.getParam('department_id');
    const department_id = {
      department_id: departmentId,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post(`${config.API_URL}/chapters`, department_id, {
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
      );
    }
    return (
      <PTRView onRefresh={this._refresh}>
        <View style={styles.mainContainer}>
          {dataSource.map((data, i) => (
            <ChapterCard
              key={i}
              title={data.chapter_title}
              style={styles.chapterCardtext}
              onSelect={() => {
                this.props.navigation.navigate({
                  routeName: 'Pointers',
                  params: {
                    ChapterPointer: `${data.chapter_title}`,
                    department_id: `${data.department_id}`,
                    chapter_id: `${data.chapter_id}`,
                  },
                });
              }}
            />
          ))}
        </View>
      </PTRView>
    );
  }
}

ChaptersScreen.navigationOptions = navigationData => {
  const ChapterTitle = navigationData.navigation.getParam('ChapterTitle');
  return {
    headerTitle: ChapterTitle,
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
  chapterCardtext: {
    marginVertical: 5,
  },
});

export default ChaptersScreen;
