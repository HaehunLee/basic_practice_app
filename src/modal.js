import React, {Component} from 'react';
import {useState} from 'react';
import {View, Text, Button, Modal} from 'react-native';

const ModalComponent = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(modal ? false : true);
  };

  return (
    <View style={{width: '100%'}}>
      <Button title="Open Modal" onPress={handleModal} />

      <Modal
        visible={modal}
        animationType={'slide'} // 'none | slide | fade'
        onShow={() => alert('show modal')}>
        <View style={{marginTop: 60, backgroundColor: 'red'}}>
          <Text>This is modal content</Text>
        </View>
        <Button title="Go Back" onPress={handleModal} />
      </Modal>
    </View>
  );
};

export default ModalComponent;

// Class component

// import React, {Component} from 'react';
// import {View, Text, Button, Modal} from 'react-native';

// class ModalComponent extends Component {
//   state = {
//     modal: false,
//   };

//   handleModal = () => {
//     this.setState({
//       modal: this.state.modal ? false : true,
//     });
//   };

//   render() {
//     return (
//       <View style={{width: '100%'}}>
//         <Button title="Open Modal" onPress={this.handleModal} />

//         <Modal
//           visible={this.state.modal}
//           animationType={'slide'} // 'none | slide | fade'
//           onShow={() => alert('show modal')}>
//           <View style={{marginTop: 60, backgroundColor: 'red'}}>
//             <Text>This is modal content</Text>
//           </View>
//           <Button title="Go Back" onPress={this.handleModal} />
//         </Modal>
//       </View>
//     );
//   }
// }

// export default ModalComponent;
