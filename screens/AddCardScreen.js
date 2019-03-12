import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.AndroidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}
class AddCardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: '',
      answerText: ''

    }
  }

  submit = () => {
    const { deck } = this.props.navigation.state.params;
    const { questionText, answerText } = this.state;
    const deckObjectIndex = deck.id - 1;

    const entry = {
      id: deck.cards.length + 1,
      question: questionText,
      answer: answerText
    }

    this.props.dispatch(addCardToDeck(deckObjectIndex, entry));

    this.setState({ questionText: '', answerText: '' })

    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
          onChangeText={(questionText) => this.setState({ questionText })}
          placeholder='Question'
          value={this.state.questionText}
        />

        <TextInput
          style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
          onChangeText={(answerText) => this.setState({ answerText })}
          placeholder='Answer'
          value={this.state.answerText}
        />

        <SubmitBtn onPress={this.submit} />
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
  AndroidSubmitBtn: {
    backgroundColor: 'skyblue',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
});

function mapStateToProps(decks, { navigation }) {
  return {
    decks: Object.values(decks),
    deck: navigation.state.deck
  }
}

export default connect(mapStateToProps)(AddCardScreen)