import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';


const MainScreen = ({ navigation, route }) => {
  const { passedVariable, lev } = route.params;
  const [generatedStory, setGeneratedStory] = useState('');

 

  useEffect(() => {
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
        let response;

      
        try {
          if (!generatedStory) {
          const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
              model: 'gpt-3.5-turbo',
              messages: [{ role: 'user', content: `${prompt}` }],
            },
            { 
              headers: {
                Authorization: `Bearer ignore`,
                'Content-Type': 'application/json',
              },
            }
          );
        
          const generatedText = response.data.choices[0].message.content;
          setGeneratedStory(generatedText);
          }
        } catch (error) {
          console.error('Error generating story:', error);
        }
        
        
  
        // const generatedText = response?.choices?.[0]?.message?.content ??"not working!";
        // setGeneratedStory(generatedText);
      } catch (error) {
        console.error('Error generating story:', error);
      }
    };

    generateStory();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.generatedStoryLabel}>Your Story:</Text>
      <Text style={styles.generatedStoryText}>{generatedStory}</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5DC', // Light beige background color
    // flexGrow: 1,
    // justifyContent: 'center',
  },
  generatedStoryLabel: {
    marginTop: 100,
    textAlign: 'center',
    marginBottom: 50,
    fontFamily: 'Times New Roman',
    fontSize: 30,
  },
  generatedStoryText: {
    //marginTop: -420,
    marginBottom: 600,
    fontFamily: 'Times New Roman',
    fontSize: 30,
  },
  
});

export default MainScreen;