import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Animated, Easing } from 'react-native';
import { setDummyData } from '../utils/_deck';
import { receiveDecks } from '../actions';
import { connect } from 'react-redux';
import { AppLoading } from 'expo'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false
    }
    this.rotateValue = new Animated.Value(0); 
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

    let rotateDeck = this.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    })

    let transformStyle = { ...styles.deck, transform: [{ rotate: rotateDeck }] };

    return (
      <ScrollView style={styles.container}>
        <View style={styles.column}>
          {decks.length > 0 && decks.map((deck) => {
            const { id, name, cards } = deck;

            return (
              <Animated.View 
                key={id} 
                style={transformStyle}
              >
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => {
                    Animated.timing(this.rotateValue, {
                      toValue: 1,
                      duration: 500,
                      easing: Easing.linear
                    }).start();

                    setTimeout(() => {
                      this.props.navigation.navigate(
                        'DeckDetail',
                        { deckId: deck.id, deckName: deck.name }
                      )

                      this.rotateValue.setValue(0);
                    }, 500)

                  }}
                >
                  <Text> {name} </Text>
                  <Text> {cards.length} cards </Text>
                </TouchableOpacity>
              </Animated.View>
            )
          })}

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#fff',
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

// onPress = {() => this.props.navigation.navigate(
//   'DeckDetail',
//   { deckId: deck.id, deckName: deck.name }
// )}