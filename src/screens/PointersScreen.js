import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PointersScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <Text> This is the Pointers Screen</Text>
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

export default PointersScreen;
