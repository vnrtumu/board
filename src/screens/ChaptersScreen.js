import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';

import ChapterCard from '../components/ChapterCard';

class ChaptersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    const department_id = this.props.navigation.getParam('department_id');
    AsyncStorage.getItem('output').then(output => {
      if (output) {
        const out = JSON.parse(output);
        const token = out.token;
        fetch('http://www.boardpointers.ml/api/chapters', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            department_id: department_id,
          }),
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
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
