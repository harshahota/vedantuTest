import React, { Component } from 'react';
import { Text, Button,Dimensions,StyleSheet, View } from 'react-native';
import Profile from './profile.js';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

var { height, width } = Dimensions.get('window');

const MyDrawerNavigator = createDrawerNavigator(
  {
  profile: {
    screen: Profile,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);
