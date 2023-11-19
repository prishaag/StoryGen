// CreateAccountScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert,  ScrollView , Button} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, sendPasswordResetEmail, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import MainScreen from './MainScreen';

// const firebaseConfig = {
//   // Your firebase config here
//   apiKey: 'AIzaSyBI3XjGfLt1qhLovQD64beNcY2np5jZELk',
//   authDomain: 'travelapp-12f57.firebaseapp.com',
//   projectId: 'travelapp-12f57',
//   storageBucket: 'travelapp-12f57.appspot.com',
//   messagingSenderId: '800079732153',
//   appId: '1:800079732153:ios:737bd6c870c607f0676a68',
// };

// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// const generateVerificationCode = () => {
//   // Generate a random 6-digit verification code
//   return Math.floor(100000 + Math.random() * 900000).toString();
// };

const CreateAccountScreen = ({ navigation }) => {
  // const [email, setEmail] = useState('');
  // const [verificationCode, setVerificationCode] = useState('');
  // const [storedVerificationCode, setStoredVerificationCode] = useState('');
  // const [isCodeSent, setIsCodeSent] = useState(false);

  // const handleSendVerificationCode = async () => {
  //   try {
  //     if (!email.endsWith('@umich.edu')) {
  //       console.error('Invalid email domain. Please use an @umich.edu email.');
  //       return;
  //     }

  //     const code = generateVerificationCode();

  //     // Store the generated code
  //     setStoredVerificationCode(code);

  //     // Send the verification code to the user's email
  //     await sendPasswordResetEmail(auth, email, {
  //       url: 'https://vivianrms.firebaseapp.com',
  //       handleCodeInApp: true,
  //     });

  //     // Set the generated code and update the state
  //     setVerificationCode(code);
  //     setIsCodeSent(true);

  //     console.log('Verification code sent successfully');
  //   } catch (error) {
  //     console.error('Error sending verification code', error);
  //   }
  // };

  // const handleVerifyCode = () => {
  //   if (verificationCode === '') {
  //     Alert.alert('Error', 'Please enter the verification code');
  //     return;
  //   }

  //   // Check if the entered code matches the stored code
  //   if (verificationCode === storedVerificationCode) {
  //     console.log('Verification successful');
  //     // Navigate to MainScreen or perform desired action
  //     navigation.navigate('MainScreen');
  //   } else {
  //     Alert.alert('Error', 'Invalid verification code');
  //   }
  // };

  // return (
  //   <View style={styles.container}>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="Email"
  //       value={email}
  //       onChangeText={setEmail}
  //       keyboardType="email-address"
  //     />

  //     {!isCodeSent && (
  //       <TouchableOpacity style={styles.button} onPress={handleSendVerificationCode}>
  //         <Text style={styles.buttonText}>Send Verification Code</Text>
  //       </TouchableOpacity>
  //     )}

  //     {isCodeSent && (
  //       <>
  //         <TextInput
  //           style={styles.input}
  //           placeholder="Verification Code"
  //           value={verificationCode}
  //           onChangeText={setVerificationCode}
  //           keyboardType="numeric"
  //         />

  //         <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
  //           <Text style={styles.buttonText}>Verify Code</Text>
  //         </TouchableOpacity>
  //       </>
  //     )}

  //     <TouchableOpacity
  //       style={styles.button}
  //       onPress={() => navigation.navigate('Home')}
  //     >
  //       <Text style={styles.buttonText}>Back to Home</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
  const [keywords, setKeywords] = useState('');
  const story = "aaa";
  // keywords = "";
  // setKeywords= (text) => {
  //   keywords = text;
  // };
  const makeStory= () => {
    navigation.navigate('MainScreen');
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
            <Button title="Make Story" onPress={makeStory} color="#000"/>                                 
        </View>

        <Text style={styles.generatedStoryLabel}>Your Story:</Text>
        <Text style={styles.generatedStoryText}>{story}</Text>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#673AB7', // Purple color
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//     color: '#FFF', // White color for text
//   },
//   button: {
//     backgroundColor: '#512DA8', // Darker purple color for buttons
//     borderRadius: 5,
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
// });

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
    marginBottom: 450,
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



});

export default CreateAccountScreen;
