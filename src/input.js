import React, {Component} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = () => {
  const [myTextInput, setMyTextInput] = useState('');
  const onChangeInput = (event) => {
    setMyTextInput(event);
  };

  return (
    <View style={styles.mainView}>
      <TextInput
        value={myTextInput}
        style={styles.input}
        onChangeText={onChangeInput}
        multiline={true} // 다중 줄
        maxLength={100} // 글자수 제한
        autoCapitalize={'none'} // 대문자 자동 수정 방지
        // editable={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;

// Class Component

// import React, {Component} from 'react';
// import {View, Text, StyleSheet, TextInput} from 'react-native';

// class Input extends Component {
//   state = {
//     myTextInput: '',
//   };

//   onChangeInput = (event) => {
//     this.setState({
//       myTextInput: event,
//     });
//   };

//   render() {
//     return (
//       <View style={styles.mainView}>
//         <TextInput
//           value={this.state.myTextInput}
//           style={styles.input}
//           onChangeText={this.onChangeInput}
//           multiline={true} // 다중 줄
//           maxLength={100} // 글자수 제한
//           autoCapitalize={'none'} // 대문자 자동 수정 방지
//           // editable={false}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainView: {
//     width: '100%',
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#cecece',
//     marginTop: 20,
//     fontSize: 25,
//     padding: 10,
//   },
// });

// export default Input;
