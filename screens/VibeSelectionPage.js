import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VibeSelectionPage = () => {
  const [selectedVibes, setSelectedVibes] = useState([]);

  // List of vibes with their names, colors, and varying sizes
  const vibes = [
    { id: 'calm', label: 'Calm', color: '#FFB347', size: 90 },
    { id: 'creative', label: 'Creative', color: '#FF6F61', size: 110 },
    { id: 'secluded', label: 'Secluded', color: '#E25858', size: 80 },
    { id: 'earthy', label: 'Earthy', color: '#D9534F', size: 100 },
    { id: 'adventurous', label: 'Adventurous', color: '#FFA07A', size: 120 },
    { id: 'lively', label: 'Lively', color: '#FF4500', size: 90 },
    { id: 'romantic', label: 'Romantic', color: '#FFDAB9', size: 80 },
    { id: 'social', label: 'Social', color: '#FF6347', size: 110 },
    { id: 'cozy', label: 'Cozy', color: '#FFE4B5', size: 100 },
    { id: 'indoors', label: 'Indoors', color: '#FFDEAD', size: 90 },
    { id: 'outdoors', label: 'Outdoors', color: '#FFA500', size: 120 },
    { id: 'thought-provoking', label: 'Thought-Provoking', color: '#FFFAF0', size: 80 },
    { id: 'theatrical', label: 'Theatrical', color: '#FF8C00', size: 100 },
  ];

  // Handle vibe selection
  const toggleVibe = (id) => {
    if (selectedVibes.includes(id)) {
      setSelectedVibes(selectedVibes.filter((vibe) => vibe !== id));
    } else {
      setSelectedVibes([...selectedVibes, id]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.skipButton}>Skip</Text>
      </View>

      {/* Title & Subtitle */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>VIBES?</Text>
        <Text style={styles.subtitle}>Select Multiple</Text>
      </View>

      {/* Vibe Bubbles */}
      <View style={styles.vibeContainer}>
        {vibes.map((vibe) => (
          <TouchableOpacity
            key={vibe.id}
            style={[
              styles.vibeBubble,
              {
                width: vibe.size,
                height: vibe.size,
                borderRadius: vibe.size / 2,
                backgroundColor: selectedVibes.includes(vibe.id) ? '#FF4500' : vibe.color,
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
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Profile Icon */}
      <TouchableOpacity style={styles.profileIcon}>
        <Text style={styles.profileIconText}>👤</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFB3C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  skipButton: {
    fontSize: 16,
    color: '#aaa',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFA500', // Bright orange
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 5,
  },
  vibeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vibeBubble: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
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
  profileIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconText: {
    fontSize: 24,
    color: '#000',
  },
});

export default VibeSelectionPage;