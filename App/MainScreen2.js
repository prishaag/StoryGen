import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import axios from 'axios';
import nlp from 'compromise';
import * as Speech from 'expo-speech';

const MainScreen = ({ navigation, route }) => {
  const { passedVariable, lev, count } = route.params;
  const [generatedStory, setGeneratedStory] = useState([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [maxSentenceLength, setMaxSentenceLength] = useState(0);
  const [useDifferentColors, setUseDifferentColors] = useState(false);
  const [loading, setLoading] = useState(true);

  const generateStory = async () => {
    try {
      let prompt;
      if (lev === 'Easy') {
        prompt = `Write a 3 sentence story for a first or second grade student that is easy to read. Use ${passedVariable}.`;
      } else if (lev === 'Medium') {
        prompt = `Write a 4 sentence story for a 3rd or 4th grader which is easy to read, must be 4 sentences. Use ${passedVariable}.`;
      } else if (lev === 'Hard') {
        prompt = `Write a 5 sentence story for a fifth grade student that is moderate in difficulty. Use ${passedVariable}.`;
      }

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: `${prompt}` }],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedText = response.data.choices[0].message.content;
      const doc = nlp(generatedText);
      const sentencesArray = doc.sentences().out('array');
      setGeneratedStory(sentencesArray);
      const maxLen = Math.max(...sentencesArray.map((sentence) => sentence.length));
      setMaxSentenceLength(maxLen);
      setCurrentSentenceIndex(0);
      setCurrentCharacterIndex(0);
      setLoading(false);
    } catch (error) {
      console.error('Error generating story:', error);
    }
  };

  useEffect(() => {
    generateStory();
  }, []);

  useEffect(() => {
    const characterInterval = setInterval(() => {
      if (currentCharacterIndex < maxSentenceLength) {
        setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(characterInterval);
      }
    }, 100);

    return () => clearInterval(characterInterval);
  }, [currentCharacterIndex, maxSentenceLength]);

  useEffect(() => {
    if (currentCharacterIndex >= maxSentenceLength && currentSentenceIndex < generatedStory.length) {
      setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
      setCurrentCharacterIndex(0);
    }
  }, [currentCharacterIndex, currentSentenceIndex, generatedStory, maxSentenceLength]);

  const readAloudParagraph = () => {
    Speech.speak(generatedStory.join(' '), {
      language: 'en',
      pitch: 1,
      rate: 1,
    });
  };

  const toggleColors = () => {
    setUseDifferentColors((prevValue) => !prevValue);
  };

  const allSentencesDisplayed = currentSentenceIndex === generatedStory.length;

  const getWordStyle = (word) => {
    if (useDifferentColors) {
      const term = nlp(word);
      if (word === passedVariable) {
        return styles.passedVariable;
      }
      if (term.nouns().length > 0) {
        return styles.noun;
      } else if (term.verbs().length > 0) {
        return styles.verb;
      }
      return styles.default;
    } else {
      return styles.default;
    }
  };

  const generateNewStory = () => {
    setGeneratedStory([]);
    setCurrentSentenceIndex(0);
    setCurrentCharacterIndex(0);
    setLoading(true);
    generateStory();
  };

  const navigateToSuccessScreen = () => {
    navigation.navigate('SuccessScreen', { successCount: count + 1 });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.generatedStoryLabel}>{passedVariable.toUpperCase()}</Text>
      {generatedStory
        .slice(0, currentSentenceIndex + 1)
        .map((sentence, index) => (
          <Text key={index} style={styles.generatedStoryText}>
            {index === currentSentenceIndex
              ? sentence.slice(0, currentCharacterIndex)
              : sentence.split(' ').map((word, wordIndex) => (
                  <Text key={wordIndex} style={getWordStyle(word)}>
                    {wordIndex === 0 ? word : ` ${word}`}
                  </Text>
                ))}
          </Text>
        ))}
      {allSentencesDisplayed && (
        <View style={[styles.button, { backgroundColor: '#4CAF50' }]}>
        <Button
          title="Voice"
          onPress={readAloudParagraph}
          color="#000" // Black text color
        />
        
      </View>)}
      {allSentencesDisplayed && (
        <View style={[styles.button, { backgroundColor: '#FFC107' }]}>
        <Button
          title="Syntax"
          onPress={toggleColors}
          color="#000" // Black text color
        />
        
      </View>)}
      {allSentencesDisplayed && (
        <View style={[styles.button, { backgroundColor: '#F44336' }]}>
        <Button
          title="New Story"
          onPress={generateNewStory}
          color="#000" // Black text color
        />
        
      </View>)}
      {allSentencesDisplayed && (
        <View style={[styles.button, { backgroundColor: '#00A9FD' }]}>
        <Button
          title="Understand!"
          onPress={navigateToSuccessScreen}
          color="#000" // Black text color
        />
        
      </View>)}
        {/* <View>
          <Button title="Voice" onPress={readAloudParagraph} style={styles.button} />
          <Button title="Syntax" onPress={toggleColors} style={styles.button} />
          <Button title="Story" onPress={generateNewStory} style={styles.button} />
          <Button title="Understand!" onPress={navigateToSuccessScreen} style={styles.button} />
        </View>
      )} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  generatedStoryLabel: {
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Times New Roman',
    fontSize: 50,
    color: 'green',
    fontWeight: 'bold',
  },
  generatedStoryText: {
    marginBottom: 20,
    fontFamily: 'Times New Roman',
    fontSize: 30,
  },
  noun: {
    color: 'red',
  },
  verb: {
    color: 'blue',
  },
  passedVariable: {
    color: 'green',
    fontWeight: 'bold',
  },
  default: {
    color: 'black',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10, // Adjust this value for vertical spacing between buttons
    paddingVertical: 25,
    borderRadius: 100,
    backgroundColor: '#4CAF50',
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 30, // Replace with the desired font size  
  },
});

export default MainScreen;

