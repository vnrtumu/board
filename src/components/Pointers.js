import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Pointers = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <Text style={styles.cardTextStyle}> {props.description} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    flexDirection: 'row',
  },
  cardTextStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

export default Pointers;
