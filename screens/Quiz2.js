import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';

const Quiz2 = ({ navigation }) => {
  const [selectedVibes, setSelectedVibes] = useState([]);

  // List of vibes with their names, colors, and varying sizes
  const vibes = [
    { id: 'calm', label: 'Calm', color: '#FFB347', size: 70 },
    { id: 'creative', label: 'Creative', color: '#FF6F61', size: 70 },
    { id: 'secluded', label: 'Secluded', color: '#E25858', size: 70 },
    { id: 'earthy', label: 'Earthy', color: '#D9534F', size: 70 },
    { id: 'adventurous', label: 'Adventurous', color: '#FFA07A', size: 70 },
    { id: 'lively', label: 'Lively', color: '#FF6F61', size: 70 },
    { id: 'romantic', label: 'Romantic', color: '#D9534F', size: 70 },
    { id: 'social', label: 'Social', color: '#FFA07A', size: 70 },
    { id: 'cozy', label: 'Cozy', color: '#FFE4B5', size: 70 },
    { id: 'indoors', label: 'Indoors', color: '#FFDEAD', size: 70 },
    { id: 'outdoors', label: 'Outdoors', color: '#FFA500', size: 70 },
    { id: 'theatrical', label: 'Theatrical', color: '#FF8C00', size: 70 },
    { id: 'thought-provoking', label: 'Thought-Provoking', color: '#FFE4B5', size: 70 },
  ];

  // Handle vibe selection
  const toggleVibe = (id) => {
    if (selectedVibes.includes(id)) {
      setSelectedVibes(selectedVibes.filter((vibe) => vibe !== id));
    } else {
      setSelectedVibes([...selectedVibes, id]);
    }
  };

  // Handle Continue button press
  const handleContinue = () => {
    if (selectedVibes.length > 0) {
      navigation.navigate('Quiz3');
    } else {
      Alert.alert(
        'Selection Required',
        'Please select at least one vibe to continue.',
        [{ text: 'OK', onPress: () => console.log('Alert closed') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Title & Subtitle */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>VIBES?</Text>
        <Text style={styles.subtitle}>Select Multiple</Text>
      </View>

      {/* Vibe Bubbles */}
      <View style={styles.vibeContainer}>
        {vibes.map((vibe, index) => {
          // Calculate polar coordinates for circular layout
          const angle = (index / vibes.length) * 2 * Math.PI; // Angle for each circle
          const radius = 150; // Radius of the circle
          const centerX = Dimensions.get('window').width / 2 - 10; // Shifted left by 10 pixels
          const centerY = Dimensions.get('window').height / 2 - 160; // Center vertically

          // Calculate position using polar coordinates
          const left = centerX + radius * Math.cos(angle) - vibe.size / 2;
          const top = centerY + radius * Math.sin(angle) - vibe.size / 2;

          return (
            <TouchableOpacity
              key={vibe.id}
              style={[
                styles.vibeBubble,
                {
                  width: vibe.size,
                  height: vibe.size,
                  borderRadius: vibe.size / 2,
                  backgroundColor: selectedVibes.includes(vibe.id) ? '#FF4500' : vibe.color,
                  position: 'absolute',
                  top,
                  left,
                },
              ]}
              onPress={() => toggleVibe(vibe.id)}
            >
              <Text
                style={[
                  styles.vibeText,
                  { fontSize: vibe.size / 10 }, // Adjust font size based on bubble size
                ]}
              >
                {vibe.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Continue Button */}
      <TouchableOpacity 
        style={styles.continueButton} 
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD1DC', // Soft peachy pink background
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFA500', // Bright orange
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  vibeContainer: {
    flex: 1,
    position: 'relative', // Enable absolute positioning for child elements
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120, // Add more space for the continue button
  },
  vibeBubble: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  vibeText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#FF4500', // Bright red
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Quiz2;