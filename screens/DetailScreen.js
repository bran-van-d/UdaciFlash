import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { removeDeck, addDeck } from '../utils/api';
import { deleteDeck } from '../actions';

class DetailScreen extends React.Component {
  deleteDeck(deckId) {
    const { remove, goBack } = this.props;

    remove();
    goBack();
    removeDeck(deckId)

  }

  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Text> {deck.name} </Text>
        <Text> {deck.cards.length} cards </Text>

        <TouchableOpacity style={styles.btn} onPress={() => true}>
          <Text> Add Card </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => true}>
          <Text> Start Quiz </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteBtn} onPress={() => this.deleteDeck(deck.id)}>
          <Text> Delete Deck </Text>
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
    alignItems: 'center'
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
  },
  deleteBtn: {
    color: 'crimson',
    borderColor: 'crimson',
    borderWidth: 1
  }
});

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId,
    deck: Object.values(state).find((dk) => dk.id = deckId)
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  const { deckId, deckName } = navigation.state.params;

  return {
    remove: () => dispatch(deleteDeck(deckName)),
    goBack: () => navigation.goBack()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)