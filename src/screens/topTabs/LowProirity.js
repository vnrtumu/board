import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {Thumbnail, List, ListItem, Separator} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Left, Body, Right, Title} from 'native-base';

export default class LowPriority extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#fff'}}>
          <Collapse style={styles.departmentTitle}>
            <CollapseHeader style={{height: 40}}>
              <Separator bordered style={styles.SeparatorStyle}>
                <Text style={{color: '#fff', fontSize: 20}}>
                  Department Title
                </Text>
              </Separator>
            </CollapseHeader>
            <CollapseBody>
              <ListItem>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                  Chapter Title
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  In a story we follow a character or a series of characters on
                  a journey as they pursue something up against certain
                  obstacles. Okay, that's a beginning. ... A story is the
                  telling of an event, either true or fictional, in such a way
                  that the listener experiences or learns something just by the
                  fact that he heard the story
                </Text>
              </ListItem>
            </CollapseBody>
          </Collapse>

          <Collapse style={{marginLeft: 20, marginRight: 20}}>
            <CollapseHeader style={{height: 40}}>
              <Separator bordered style={styles.SeparatorStyle}>
                <Text style={{color: '#fff', fontSize: 20}}>
                  Department Title
                </Text>
              </Separator>
            </CollapseHeader>
            <CollapseBody>
              <ListItem>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                  Chapter Title
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  In a story we follow a character or a series of characters on
                  a journey as they pursue something up against certain
                  obstacles. Okay, that's a beginning. ... A story is the
                  telling of an event, either true or fictional, in such a way
                  that the listener experiences or learns something just by the
                  fact that he heard the story
                </Text>
              </ListItem>
            </CollapseBody>
          </Collapse>

          <Collapse style={{marginLeft: 20, marginRight: 20}}>
            <CollapseHeader style={{height: 40}}>
              <Separator bordered style={styles.SeparatorStyle}>
                <Text style={{color: '#fff', fontSize: 20}}>
                  Department Title
                </Text>
              </Separator>
            </CollapseHeader>
            <CollapseBody>
              <ListItem>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                  Chapter Title
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  In a story we follow a character or a series of characters on
                  a journey as they pursue something up against certain
                  obstacles. Okay, that's a beginning. ... A story is the
                  telling of an event, either true or fictional, in such a way
                  that the listener experiences or learns something just by the
                  fact that he heard the story
                </Text>
              </ListItem>
            </CollapseBody>
          </Collapse>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  departmentTitle: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  SeparatorStyle: {
    backgroundColor: '#008000',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
