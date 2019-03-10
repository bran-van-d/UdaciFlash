import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> DeckName </Text>
        <Text> CardTotal </Text>



        <TouchableOpacity style={styles.btn} onPress={() => true}>
          <Text> Add Card </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => true}>
          <Text> Start Quiz </Text>
        </TouchableOpacity>

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
  },
  btn: {
    height: 50,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15
  }
});

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId,
    deck: state.find((dk) => dk.id === deckId)
  }
}

export default connect(mapStateToProps)(DetailScreen)