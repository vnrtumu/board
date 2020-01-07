import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';

const BookMark = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <Text style={{...styles.cardTextStyle, color: props.colorCode}}>
        {props.title}
      </Text>
      <Text style={styles.chapterStyle}> {props.chapter_title} </Text>
      {/* <Text style={styles.pointerStyle}>{props.pointer}</Text> */}
      <HTML
        html={props.pointer}
        imagesMaxWidth={Dimensions.get('window').width}
      />
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
    padding: 15,
  },
  cardTextStyle: {
    color: 'red',
    fontSize: 22,
    fontWeight: '500',
  },
  chapterStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 5,
  },
});

export default BookMark;
