import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';

export default function CustomModal(props) {
  const { isVisible, item, onClose } = props;

  const [fontsLoaded] = useFonts({
    'DancingScript-Regularsans-serif': require('../../assets/fonts/DancingScript-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <Modal visible={isVisible} onRequestClose={onClose} style={styles.modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}> Name : {item.name}</Text>
          <Text style={styles.modalText}> ID : {item.id}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Back</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    marginTop: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: 100,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'DancingScript-Regularsans-serif',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'DancingScript-Regularsans-serif',
  },
  modal: {
    flex: 1,
    padding: 20,
  },
});
