import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';

const Pointers = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <HTML
        html={props.description}
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
    flexDirection: 'row',
    padding: 8,
    marginHorizontal: 5,
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
