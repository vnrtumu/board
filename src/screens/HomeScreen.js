import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

import Card from '../components/Card';
import {ScrollView} from 'react-native-gesture-handler';

let img1 = {
  uri:
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
};
let img2 = {
  uri:
    'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
};
let img3 = {
  uri:
    'https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
};
let img4 = {
  uri:
    'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
};

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          title="Neurology"
          style={styles.inputContainer}
          url={img1}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Chapters',
              params: {
                ChapterTitle: 'Neurology',
              },
            });
          }}
        />
        <Card
          title="Cardiology"
          style={styles.inputContainer}
          url={img2}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Chapters',
              params: {
                ChapterTitle: 'Cardiology',
              },
            });
          }}
        />
        <Card
          title="Gastroenterology"
          style={styles.inputContainer}
          url={img3}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Chapters',
              params: {
                ChapterTitle: 'Gastroenterology',
              },
            });
          }}
        />
        <Card
          title="Microbiology"
          style={styles.inputContainer}
          url={img4}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Chapters',
              params: {
                ChapterTitle: 'Microbiology',
              },
            });
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    // opacity: 0.8,
    marginVertical: 10,
    width: 350,
    maxWidth: '100%',
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textViewStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textStyle: {
    zIndex: 1000,
    color: 'black',
  },
});

export default HomeScreen;
