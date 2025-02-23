import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from './firebaseConfig'; // Import Firebase auth
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession(); // Ensure the browser session is completed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  // Configure Google Auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '434267708976-gnv5g5dhjr0u36avap9g918rpnu7u794.apps.googleusercontent.com', // Replace with your Expo client ID
    iosClientId: 'YOUR_IOS_CLIENT_ID', // Replace with your iOS client ID (optional)
    androidClientId: 'YOUR_ANDROID_CLIENT_ID', // Replace with your Android client ID (optional)
  });

  // Handle Google Sign-In response
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential) // Authenticate with Firebase
        .then(() => {
          Alert.alert('Success', 'Logged in with Google!');
          navigation.navigate('Explore'); // Redirect to Explore page
        })
        .catch((error) => {
          console.error(error);
          Alert.alert('Error', 'Google Sign-In failed');
        });
    }
  }, [response]);

  // Handle login with email and password
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Authenticate with Firebase
      console.log('User logged in:', userCredential.user); // Debugging
      setErrorMessage('');
      navigation.navigate('Explore'); // Redirect to Explore page on successful login
    } catch (error) {
      console.error('Error during login:', error.message); // Debugging
      setErrorMessage('Invalid email or password');
    }
  };

  // Navigate to Signup page
  const handleCreateAccount = () => {
    navigation.navigate('Registration'); // Redirects to the Register screen
  };

  // Navigate to Forgot Password page
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Map Background and Gradient Overlay */}
      <ImageBackground 
        source={require('./assets/image/map-icon.png')} 
        style={styles.topSection}
        imageStyle={styles.backgroundImage}
      >
        <LinearGradient 
          colors={['rgba(204, 102, 153, 0.6)', 'rgba(255, 255, 255, 0.3)']} 
          style={styles.gradientOverlay}
        >
          <Text style={styles.title}>HIDDEN GUIDE</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.instructionText}>Enter your login information</Text>
        </LinearGradient>
      </ImageBackground>

      {/* Bottom Section with Curved Top Edges */}
      <View style={styles.bottomSection}>
        {/* Error Message */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/email-icon.png')} style={styles.iconLarge} />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#aaa" 
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/key.png')} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            placeholderTextColor="#aaa" 
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Forgot Password Button */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Or Separator */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>or</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
          <Text style={styles.createAccountButtonText}>Create an Account</Text>
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
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB3C1',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
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
    color: '#FFA500',
    textShadowColor: '#CD5C5C',
    textShadowOffset: { width: 10, height: 5 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: '#FF6347',
    marginTop: 10,
  },
  instructionText: {
    fontSize: 20,
    color: '#FA8072',
    marginTop: 5,
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#FFB3C1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 95,
    paddingHorizontal: 50,
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
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  iconLarge: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#FFA500',
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
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#aaa',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#555',
  },
  createAccountButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  createAccountButtonText: {
    color: '#000',
    fontSize: 16,
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
  forgotPasswordText: {
    color: '#FF6347',
    textAlign: 'right',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LoginPage;