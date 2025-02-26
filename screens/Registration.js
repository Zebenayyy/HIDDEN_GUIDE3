import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
//import { auth } from './firebaseConfig'; // Import Firebase auth
// import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithCredential  } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession(); // Ensure the browser session is completed

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Configure Google Auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    
    iosClientId: '434267708976-gnv5g5dhjr0u36avap9g918rpnu7u794.apps.googleusercontent.com',
    scopes: ['profile', 'email'],

  },console.log("Hello World!!"));
  // const auth = getAuth();
  // getRedirectResult(auth)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access Google APIs.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     console.log(result);
  
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

    
  // Handle Google Sign-In response
  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential) // Authenticate with Firebase
  //       .then(() => {
  //         Alert.alert('Success', 'Account created with Google!');
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         Alert.alert('Error', 'Google Sign-In failed');
  //       });
  //   }
  // }, [response]);
  
  
  useEffect(() => {
    console.log(response)
    if (response?.type === 'success') {
      const { authentication } = response;
  
      if (authentication?.accessToken) {
        const credential = GoogleAuthProvider.credential(null, authentication.accessToken);
        signInWithCredential(auth, credential)
          .then((userCredential) => {
            console.log('User Signed In:', userCredential.user);
          })
          .catch((error) => {
            console.error('Firebase Sign-In Error:', error);
          });
      } else {
        console.error('No Access Token Found in Authentication:', authentication);
      }
    } else if (response?.type === 'error') {
      console.error('Google Auth Error:', response.error);
    }
  }, [response]);

  // Handle registration with email and password
  const handleRegistration = async () => {
    try {
      // Add logic to create a user with email and password in Firebase
      // For now, just show a success alert
      Alert.alert('Success', 'Account created successfully!');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to create account. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Map Background and Gradient Overlay */}
      <ImageBackground 
        source={require('./assets/image/map-icon.png')} // Replace with your map image path
        style={styles.topSection}
        imageStyle={styles.backgroundImage}
      >
        {/* Gradient Overlay */}
        <LinearGradient 
          colors={['rgba(204, 102, 153, 0.6)', 'rgba(255, 255, 255, 0.3)']} // Dark pink to light white with transparency
          style={styles.gradientOverlay}
        >
          <Text style={styles.title}>HIDDEN GUIDE</Text>
          <Text style={styles.registrationHeader}>Registration</Text>
          <Text style={styles.subtitle}>Fill in your account details</Text>
        </LinearGradient>
      </ImageBackground>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Error Message */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {/* Full Name Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/people.png')} style={styles.smallIcon} />
          <TextInput 
            style={styles.input} 
            placeholder="Full Name" 
            placeholderTextColor="#555" 
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* User Name Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/people.png')} style={styles.smallIcon} />
          <TextInput 
            style={styles.input} 
            placeholder="User Name" 
            placeholderTextColor="#555" 
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/email-icon.png')} style={styles.largeIcon} />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#555" 
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/key.png')} style={styles.smallIcon} />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            placeholderTextColor="#555" 
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleRegistration}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Google Sign-In Button */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => {
            promptAsync(); // Trigger Google Sign-In flow
          }}
          disabled={!request}
        >
          <Image source={require('./assets/image/google-icon.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB3C1', // Peachy pink
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover', // Ensures the image covers the entire area
  },
  gradientOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFA500', // Bright orange
    textShadowColor: '#CD5C5C', // indian red
    textShadowOffset: { width: 10, height: 5 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  registrationHeader: {
    fontSize: 30,
    color: '#FF6347', // Soft red
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#FA8072', // Light pink text for visibility
    marginTop: 5,
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#FFB3C1', // Peachy pink
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 95,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  smallIcon: {
    width: 15, // Smaller size for person icon
    height: 15, // Smaller size for person icon
    marginRight: 10,
  },
  largeIcon: {
    width: 30, // Larger size for email icon
    height: 30, // Larger size for email icon
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#FFA500', // Vibrant orange
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default RegistrationPage;