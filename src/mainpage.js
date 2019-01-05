import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Home from './components/home/home.js';
import Profile from './components/drawer/profile.js'
import Drawer from './components/drawer/drawer';
import Header from './header.js';
const AppNavigator = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: () => ({
      header: <Header />
    }),
  },
});

export default createAppContainer(AppNavigator);
