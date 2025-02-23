import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('./assets/image/city.jpg')} // Adjust the path to your image
        style={styles.backgroundImage}
        resizeMode="cover" // Ensures the image covers the entire screen
      />
      {/* Gradient Panel */}
      <LinearGradient
        colors={['#D8506C', '#E8BCB9']} // Gradient colors
        style={styles.gradientPanel}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }} // Vertical gradient
      >
        {/* Main Heading */}
        <Text style={styles.mainHeading}>Go on an adventure{'\n'}anytime, anywhere.</Text>
        {/* Subheading */}
        <Text style={styles.subheading}>
          A mystery awaits you in the places you least expect it.{'\n'}
          Find spots you never knew existed!
        </Text>
        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz1')} // Navigate to LogIn screen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Push content to the bottom
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  gradientPanel: {
    width: '100%',
    height: '45%', // Height of the gradient panel
    borderRadius: 91, // Rounded corners with radius 91
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeading: {
    fontSize: 32, // Updated font size for the header
    fontWeight: 'bold', // Bold weight
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 15, // Updated font size for the description text
    fontWeight: '300', // Lighter weight
    color: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F39F5A', // Orange/peach color
    paddingVertical: 14, // Vertical padding
    paddingHorizontal: 30, // Horizontal padding
    borderRadius: 20, // Rounded corners
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500', // Medium weight
    color: '#333', // Dark text color
  },
});

export default HomeScreen;