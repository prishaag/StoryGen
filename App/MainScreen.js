// MainScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const MainScreen = ({ navigation }) => {
  const story = "aaa";
  return ( 
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.generatedStoryLabel}>Your Story:</Text>
        <Text style={styles.generatedStoryText}>{story}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generatedStoryLabel: {
    marginBottom: 450,
    fontFamily: 'Times New Roman', // Replace with the desired font family
    fontSize: 20, // Replace with the desired font size
  },

  generatedStoryText: {
      marginBottom: 450,
      fontFamily: 'Times New Roman', // Replace with the desired font family
      fontSize: 20, // Replace with the desired font size
    },
});

export default MainScreen;
