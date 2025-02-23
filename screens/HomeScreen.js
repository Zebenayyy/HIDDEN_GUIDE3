import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.button} onPress={() => console.log('Get Started Pressed')}>
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
    backgroundColor: '#fff', // Background color for the rest of the screen
  },
  gradientPanel: {
    width: '100%',
    height: '45%', // Height of the gradient panel
    borderRadius: 20, // Rounded corners
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeading: {
    fontSize: 26,
    fontWeight: '500', // Medium weight
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
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