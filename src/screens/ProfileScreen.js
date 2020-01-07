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

export default class ProfileScreen extends Component {
  state = {
    email: '',
    name: '',
    ImageSource: null,
  };

  componentDidMount() {
    AsyncStorage.getItem('output').then(output => {
      if (output) {
        const out = JSON.parse(output);
        const token = out.token;
        console.log(token);
        fetch('http://www.boardpointers.ml/api/profileDisplay', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
          .then(response => response.json())
          .then(response => {
            this.setState({
              email: response.success.email,
              name: response.success.name,
              ImageSource: {
                uri: response.success.path + response.success.profile,
              },
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }

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
      console.log('Response = ', imgResponse);

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
        AsyncStorage.getItem('output').then(output => {
          if (output) {
            const out = JSON.parse(output);
            const token = out.token;
            fetch('http://www.boardpointers.ml/api/profileSave', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
              body: JSON.stringify({
                profile: imgResponse.data,
              }),
            })
              .then(response => response.json())
              .then(responseJson => {
                console.log(responseJson);
              })
              .catch(error => {
                console.error(error);
              });
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
          <CardOptions
            title="Log Out"
            icon="sign-out"
            style={styles.cardOptions}
            onSelect={() =>
              this.props.navigation.navigate({routeName: 'Login'})
            }
          />
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
