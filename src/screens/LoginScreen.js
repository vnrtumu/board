import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const LoginScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <Text> This is the Login Screen</Text>
      <Button
        title="GO to Register Page"
        onPress={() => props.navigation.navigate({routeName: 'Register'})}
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

export default LoginScreen;
