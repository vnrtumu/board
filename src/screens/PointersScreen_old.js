import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {POINTERS} from '../data/dummy';

const PointersScreen = props => {
  const rederGridItem = itemData => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.pointerStyle}>
          <Text>{itemData.item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={POINTERS}
        renderItem={rederGridItem}
      />
    </View>
  );
};

PointersScreen.navigationOptions = navigationData => {
  const ChapterPointer = navigationData.navigation.getParam('ChapterPointer');
  return {
    headerTitle: ChapterPointer,
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointerStyle: {
    flex: 1,
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default PointersScreen;
