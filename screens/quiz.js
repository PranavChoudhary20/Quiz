import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. Imagine this is a Question</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionbutton}>
              <Text style={styles.option}>Option 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  option: {
    fontSize: 18,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#00688B',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 18,
    fontWeight: '900',
  },
  question: {
    fontSize: 28,
    color: '#000000',
  },
  optionbutton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
