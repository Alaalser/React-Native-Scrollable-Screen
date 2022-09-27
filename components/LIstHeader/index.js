import { View, Image, Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default ListHeader = () => {
  const [fontsLoaded] = useFonts({
    'DancingScript-Regularsans-serif': require('../../assets/fonts/DancingScript-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/Elon_Musk.jpg')}
            style={styles.image}
          />
          <Text style={styles.greetingText}>Hi, Elon</Text>
        </View>

        <FontAwesome
          name="bell"
          size={35}
          color="black"
          style={{ marginTop: 80 }}
        />
      </View>
      <View style={styles.headerList}>
        <Text style={styles.header}>Users Names List</Text>
        <View style={styles.headerRight}>
          <Text style={styles.viewText}>View All</Text>
          <AntDesign name="caretright" size={24} color="black" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 50,
  },
  greetingText: {
    fontFamily: 'DancingScript-Regularsans-serif',
    fontSize: 30,
    paddingTop: 80,
    paddingLeft: 20,
    fontWeight: 'semibold',
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 25,
    marginVertical: 15,
    fontFamily: 'DancingScript-Regularsans-serif',
  },

  viewText: {
    fontSize: 20,
    marginVertical: 15,
    fontFamily: 'DancingScript-Regularsans-serif',
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
