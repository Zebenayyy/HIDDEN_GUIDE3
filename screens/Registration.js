import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const RegistrationPage = () => {
  return (
    <View style={styles.container}>
      {/* Top Section with Map Background */}
      <ImageBackground 
        source={require('./assets/image/map-icon.png')} // Replace with your map image path
        style={styles.topSection}
        imageStyle={styles.backgroundImage}
      >
        <Text style={styles.title}>HIDDEN GUIDE</Text>
        <Text style={styles.registrationHeader}>Registration</Text>
        <Text style={styles.subtitle}>Fill in your account details</Text>
      </ImageBackground>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Full Name Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/person.png')} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Full Name" 
            placeholderTextColor="#555" 
          />
        </View>

        {/* User Name Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/person.png')} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="User Name" 
            placeholderTextColor="#555" 
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/email-icon.png')} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#555" 
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Image source={require('./assets/image/key.png')} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            placeholderTextColor="#555" 
          />
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Google Sign-In Button */}
        <TouchableOpacity style={styles.googleButton}>
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
    backgroundColor: '#FFD1DC', // Light pink
  },
  backgroundImage: {
    resizeMode: 'cover', // Ensures the image covers the entire area
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFA500', // Bright orange
    textShadowColor: '#4B0082', // Dark purple
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  registrationHeader: {
    fontSize: 24,
    color: '#FF6347', // Soft red
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFB3C1', // Light pinkish-red
    marginTop: 5,
  },
  bottomSection: {
    flex: 2,
    backgroundColor: '#FFB3C1', // Peachy pink
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
});

export default RegistrationPage;