import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 40,
    fontWeight: '900',
  },
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
