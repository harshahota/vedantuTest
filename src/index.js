import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import MainPage from './mainpage.js';
import Profile from './components/drawer/profile.js';
const AppNavigator = createDrawerNavigator(
  {
  mainpage: {
    screen: MainPage,
  },
},
{
  contentComponent: Profile,
  drawerWidth: 300
}
);

export default createAppContainer(AppNavigator);
