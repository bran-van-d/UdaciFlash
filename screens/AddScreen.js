import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class AddScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Add Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
