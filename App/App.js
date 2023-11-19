// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View, Button } from 'react-native';
import { View, Text, TextInput, Button, ScrollView, Picker } from 'react-native';
import MainScreen from './MainScreen';
import CreateAccountScreen from './CreateAccountScreen';

const Stack = createStackNavigator();

export default function App() {
  const [difficulty, setDifficulty] = useState('');
  const [story, setStory] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StoryGen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const setDifficulty= () => {
    navigation.navigate('CreateAccount');
  };

  // const setDifficulty = (chosenDifficulty) => {
  //   // setDifficulty(chosenDifficulty);
  //   // Navigate to SecondScreen when any difficulty button is pressed
  //   navigation.navigate('SecondScreen', { difficulty: chosenDifficulty });
  // };

  return (
<ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
      <Text style={[styles.title, styles.centerText]}>StoryGen</Text>

        <Text style={[styles.top, styles.centerText]}>Create a story!</Text>
        <Text style={[styles.label, styles.centerText]}>Pick a difficulty level:</Text>
        
        <View style={styles.difficultyButtons}>
          <View style={[styles.button, { backgroundColor: '#4CAF50' }]}>
            <Button
              title="Easy"
              onPress={() => setDifficulty('easy')}
              color="#000" // Black text color
              
            />
          </View>
          <View style={[styles.button, { backgroundColor: '#FFC107' }]}>
            <Button
              title="Medium"
              onPress={() => setDifficulty('medium')}
              color="#000" // Black text color
              
            />
          </View>
          <View style={[styles.button, { backgroundColor: '#F44336' }]}>
            <Button
              title="Hard"
              onPress={() => setDifficulty('hard')}
              color="#000" // Black text color
              
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#F5F5DC', // Light beige background color
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {},
  label: {
    marginBottom: 5,
    color: '#000', // Black text color
  },
  centerText: {
    textAlign: 'center',
  },
  // difficultyButtons: {
  //   //flexDirection: 'row',
  //   //justifyContent: 'space-between',
  //   marginBottom: 1,
  // },
  label: {
    marginTop: 0,
    marginBottom: 20,
    textAlign: 'center', 
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 20, // Replace with the desired font size
  },
  title: {
    marginTop: -100,
    marginBottom: 50,
    textAlign: 'center', 
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 70, // Replace with the desired font size
  },
  top: {
    marginTop: 0,
    marginBottom: 10,
    textAlign: 'center', 
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 30, // Replace with the desired font size
  },
  button: {
    marginVertical: 10, // Adjust this value for vertical spacing between buttons
    paddingVertical: 25,
    borderRadius: 100,
    backgroundColor: '#4CAF50',
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 30, // Replace with the desired font size  
  },
};
