import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import BookMark from '../../components/BookMark';

const ChaptersScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <BookMark
        title="Second Chapter"
        style={styles.chapterCardtext}
        colorCode="orange"
      />
      <BookMark
        title="Second Chapter"
        style={styles.chapterCardtext}
        colorCode="orange"
      />
      <BookMark
        title="Second Chapter"
        style={styles.chapterCardtext}
        colorCode="orange "
      />
    </View>
  );
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
