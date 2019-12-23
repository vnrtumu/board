import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import ChapterCard from '../components/ChapterCard';

const ChaptersScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <ChapterCard
        title="Third Chapter"
        style={styles.chapterCardtext}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Pointers',
            params: {
              ChapterPointer: 'Chapter 1',
            },
          });
        }}
      />
      <ChapterCard
        title="Second Chapter"
        style={styles.chapterCardtext}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Pointers',
            params: {
              ChapterPointer: 'Chapter 2',
            },
          });
        }}
      />
      <ChapterCard
        title="Third Chapter"
        style={styles.chapterCardtext}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Pointers',
            params: {
              ChapterPointer: 'Chapter 3',
            },
          });
        }}
      />
      <ChapterCard
        title="Fourth Chapter"
        style={styles.chapterCardtext}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Pointers',
            params: {
              ChapterPointer: 'Chapter 4',
            },
          });
        }}
      />
      <ChapterCard
        title="Fifth Chapter"
        style={styles.chapterCardtext}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Pointers',
            params: {
              ChapterPointer: 'Chapter 5',
            },
          });
        }}
      />
    </View>
  );
};

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
