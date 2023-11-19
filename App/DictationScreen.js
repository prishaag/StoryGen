import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const DictationScreen = ({ navigation, route }) => {
  const [userInput, setUserInput] = useState('');
  const { successCount, word, level } = route.params;

  const checkDictation = () => {
    if (userInput.toLowerCase() === word.toLowerCase()) {
      navigation.navigate('SuccessScreen', { successCount: successCount + 1 });
    } else {
      navigation.navigate('MainScreen', { passedVariable: word, lev: level, count: successCount });
    }
  };

  const openDictionaryLink = () => {
    const dictionaryLink = `https://www.dictionary.com/browse/${word.toLowerCase()}#kids`;
  
    Linking.openURL(dictionaryLink).catch((err) => console.error('Error opening link: ', err));
  };
  

  return (
    <View style={styles.container}>
    <Text style={[styles.title, styles.centerText]}>StoryGen</Text>
      <Text style={styles.label}>Spell it!</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
        placeholder="Type the word here"
      />

      <TouchableOpacity style={styles.button} onPress={checkDictation}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={openDictionaryLink}>
        <Text style={styles.linkText}>Dictionary Link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  title: {
    marginTop: -100,
    marginBottom: 50,
    textAlign: 'center', 
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 70, // Replace with the desired font size
  },
  label: {
    fontSize: 50, // Increased font size
    fontFamily: 'Times New Roman', // Added font family
    marginBottom: 30,
    textTransform: 'uppercase', // Made text uppercase
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#4CAF50', // Changed border color
    borderWidth: 2, // Increased border width
    marginBottom: 40,
    paddingHorizontal: 10,
    // paddingVertical: 35,
    fontSize: 35, // Increased font size
    borderRadius: 15, // Added border radius
  },
  button: {
    marginVertical: 10, // Adjust this value for vertical spacing between buttons
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 100,
    backgroundColor: '#4CAF50',
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default DictationScreen;
