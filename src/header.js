import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var { height, width } = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('the width is ',width)
    return (
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <View style={{marginLeft: width/20}}><Icon name="bars" size={width/17} color="white" /></View>
          <Icon name="github" size={width/8} color="white" />
          <View style={{marginRight: width/20}}><Icon name="bell" size={width/17} color="white" /></View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: height / 10,
  },
  headerContainer: {
    top: width/41,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
});
