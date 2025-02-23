import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Quiz1 = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle card selection
  const handleCardPress = (choice) => {
    setSelectedCard(choice);
  };

  // Handle Continue button press
  const handleContinue = () => {
    if (selectedCard) {
      // Navigate to Quiz2
      navigation.navigate('Quiz2');
    } else {
      alert('Please select an option to continue.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Removed the topNavigation section */}
      
      {/* Main Title */}
      <Text style={styles.mainTitle}>Activity or Dining?</Text>

      {/* Cards Container */}
      <View style={styles.cardsContainer}>
        {/* Adventure Card (Left-Aligned) */}
        <View style={styles.leftCardWrapper}>
          <TouchableOpacity
            style={[
              styles.card,
              styles.adventureCard,
              selectedCard === 'Adventure' && styles.selectedCard,
            ]}
            onPress={() => handleCardPress('Adventure')}
          >
            <Image
              source={require('./assets/image/marrygoround.png')} // Corrected path
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>I'm Feeling Adventurous</Text>
          </TouchableOpacity>
        </View>

        {/* Dining Card (Right-Aligned and Below) */}
        <View style={styles.rightCardWrapper}>
          <TouchableOpacity
            style={[
              styles.card,
              styles.diningCard,
              selectedCard === 'Dining' && styles.selectedCard,
            ]}
            onPress={() => handleCardPress('Dining')}
          >
            <Image
              source={require('./assets/image/salada.png')} // Corrected path
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>I'm Hungry</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#F2B5C1', // Light pink/rose background
    padding: 20,
  },
  mainTitle: {
    fontSize: 36, // Increased font size for "Activity or Dining?"
    fontWeight: 'bold',
    color: '#E75A7C', // Pink
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 30, // Adjust spacing from the top
  },
  cardsContainer: {
    flex: 1, // Take up available vertical space
    flexDirection: 'column', // Arrange cards vertically
    justifyContent: 'center', // Center cards vertically
    alignItems: 'center', // Center cards horizontally
  },
  leftCardWrapper: {
    alignSelf: 'flex-start', // Align the left card to the left
    marginBottom: 20, // Add spacing between the two cards
  },
  rightCardWrapper: {
    alignSelf: 'flex-end', // Align the right card to the right
  },
  card: {
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 189, // Fixed width
    height: 184, // Fixed height
  },
  adventureCard: {
    backgroundColor: 'rgba(231, 90, 124, 0.2)', // Darker pink with 20% opacity
  },
  diningCard: {
    backgroundColor: 'rgba(244, 162, 97, 0.2)', // Peach/orange with 20% opacity
  },
  selectedCard: {
    borderColor: '#fff',
    borderWidth: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#E75A7C', // Darker pink
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 20, // Add horizontal margins
    marginBottom: 20, // Add space at the bottom
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Quiz1;