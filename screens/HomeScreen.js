import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { setDummyData } from '../utils/_deck';
import { receiveDecks } from '../actions';
import { connect } from 'react-redux';
import { AppLoading } from 'expo'

class HomeScreen extends React.Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props;

    setDummyData()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => {
        this.setState(() => ({ready: true}))
      })
  }

  render() {
    const { decks } = this.props;
    const { ready } = this.state;

    if (ready === false) {
      return <AppLoading />
    }

    console.log(decks);

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          {decks.length > 0 && decks.map((deck) => {
            const { id, name, cards } = deck;

            return (
              <View key={id} style={styles.deck}>
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => this.props.navigation.navigate(
                    'DeckDetail',
                    { deckId: deck.id, deckName: deck.name }
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

function mapStateToProps(decks) {
  return {
    decks: Object.values(decks)
  }
}

export default connect(mapStateToProps)(HomeScreen)