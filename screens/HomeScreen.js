import React from 'react';
import { AsyncStorage } from 'react-native'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DECK_STORAGE_KEY } from '../utils/_deck';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: []
    }
  }

  componentDidMount() {
    AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then((results) => {
        this.setState({ decks: JSON.parse(results)})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          {this.state.decks.length > 0 && this.state.decks.map((deck) => {
            const { id, name, cards } = deck;

            return (
              <View key={id} style={styles.deck}>
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => this.props.navigation.navigate(
                    'DeckDetail',
                    { deckId: deck.id }
                  )}
                >
                  <Text> {name} </Text>
                  <Text> {cards.length} cards </Text>
                </TouchableOpacity>
              </View>
            )
          })}

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  deck: {
    height: 130,
    width: 150,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5
  }
});
