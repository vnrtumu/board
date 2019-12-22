import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import CardOptions from '../components/CardOptions';

const ProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.prrileContainer}>
        <View style={styles.photoContainer}>
          <Image
            source={require('../assets/images/profile.jpg')}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.textStyle}>Venkat Reddy</Text>
          <Text style={styles.locationTextStyle}>Btm Layout, Banglore</Text>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <CardOptions
          title="vnr.tumu@gmail.com"
          icon="email"
          style={styles.cardOptions}
        />
        <CardOptions
          title="+91 8790010929"
          icon="phone"
          style={styles.cardOptions}
        />
        <CardOptions
          title="Settings"
          icon="player-settings"
          style={styles.cardOptions}
        />
      </View>
    </View>
  );
};

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
  },
  nameContainer: {
    marginTop: 175,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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

export default ProfileScreen;
