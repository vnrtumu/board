import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';

import BookMark from '../../components/BookMark';

class MediumPriority extends Component {
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
        const user_id = out.user_id;
        fetch('http://www.boardpointers.ml/api/getBookmarks', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            priority_id: 3,
            user_id: user_id,
          }),
        })
          .then(response => response.json())
          .then(response => {
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
