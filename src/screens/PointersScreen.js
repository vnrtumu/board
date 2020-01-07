import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

// import {POINTERS} from '../data/dummy';
import Pointers from '../components/Pointers';
import {RadioButton} from 'react-native-paper';
export default class PointersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      checkbox: [],
      isModalVisible: false,
      checked1: false,
      checked2: false,
    };
  }

  componentDidMount() {
    const department_id = this.props.navigation.getParam('department_id');
    const chapter_id = this.props.navigation.getParam('chapter_id');
    AsyncStorage.getItem('output').then(output => {
      if (output) {
        const out = JSON.parse(output);
        const token = out.token;
        fetch('http://www.boardpointers.ml/api/pointers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            department_id: department_id,
            chapter_id: chapter_id,
          }),
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
            this.setState({
              dataSource: [...response.success],
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    AsyncStorage.getItem('output').then(output => {
      if (output) {
        const out = JSON.parse(output);
        const token = out.token;
        fetch('http://www.boardpointers.ml/api/priority', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
            this.setState({
              checkbox: [...response.success],
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  render() {
    const {dataSource} = this.state;
    const {checkbox} = this.state;
    const {checked} = this.state;
    return (
      <View style={styles.mainContainer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {dataSource.map((data, i) => (
            <TouchableOpacity
              key={i}
              onPress={this.toggleModal}
              swipeDirection={'left'}>
              <View style={styles.pointerStyle}>
                <Pointers description={data.pointer} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modelContainer}>
            {checkbox.map((item, i) => (
              <View style={styles.prioprityContainer}>
                <Text style={{fontSize: 20, color: `${item.color}`}}>
                  {item.name}
                </Text>
                <RadioButton
                  value={item.id}
                  status={checked === `${item.id}` ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: `${item.id}`});
                  }}
                />
              </View>
            ))}
            <View style={styles.closeBtnContainer}>
              <TouchableOpacity
                onPress={this.toggleModal}
                style={styles.closeBtn}>
                <Text style={styles.closeTxt}>Close</Text>
              </TouchableOpacity>
            </View>
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
    padding: 10,
  },
  modelContainer: {
    height: 225,
    // flex: 1,
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
    // flex: 1,
    backgroundColor: 'black',
    borderRadius: 50,
    width: 100,
    marginVertical: 25,
    marginHorizontal: '35%',
    paddingVertical: 5,
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
