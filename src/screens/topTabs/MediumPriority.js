import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';

import BookMark from '../../components/BookMark';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

class MediumPriority extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    const priorityId = {
      priority_id: 3,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post('http://www.boardpointers.ml/api/getBookmarks', priorityId, {
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
      <View style={styles.mainContainer}>
        {dataSource.map((data, i) => (
          <BookMark
            title={data.department_name}
            chapter_title={data.chapter_title}
            pointer={data.pointers}
            style={styles.chapterCardtext}
            colorCode={data.color}
          />
        ))}
      </View>
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

export default MediumPriority;
