import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const PartySizeScreen = ({ navigation }) => {
  const [partySize, setPartySize] = useState(1);

  const increasePartySize = () => {
    setPartySize((prev) => prev + 1);
  };

  const decreasePartySize = () => {
    setPartySize((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleContinue = () => {
    // Navigate to the RecommendedPlaces screen
    navigation.navigate('RecommendedPlaces');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.heading}>Party size?</Text>
      </View>

      {/* Spacer to push content to the center */}
      <View style={styles.spacer} />

      {/* Party Size Selector */}
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={decreasePartySize}
        >
          <Text style={styles.arrowButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.centerButton}>
          <Text style={styles.centerButtonText}>{partySize}</Text>
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={increasePartySize}
        >
          <Text style={styles.arrowButtonText}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Spacer to push content to the center */}
      <View style={styles.spacer} />

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD1DC', // Soft pastel pink
    padding: 20,
  },
  titleSection: {
    alignItems: 'center',
    marginTop: 40, // Adjusted for better spacing
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00', // Warm orange
  },
  spacer: {
    flex: 0.7, // Reduced flex value further to move the counter up more
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: -20, // Added negative margin to move the counter up further
  },
  arrowButton: {
    backgroundColor: '#D8506C', // Dark pink/muted red
    borderRadius: 50,
    width: 60, // Increased size
    height: 60, // Increased size
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButtonText: {
    color: '#FFFFFF',
    fontSize: 24, // Increased font size
  },
  centerButton: {
    backgroundColor: '#D8506C', // Dark pink/muted red
    borderRadius: 50,
    width: 100, // Increased size
    height: 100, // Increased size
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  centerButtonText: {
    color: '#FFFFFF',
    fontSize: 40, // Increased font size
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#D8506C', // Dark pink/muted red
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PartySizeScreen;