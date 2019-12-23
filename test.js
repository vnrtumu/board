import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button
          title="Show modal"
          onPress={this.toggleModal}
          swipeDirection={'left'}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.mainContainer}>
            <View style={styles.dummyContainer} />
            <View style={styles.dummyContainer} />
            <View style={styles.modelContainer}>
              <Text>Hello!</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dummyContainer: {
    flex: 1,
  },
  modelContainer: {
    height: 200,
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  cancelContainer: {
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
