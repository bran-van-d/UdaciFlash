import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> DeckDetail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    margin: 25,
    backgroundColor: '#fff',
  }
});