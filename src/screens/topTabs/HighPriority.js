/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage, ScrollView} from 'react-native';

import BookMark from '../../components/BookMark';

import axios from 'axios';
import Snackbar from 'react-native-snackbar';

import config from '../../../config';

class HighPriority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
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

  // state = {
  //   bookmard_id: '',
  // };
  // deleteBookmark = async () => {
  //   // alert(this.state.bookmard_id);
  //   AsyncStorage.getItem('token').then(token => {
  //     if (token) {
  //       const bookmarkId = {
  //         bookmard_id: this.state.bookmard_id,
  //       };
  //       axios
  //         .post(`${config.API_URL}/deleteBookmark`, bookmarkId, {
  //           headers: {
  //             Authorization: 'Bearer ' + token,
  //           },
  //         })
  //         .then(res => {
  //           window.location.reload(false);
  //         })
  //         .catch(err =>
  //           Snackbar.show({
  //             title: 'Something Went Wrong!',
  //             duration: Snackbar.LENGTH_SHORT,
  //             backgroundColor: '#fff',
  //             color: 'red',
  //             action: {
  //               title: 'Close',
  //               color: 'green',
  //             },
  //           }),
  //         );
  //     }
  //   });
  // };
  render() {
    const {dataSource} = this.state;
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          {dataSource.map((data, i) => (
            <BookMark
              key={i}
              title={data.department_name}
              chapter_title={data.chapter_title}
              pointer={data.pointers}
              style={styles.chapterCardtext}
              colorCode={data.color}
              // alert(`${data.bookmard_id}`)
              // onSelect={() => {
              //   this.setState(
              //     {
              //       bookmard_id: `${data.bookmard_id}`,
              //     },
              //     () => {
              //       this.deleteBookmark(data.bookmard_id);
              //     },
              //   );
              // }}
            />
          ))}
        </View>
      </ScrollView>
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
