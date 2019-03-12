import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo'

class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsRemaining: 'loading',
      questionTotal: 0,
      questionsCorrect: 0,
      questionsIncorrect: 0,
      seeAnswer: false,
      quizComplete: false
    }
  }

  flipCard = () => {
    this.setState({ seeAnswer: true })
  }

  selectAnswer = (choice) => {
    this.setState(() => ({
      questionsRemaining: this.state.questionsRemaining - 1 === 0 ? 0 : this.state.questionsRemaining - 1,
      questionsCorrect: choice === 'correct' ? this.state.questionsCorrect + 1 : this.state.questionsCorrect,
      questionsIncorrect: choice === 'incorrect' ? this.state.questionsIncorrect + 1 : this.state.questionsIncorrect,
      seeAnswer: false
    }))
  }

  componentDidMount() {
    const cardTotal = this.props.cardList.length;

    this.setState(() => ({ 
      questionsRemaining: cardTotal,
      questionTotal: cardTotal
      }))
  }

  render() {
    const { cardList } = this.props;
    const { seeAnswer, questionsRemaining, quizComplete, questionsCorrect, questionsIncorrect } = this.state;

    if (questionsRemaining === 'loading') {
      return <AppLoading />
    }

    if(questionsRemaining === 0 && quizComplete !== true) {
      this.setState({quizComplete: true})
    }

    const cardToShow = cardList.find((card) => card.id === questionsRemaining);

    return (
      <View style={styles.container}>
        <Text> Questions Remaining: {questionsRemaining} </Text>
        {cardList.length === 0
          ? <Text> You have no cards. Please add some before taking the quiz! </Text>
          : <View style={styles.container}>
              {quizComplete || cardToShow === undefined
                ? <View> 
                    <Text> Quiz Complete </Text>
                    <Text> Correct: {questionsCorrect} </Text>
                    <Text> Incorrect: {questionsIncorrect} </Text>
                  </View>
                : <View >
                    {seeAnswer
                      ? 
                        <View>
                          <View style={styles.questionAnswer}> 
                            <Text style={{ fontSize: 40 }}> {cardToShow.answer} </Text>
                          </View>  
                          <View> 
                            <TouchableOpacity style={styles.btn} onPress={() => this.selectAnswer('correct')}>
                              <Text> Correct </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} onPress={() => this.selectAnswer('incorrect')}>
                              <Text> Incorrect </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      : 
                        <View style={styles.container}> 
                          <View style={styles.questionAnswer}>
                              <Text style={{ fontSize: 40 }}> {cardToShow.question} </Text>
                            </View> 
                            <View>
                              <TouchableOpacity style={styles.btn} onPress={this.flipCard}>
                                <Text> Show Answer </Text>
                              </TouchableOpacity>
                            </View>
                        </View>

                    }
                  </View>
              }
            </View>
          }
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