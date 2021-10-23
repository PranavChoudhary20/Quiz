import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image1 from './images/Quiz.jpg';
const Result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text style={styles.black}>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={image1} style={styles.banner} resizeMode="contain" />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.black}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 500,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  black: {
    color: '#000000',
  },
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    height: '100%',
  },
});
