/* eslint-disable react-native/no-inline-styles */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import Pointers from '../components/Pointers';
import {RadioButton} from 'react-native-paper';
import {WSnackBar} from 'react-native-smart-tip';
import axios from 'axios';
import config from '../../config';
import PTRView from 'react-native-pull-to-refresh';

export default class PointersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      checkbox: [],
      isModalVisible: false,
      checkedValue: '',
      pointer_id: '',
      priority_id: '',
      isLoading: true,
    };
  }
  _refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  refreshScreen = () => {
    const departmentId = this.props.navigation.getParam('department_id');
    const chapterId = this.props.navigation.getParam('chapter_id');
    const chapterData = {
      department_id: departmentId,
      chapter_id: chapterId,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post(`${config.API_URL}/pointers`, chapterData, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            this.setState({
              isLoading: false,
              dataSource: [...res.data.success],
            });
          })
          .catch(err => {
            const snackBarOpts = {
              data: 'Please check the network first.',
              position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
              actionClick: () => {
                // Click Action
              },
            };
            WSnackBar.show(snackBarOpts);
          });
      }
    });
  };

  componentDidMount() {
    this.refreshScreen();
  }

  openModel = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .get(`${config.API_URL}/priority`, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            this.setState({
              checkbox: [...res.data.success],
            });
          })
          .catch(err => {
            const snackBarOpts = {
              data: 'Please check the network first.',
              position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
              actionClick: () => {
                // Click Action
              },
            };
            WSnackBar.show(snackBarOpts);
          });
      }
    });
  };

  closeModel = id => {
    const departmentId = this.props.navigation.getParam('department_id');
    const chapterId = this.props.navigation.getParam('chapter_id');
    const priorityId = id;
    const pointerId = this.state.pointer_id;
    const newMark = {
      department_id: departmentId,
      chapter_id: chapterId,
      pointer_id: pointerId,
      priority_id: priorityId,
    };
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .post(`${config.API_URL}/newBookmark`, newMark, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            const snackBarOpts = {
              data: 'Your Bookmarked this Pointer Successfully',
              position: WSnackBar.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.INDEFINITE, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
              actionClick: this.refreshScreen,
            };
            WSnackBar.show(snackBarOpts);
          })
          .catch(err => {
            const snackBarOpts = {
              data: 'Please check the network first.',
              position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
              duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
              textColor: '#ff490b',
              backgroundColor: '#050405',
              actionText: 'close',
              actionTextColor: 'white',
              actionClick: () => {
                // this.reload();
              },
            };
            WSnackBar.show(snackBarOpts);
          });
      }
    });
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  hideModel = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    const {dataSource} = this.state;
    const {checkbox} = this.state;
    const {checked} = this.state;
    if (this.state.isLoading) {
      return (
        <PTRView onRefresh={this._refresh}>
          <View
            style={{
              flex: 1,
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}>
            <ActivityIndicator size={'large'} />
            <Text>Loding...</Text>
          </View>
        </PTRView>
      );
    }
    return (
      <PTRView onRefresh={this._refresh}>
        <View style={styles.mainContainer}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {dataSource.map((data, i) => {
              if (data.color === null) {
                return (
                  <TouchableOpacity
                    key={i}
                    swipeDirection={'left'}
                    onPress={() => {
                      this.setState(
                        {
                          pointer_id: `${data.pointer_id}`,
                        },
                        () => {
                          this.openModel(data.pointer_id);
                        },
                      );
                    }}>
                    <View style={styles.pointerStyle}>
                      <Pointers description={data.pointer} />
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <View style={styles.pointerStyle} key={i}>
                    <Pointers
                      description={data.pointer}
                      style={{backgroundColor: `${data.color}`}}
                    />
                  </View>
                );
              }
            })}
          </ScrollView>

          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.modelContainer}>
              {checkbox.map((item, i) => (
                <View style={styles.prioprityContainer} key={i}>
                  <Text style={{fontSize: 20, color: `${item.color}`}}>
                    {item.name}
                  </Text>
                  <RadioButton
                    value={item.id}
                    status={checked === `${item.id}` ? 'checked' : 'unchecked'}
                    onPress={() => {
                      this.setState(
                        {
                          checked: `${item.id}`,
                          checkedValue: `${item.id}`,
                        },
                        () => {
                          this.closeModel(item.id);
                        },
                      );
                    }}
                  />
                </View>
              ))}
              <TouchableOpacity
                onPress={this.hideModel}
                style={styles.closeBtnContainer}>
                <Text style={styles.closeBtn}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </PTRView>
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
    height: 200,
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
    marginTop: 10,
    backgroundColor: 'black',
    borderRadius: 40,
    width: 70,
    marginHorizontal: '35%',
    paddingVertical: 5,
    alignItems: 'center',
  },
  closeBtn: {
    color: '#fff',
  },
  closeTxt: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
