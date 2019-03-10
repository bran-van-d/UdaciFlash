import React from 'react';
import AppNavigator from './components/AppNavigator';
import { setDummyData } from './utils/_deck';

export default class App extends React.Component {
  componentDidMount() {
    setDummyData();
  }

  render() {
    return (
      <AppNavigator />
    )
  }
}
