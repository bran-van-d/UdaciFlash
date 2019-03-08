import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Deck View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  }
});
