import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {Checkbox} from 'react-native-paper';

import {POINTERS} from '../data/dummy';

export default class PointersScreen extends Component {
  state = {
    isModalVisible: false,
    checked1: false,
    checked2: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  rederGridItem = itemData => {
    return (
      <TouchableOpacity onPress={this.toggleModal} swipeDirection={'left'}>
        <View style={styles.pointerStyle}>
          <Text>{itemData.item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {checked} = this.state;
    return (
      <View style={styles.mainContainer}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={POINTERS}
          renderItem={this.rederGridItem}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modelMainContainer}>
            <View style={styles.dummyContainer} />
            <View style={styles.modelContainer}>
              <Text style={styles.bokkmarkTitle}>Bookmark This Pointer</Text>
              <View style={styles.prioprityContainer}>
                <Text style={styles.highPriorityText}>High Priority</Text>
                <Checkbox
                  status={this.checked1 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked1: !this.checked1});
                  }}
                />
              </View>
              <View style={styles.prioprityContainer}>
                <Text style={styles.mediumPriorityText}>Medium Priority</Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: !checked});
                  }}
                />
              </View>
              <View style={styles.prioprityContainer}>
                <Text style={styles.lowPriorityText}>Low Priority</Text>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: !checked});
                  }}
                />
              </View>
              <View style={styles.closeBtnContainer}>
                <Button
                  title="Close"
                  onPress={this.toggleModal}
                  style={styles.closeBtn}
                />
              </View>
            </View>
            <View style={styles.dummyContainer} />
          </View>
        </Modal>
      </View>
    );
  }
}

PointersScreen.navigationOptions = navigationData => {
  const ChapterPointer = navigationData.navigation.getParam('ChapterPointer');
  return {
    headerTitle: ChapterPointer,
  };
};

const styles = StyleSheet.create({
  modelMainContainer: {
    flex: 1,
  },
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
  dummyContainer: {
    flex: 1,
  },
  modelContainer: {
    height: 100,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  bokkmarkTitle: {
    paddingVertical: 20,
    fontSize: 25,
    color: '#900c3f',
    alignSelf: 'center',
  },
  prioprityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  highPriorityText: {
    fontSize: 20,
    color: '#ff0000',
  },
  mediumPriorityText: {
    fontSize: 20,
    color: '#ffa500',
  },
  lowPriorityText: {
    fontSize: 20,
    color: '#008000',
  },
  closeBtnContainer: {
    alignItems: 'center',
  },
});
