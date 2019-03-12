import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { deleteDeck } from '../actions';
import { AppLoading } from 'expo'

class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsRemaing: '',
      questionTotal: '',
      questionsCorrect: '',
      questionsIncorrect: '',
      seeAnswer: false,
    }
  }

  flipCard = () => {
    this.setState({ seeAnswer: true })
  }

  render() {
    const { cardList } = this.props;
    const { seeAnswer } = this.state;

    if (cardList === undefined) {
      return <AppLoading />
    }

    const cardToShow = cardList.find((card) => card.id = cardList.length);

    console.log(cardToShow);

    return (
      <View style={styles.container}>
        {cardList.length === 0
          ? <Text> You have no cards. Please add some before taking the quiz! </Text>
          : 
            <View style={styles.questionAnswer}>
                {seeAnswer
                  ? <Text style={{ fontSize: 40 }}> {cardToShow.answer} </Text>
                  : <Text style={{ fontSize: 40 }}> {cardToShow.question} </Text> 
                }
            </View>
        }

        <TouchableOpacity style={styles.btn} onPress={this.flipCard}>
          <Text> Show Answer </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => true}>
          <Text> Correct </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => true}>
          <Text> Incorrect </Text>
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
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: 200,
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
  questionAnswer: {
    borderColor: 'black',
    borderWidth: 1,
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params;

  return {
    cardList: deck.cards
  }
}

export default connect(mapStateToProps)(QuizScreen)