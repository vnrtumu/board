/* eslint-disable react-native/no-inline-styles */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import {WSnackBar} from 'react-native-smart-tip';
import BookMark from '../../components/BookMark';
import axios from 'axios';
import config from '../../../config';
import PTRView from 'react-native-pull-to-refresh';

class HighPriority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

  refreshScreen = () => {
    const priorityId = {
      priority_id: 1,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post(`${config.API_URL}/getBookmarks`, priorityId, {
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
  };

  _refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.refreshScreen();
      }, 2000);
    });
  };

  componentDidMount() {
    this.refreshScreen();
  }

  state = {
    bookmarkId: '',
  };

  deleteBookmark = () => {
    const bookmarkId = {
      bookmark_id: this.state.bookmarkId,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post(`${config.API_URL}/deleteBookmark`, bookmarkId, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            const snackBarOpts = {
              data: 'Bookmark is Deleted Successfully',
              position: WSnackBar.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.INDEFINITE, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
              actionClick: this.refreshScreen,
            };
            WSnackBar.show(snackBarOpts);
            console.log(res.data);
          })
          .catch(err => {
            const snackBarOpts = {
              data: 'Please check the network.',
              position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
            };
            WSnackBar.show(snackBarOpts);
          });
      }
    });
  };
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
        <ScrollView>
          <View style={styles.mainContainer}>
            {dataSource.map((data, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  this.setState(
                    {
                      bookmarkId: `${data.bookmark_id}`,
                    },
                    () => {
                      this.deleteBookmark(data.bookmark_id);
                    },
                  );
                }}>
                <BookMark
                  title={data.department_name}
                  chapter_title={data.chapter_title}
                  pointer={data.pointers}
                  style={styles.chapterCardtext}
                  colorCode={data.color}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </PTRView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
  chapterCardtext: {
    marginVertical: 5,
  },
});

export default HighPriority;
