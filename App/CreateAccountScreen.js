// CreateAccountScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert,  ScrollView , Button} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, sendPasswordResetEmail, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import MainScreen from './MainScreen';



const CreateAccountScreen = ({ navigation, route }) => {
  const [keywords, setKeywords] = useState('');
  const story = "";
  const { level } = route.params;
  // keywords = "";
  // setKeywords= (text) => {
  //   keywords = text;
  // };
  
  const makeStory= () => {
    navigation.navigate('MainScreen', {passedVariable: keywords , lev: level});
  };
  return ( 
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, styles.centerText]}>StoryGen</Text>
        <Text style={[styles.label, styles.centerText]}>Enter words for your story topic:</Text>

        <TextInput
        style={styles.input}
        onChangeText={(text) => setKeywords(text)}
        value={keywords}
        
        
      />

        <View style={[styles.buttonContainer, { backgroundColor: '#00A9FD' }]}>
            <Button title="Make Story" onPress={makeStory} color="#000"/>                                 
        </View>

        <Text style={styles.generatedStoryLabel}> </Text>
        <Text style={styles.generatedStoryText}>{story}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#00A9FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Times New Roman',
    fontSize: 20,
  },
  container: {
      padding: 22,
      backgroundColor: '#F5F5DC', // Light beige background color
      flexGrow: 1,
      justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc', // Light gray border color
    borderWidth: 2,
    marginBottom: 10,
    color: '#333', // Dark gray text color
  },
  generatedStoryLabel: {
    marginBottom: 450,
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 20, // Replace with the desired font size
  },
  label: {
      marginTop: 10,
      marginBottom: 30,
      textAlign: 'center', 
      fontFamily: 'Times New Roman', // Replace with the desired font family
      fontSize: 25, // Replace with the desired font size
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
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 70, // Replace with the desired font size
  },
  


});

export default CreateAccountScreen;

