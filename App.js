import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Generator from './src/generator';
import Header from './src/header';
import Input from './src/input';
import NumList from './src/numlist';
import Picker from './src/picker';
import Ex01 from './assets/images/ex01.jpg';
import Modal from './src/modal';

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c'],
  };

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddTextInput = () => {
    this.setState((prevState) => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Modal />
        {/* <Image
          // source={Ex01}
          source={{uri: 'https://picsum.photos/id/237/200/300'}}
          style={styles.image}
          resizeMode="contain"
          onLoadEnd={() => alert('Image loaded!')}
        /> */}
        {/* <Picker />
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true} // 다중 줄
          maxLength={100} // 글자수 제한
          autoCapitalize={'none'} // 대문자 자동 수정 방지
          // editable={false}
        />
        <Button title="Add Text Input" onPress={this.onAddTextInput} />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text style={styles.mainText} key={idx}>
              {item}
            </Text>
          ))}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  image: {
    backgroundColor: 'red',
    width: '100%',
    height: 700,
  },
});

export default App;
