import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const encouragingSentences = [
  "Well done! You nailed it!",
  "Fantastic job! Keep it up!",
  "Amazing work! You're a star!",
  "Congratulations! You're unstoppable!",
];

const getRandomEncouragingSentence = () => {
  const randomIndex = Math.floor(Math.random() * encouragingSentences.length);
  return encouragingSentences[randomIndex];
};

const SuccessScreen = ({ route, navigation }) => {
  const { successCount } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.encouragingText}>{getRandomEncouragingSentence()}</Text>
      <Text style={styles.subtitle}>{`You've succeeded ${successCount} time(s)!`}</Text>
      <Text style={styles.subtitle}>{`Press to learn a new word!`}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#DDDDDD' }]}
        onPress={() => navigation.navigate('StoryGen', { successCount: successCount })}
      >
        <Text style={styles.buttonText}>STORY GEN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#673AB7', // Black background color
  },
  title: {
    fontSize: 50,
    fontFamily: 'Times New Roman',
    marginBottom: 20,
    color: '#fff', // White text color
  },
  encouragingText: {
    fontSize: 24,
    fontFamily: 'Times New Roman',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // White text color
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Times New Roman',
    marginBottom: 40,
    textAlign: 'center',
    color: '#fff', // White text color
  },
  button: {
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000', // Black text color
    fontFamily: 'Times New Roman',
    fontSize: 50,
  },
});

export default SuccessScreen;
