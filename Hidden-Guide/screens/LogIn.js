import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebaseConfig'; // Import Firebase auth
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  // Handle login with email and password
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Authenticate with Firebase
      setErrorMessage('');
      navigation.navigate('Explore'); // Redirect to Explore page on successful login
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid email or password');
    }
  };
  

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider); // Authenticate with Google
      navigation.navigate('Explore'); // Redirect to Explore page on successful login
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Google Sign-In failed');
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
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFA500',
    textShadowColor: '#4B0082',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  welcomeText: {
    fontSize: 20,
    color: '#FF6347',
    marginTop: 10,
  },
  instructionText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#FFB3C1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
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