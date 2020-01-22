import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HTML from 'react-native-render-html';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BookMark = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <View style={styles.heading}>
        <Text style={{...styles.cardTextStyle, color: props.colorCode}}>
          {props.title}
        </Text>
        <TouchableOpacity onPress={props.onSelect}>
          <FontAwesome
            name="trash-o"
            size={30}
            color="#C223CE"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.chapterStyle}> {props.chapter_title} </Text>
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
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BookMark;
