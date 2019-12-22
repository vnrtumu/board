import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BookMarkScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text> This is the BookMarks Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookMarkScreen;
