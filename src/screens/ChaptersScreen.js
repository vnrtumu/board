import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ChaptersScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <Text> This is the Chapters Screen</Text>
      <Button
        title="GO to Pointers Page"
        onPress={() => props.navigation.navigate({routeName: 'Pointers'})}
      />
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

export default ChaptersScreen;
