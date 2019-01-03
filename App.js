import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
import MainApp from './src/index';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}
