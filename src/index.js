import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';
import Home from './components/home/home.js';
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
