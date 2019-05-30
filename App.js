import React from 'react';
import AppSource from './src';
import store from './src/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppSource />
      </Provider>
    )
  }
}