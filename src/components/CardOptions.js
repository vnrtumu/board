import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

const CardOptions = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <Icon
        name={props.icon}
        size={30}
        color="#900c3f"
        style={styles.iconStyle}
      />
      <Text style={styles.cardTextStyle}> {props.title} </Text>
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
    fontSize: 22,
    fontWeight: '500',
  },
  iconStyle: {
    marginHorizontal: 10,
  },
});

export default CardOptions;
