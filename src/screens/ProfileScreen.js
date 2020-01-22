import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import CardOptions from '../components/CardOptions';
import Icon from 'react-native-vector-icons/Fontisto';
import ImagePicker from 'react-native-image-picker';

import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import config from '../../config';
export default class ProfileScreen extends Component {
  state = {
    email: '',
    name: '',
    ImageSource: null,
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        axios
          .get(`${config.API_URL}/profileDisplay`, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(res => {
            this.setState({
              email: res.data.success.email,
              name: res.data.success.name,
              ImageSource: {
                uri: res.data.success.path + res.data.success.profile,
              },
            });
          })
          .catch(err =>
            Snackbar.show({
              title: 'Something Went Wrong!',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: '#fff',
              color: 'red',
              action: {
                title: 'Close',
                color: 'green',
              },
            }),
          );
      }
    });
  }

  clearAsyncStorage = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, imgResponse => {
      // console.log('Response = ', imgResponse);

      if (imgResponse.didCancel) {
        console.log('User cancelled photo picker');
      } else if (imgResponse.error) {
        console.log('ImagePicker Error: ', imgResponse.error);
      } else if (imgResponse.customButton) {
        console.log('User tapped custom button: ', imgResponse.customButton);
      } else {
        let source = {uri: imgResponse.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          ImageSource: source,
        });
        const profileSave = {
          profile: imgResponse.data,
        };
        AsyncStorage.getItem('token').then(token => {
          if (token) {
            axios
              .post(`${config.API_URL}/profileSave`, profileSave, {
                headers: {
                  Authorization: 'Bearer ' + token,
                },
              })
              .then(res => {
                Snackbar.show({
                  title: 'Profile Image Updated Succesfully!',
                  duration: Snackbar.LENGTH_SHORT,
                  backgroundColor: '#fff',
                  color: 'green',
                  action: {
                    title: 'Close',
                    color: 'green',
                  },
                });
              })
              .catch(err =>
                Snackbar.show({
                  title: 'Something Went Wrong!',
                  duration: Snackbar.LENGTH_SHORT,
                  backgroundColor: '#fff',
                  color: 'red',
                  action: {
                    title: 'Close',
                    color: 'green',
                  },
                }),
              );
          }
        });
      }
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.prrileContainer}>
          <View style={styles.photoContainer}>
            {this.state.ImageSource === null ? (
              <Image
                source={require('../assets/images/profile.jpg')}
                style={styles.profileImg}
              />
            ) : (
              <Image
                style={styles.profileImg}
                source={this.state.ImageSource}
              />
            )}
            <View style={styles.uploadIconContainer}>
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Icon
                  name="camera"
                  size={25}
                  color="#900c3f"
                  style={styles.uploadIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.textStyle}>{this.state.name}</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <CardOptions
            title={this.state.email}
            icon="envelope"
            style={styles.cardOptions}
          />
          <CardOptions
            title="Change Password"
            icon="gear"
            style={styles.cardOptions}
            onSelect={() =>
              this.props.navigation.navigate({routeName: 'Change'})
            }
          />
          <CardOptions
            title="FeedBack"
            icon="feed"
            style={styles.cardOptions}
            onSelect={() =>
              this.props.navigation.navigate({routeName: 'FeedBack'})
            }
          />
          {/* <TouchableOpacity onPress={this.clearAsyncStorage}> */}
          <CardOptions
            title="Log Out"
            icon="sign-out"
            style={styles.cardOptions}
            onSelect={this.clearAsyncStorage}
          />
          {/* </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  prrileContainer: {
    height: 250,
    width: '100%',
    backgroundColor: '#900c3f',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photoContainer: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 28,
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
    position: 'absolute',
  },
  nameContainer: {
    marginTop: 175,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  uploadIconContainer: {
    marginTop: 90,
    marginLeft: 90,
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  uploadIcon: {
    color: 'black',
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    alignSelf: 'center',
  },
  locationTextStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
  settingsContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
  cardOptions: {
    marginVertical: 10,
    padding: 8,
  },
});
