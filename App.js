import React from 'react';
import AppNavigator from './components/AppNavigator';
import { setLocalNotification } from './utils/_deck';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { View } from 'react-native'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </Provider>
    )
  }
}
