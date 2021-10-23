import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';
import image1 from './images/Quiz.jpg';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={image1} style={styles.banner} resizeMode="contain" />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 500,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: '900',
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#00688B',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
});
