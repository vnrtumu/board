import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import CardOptions from '../components/CardOptions';
import Icon from 'react-native-vector-icons/Fontisto';
import ImagePicker from 'react-native-image-picker';

export default class ProfileScreen extends Component {
  state = {
    ImageSource: null,
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

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          ImageSource: source,
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
            <Text style={styles.textStyle}>Venkat Reddy</Text>
            <Text style={styles.locationTextStyle}>Btm Layout, Banglore</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <CardOptions
            title="vnr.tumu@gmail.com"
            icon="envelope"
            style={styles.cardOptions}
          />
          <CardOptions
            title="+91 8790010929"
            icon="phone"
            style={styles.cardOptions}
          />
          <CardOptions
            title="Change Password"
            icon="gear"
            style={styles.cardOptions}
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
