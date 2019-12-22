import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <Image
        source={props.url}
        style={{...styles.imageStyle, ...props.style}}
      />
      <View style={styles.cardViewTextStyle}>
        <Text style={styles.cardTextStyle}> {props.title} </Text>
      </View>
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
  },
  imageStyle: {
    borderRadius: 10,
    alignSelf: 'stretch',
    opacity: 0.9,
  },
  cardViewTextStyle: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 999,
    // backgroundColor: 'black',
  },
  cardTextStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Card;
