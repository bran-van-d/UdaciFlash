import React from 'react';
import { AsyncStorage } from 'react-native'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DECK_STORAGE_KEY } from '../utils/_deck';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [
        {
          id: 1,
          name: 'Deck 1',
          cards: [
            {
              id: 1,
              question: '2 + 2 ',
              answer: '4'
            },
            {
              id: 2,
              question: '2 x 10 ',
              answer: '20'
            }
          ]
        },
        {
          id: 2,
          name: 'Deck 2',
          cards: [
            {
              id: 1,
              question: '10 - 2 ',
              answer: '8'
            },
            {
              id: 2,
              question: '7 x 3 ',
              answer: '21'
            }
          ]
        },
      ],
      testDeck: []
    }
  }

  componentDidMount() {
    AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then((results) => {
        this.setState({ testDeck: JSON.parse(results)})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          {this.state.decks.map((deck) => {
            const { id, name, cards } = deck;

            return (
              <View key={id} style={styles.deck}> 
                <TouchableOpacity 
                  style={styles.container} 
                  onPress={() => this.props.navigation.navigate(
                    'DeckDetail',
                    { deckId: 1}
                  )}
                > 
                  <Text> {name} </Text>
                  <Text> {cards.length} cards </Text>
                </TouchableOpacity>
              </View>
            )
          })}

        </View>

        <View style={styles.column}>
          {this.state.testDeck.length > 0 && this.state.testDeck.map((deck) => {
            const { id, name, cards } = deck;

            return (
              <View key={id} style={styles.deck}>
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => this.props.navigation.navigate(
                    'DeckDetail',
                    { deckId: 1 }
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
    height: 120,
    width: 120,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5
  }
});
