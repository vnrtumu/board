import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const RegisterScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <Text> This is the Register Screen</Text>
      <Button
        title="GO to Home Page"
        onPress={() => props.navigation.navigate({routeName: 'Home'})}
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

export default RegisterScreen;
