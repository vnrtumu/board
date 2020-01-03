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
import Pointers from '../components/Pointers';
import {RadioButton} from 'react-native-paper';
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
          <Pointers description={itemData.item.description} />
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {checked} = this.state;
    return (
      <View style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={POINTERS}
          renderItem={this.rederGridItem}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modelMainContainer}>
            <View style={styles.dummyContainer} />
            <View style={styles.modelContainer}>
              <View style={styles.prioprityContainer}>
                <Text style={styles.highPriorityText}>High Priority</Text>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: 'first'});
                  }}
                />
              </View>
              <View style={styles.prioprityContainer}>
                <Text style={styles.mediumPriorityText}>Medium Priority</Text>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: 'second'});
                  }}
                />
              </View>
              <View style={styles.prioprityContainer}>
                <Text style={styles.lowPriorityText}>Low Priority</Text>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: 'third'});
                  }}
                />
              </View>
              <View style={styles.closeBtnContainer}>
                <TouchableOpacity
                  onPress={this.toggleModal}
                  style={styles.closeBtn}>
                  <Text style={styles.closeTxt}>Close</Text>
                </TouchableOpacity>
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
    padding: 10,
  },
  dummyContainer: {
    flex: 1,
  },
  modelContainer: {
    height: 10,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    padding: 22,
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
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 50,
    width: 100,
    marginVertical: 25,
    marginHorizontal: '35%',
    paddingVertical: 6,
  },
  closeBtn: {
    alignItems: 'center',
  },
  closeTxt: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
