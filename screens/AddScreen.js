import React from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity 
} from 'react-native';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.AndroidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

submit = () => {
  return true;
}

export default class AddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Deck Name'
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text> What is the title of the new deck ?</Text>
        <TextInput
          style={{height: 40, borderColor: 'red', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
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