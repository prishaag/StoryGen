// CreateAccountScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView , Button} from 'react-native';

const CreateAccountScreen = ({ navigation, route }) => {
  const [keywords, setKeywords] = useState('');
  const story = "";
  const { level, cnt } = route.params;
  
  const makeStory= () => {
    navigation.navigate('MainScreen', {passedVariable: keywords , lev: level, count: cnt});
  };

  return ( 
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, styles.centerText]}>StoryGen</Text>
      <Text style={[styles.label, styles.centerText]}>Enter words for your story topic:</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setKeywords(text)}
          value={keywords}
          placeholder="Type your keywords here"
          placeholderTextColor="#999" // Light gray placeholder text color
        />
      </View>

      <View style={[styles.buttonContainer, { backgroundColor: '#00A9FD' }]}>
        <Button title="Make Story" onPress={makeStory} color="#000"/>                                 
      </View>

      <Text style={styles.generatedStoryLabel}> </Text>
      <Text style={styles.generatedStoryText}>{story}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 22,
    backgroundColor: '#F5F5DC',
    flexGrow: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#00A9FD', // Green border color
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#333',
    fontSize: 25,
  },
  generatedStoryLabel: {
    marginBottom: 450,
    fontFamily: 'Times New Roman',
    fontSize: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center', 
    fontFamily: 'Times New Roman',
    fontSize: 25,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: -450,
    width: '100%',
    borderRadius: 100,
    paddingVertical: 20,
  },
  title: {
    marginTop: -100,
    marginBottom: 105,
    textAlign: 'center', 
    fontFamily: 'Times New Roman',
    fontSize: 70,
  },
});

export default CreateAccountScreen;
