import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';

const QuizPage = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Activity or Dining?</Text>
      </View>

      {/* Selectable Options */}
      <View style={styles.optionsContainer}>
        {/* First Card (Activity Option) */}
        <TouchableOpacity 
          style={[styles.card, styles.activityCard, selectedOption === 'activity' && styles.selectedCard]} 
          onPress={() => handleOptionPress('activity')}
        >
          <Image 
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>I'm Feeling Adventurous</Text>
        </TouchableOpacity>

        {/* Second Card (Dining Option) */}
        <TouchableOpacity 
          style={[styles.card, styles.diningCard, selectedOption === 'dining' && styles.selectedCard]} 
          onPress={() => handleOptionPress('dining')}
        >
          <Image 
            source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>I'm Hungry</Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity 
        style={[styles.continueButton, !selectedOption && styles.disabledButton]} 
        onPress={() => selectedOption && navigation.navigate('NextScreen')} // Replace 'NextScreen' with your target screen
        disabled={!selectedOption}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* User Icon */}
      <TouchableOpacity style={styles.userIcon}>
        <Text style={styles.userIconText}>👤</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBF2', // Soft pink background
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#C75A76', // Dark pink
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  skipButton: {
    position: 'absolute',
    right: 0,
  },
  skipButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#C75A76',
    textAlign: 'center',
    marginTop: 10,
  },
  optionsContainer: {
    width: '100%',
    gap: 20,
  },
  card: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15,
    overflow: 'hidden',
  },
  activityCard: {
    backgroundColor: '#FFC0CB', // Light pink
  },
  diningCard: {
    backgroundColor: '#FFA07A', // Light orange
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#C75A76',
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#C75A76',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#D3D3D3',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#000000',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIconText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default QuizPage;