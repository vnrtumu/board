import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';

import ChapterCard from '../components/ChapterCard';

import axios from 'axios';
import Snackbar from 'react-native-snackbar';

class ChaptersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    const departmentId = this.props.navigation.getParam('department_id');
    const department_id = {
      department_id: departmentId,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post('http://www.boardpointers.ml/api/chapters', department_id, {
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
