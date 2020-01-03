import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BookMark = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <Text style={{...styles.cardTextStyle, color: props.colorCode}}>
        {props.title}
      </Text>
      <Text style={styles.chapterStyle}> This Cahpters 1</Text>
      <Text style={styles.pointerStyle}>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
      </Text>
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
  cardTextStyle: {
    color: 'red',
    fontSize: 22,
    fontWeight: '500',
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  chapterStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  pointerStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default BookMark;
