import { data } from './data';
import CustomModal from './components/CustomModal';
import LIstHeader from './components/LIstHeader';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedItem, setSelectedItem] = useState({});

  const handleOnSelectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  };

  const handleOnCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  const [fontsLoaded] = useFonts({
    'DancingScript-Regularsans-serif': require('./assets/fonts/DancingScript-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<LIstHeader />}
        data={data}
        renderItem={({ item }) => (
          <>
            <Pressable
              onPress={() => handleOnSelectItem(item)}
              style={styles.item}
            >
              <View style={styles.documentContainer}>
                <Ionicons name="document-text" size={24} color="white" />
              </View>
              <Text style={styles.name}>{item.name}</Text>
            </Pressable>
          </>
        )}
        keyExtractor={(key) => key.id}
        selectedItem
      />
      <CustomModal
        isVisible={modalVisible}
        onClose={handleOnCloseModal}
        item={selectedItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 30,
  },

  documentContainer: {
    backgroundColor: '#4661BC',
    padding: 10,
    borderRadius: 50,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  name: {
    fontSize: 32,
    fontFamily: 'DancingScript-Regularsans-serif',
  },
});
