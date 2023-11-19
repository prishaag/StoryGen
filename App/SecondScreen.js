import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

const SecondScreen = () => {
  const [keywords, setKeywords] = useState('');
  const [story, setStory] = useState('');

  const generateStory = async () => {
    // Implement the logic to generate the story based on keywords
    // This function should set the generated story to the state (setStory)
    // For now, let's assume a simple implementation:
    setStory(`This is a generated story based on the keywords: ${keywords}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.label, styles.centerText]}>Enter words for your story topic:</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setKeywords(text)}
        value={keywords}
      />

      <View style={[styles.buttonContainer, { backgroundColor: '#00A9FD' }]}>
        <Button title="Make Story" onPress={generateStory} color="#000" />
      </View>

      <Text style={styles.generatedStoryLabel}>Your Story:</Text>
      <Text style={styles.generatedStoryText}>{story}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5DC', // Light beige background color
    flexGrow: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc', // Light gray border color
    borderWidth: 1,
    marginBottom: 10,
    color: '#333', // Dark gray text color
  },
  generatedStoryLabel: {
    marginBottom: 20,
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 20, // Replace with the desired font size
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 20, // Replace with the desired font size
  },
  buttonContainer: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
    paddingVertical: 5,
  },
  centerText: {
    textAlign: 'center',
  },
});

export default SecondScreen;
