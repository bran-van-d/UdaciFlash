import React from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { addDeckToStorage } from '../utils/api';
import { NavigationActions } from 'react-navigation'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.AndroidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}
class AddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  submit = () => {
    const { decks } = this.props;

    const key = decks.length + 1;
    const entry = {
      id: key,
      name: this.state.text,
      cards: []
    }

    this.props.dispatch(addDeck({
      [key]: entry
    }))

    this.setState({ text: ''})

    this.props.navigation.goBack(null);
    // addDeckToStorage({ key, entry });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text> What is the title of the new deck ?</Text>
        <TextInput
          style={{height: 40, borderColor: 'red', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder='Deck Title'
          value={this.state.text}
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

function mapStateToProps(decks) {
  return {
    decks: Object.values(decks)
  }
}

export default connect(mapStateToProps)(AddScreen)