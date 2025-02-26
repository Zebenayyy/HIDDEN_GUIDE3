import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import Slider from '@react-native-community/slider'; // Install this package: npm install @react-native-community/slider

const Filters = ({ initialFilters, onApplyFilters, onCancel }) => {
  const [partySize, setPartySize] = useState(initialFilters.partySize || 1);
  const [foodSelected, setFoodSelected] = useState(initialFilters.foodSelected || false);
  const [cuisine, setCuisine] = useState(initialFilters.cuisine || '');
  const [dietaryRestrictions, setDietaryRestrictions] = useState(initialFilters.dietaryRestrictions || '');
  const [rating, setRating] = useState(initialFilters.rating || 0);
  const [selectedVibes, setSelectedVibes] = useState(initialFilters.selectedVibes || []);
  const [distanceRange, setDistanceRange] = useState(initialFilters.distanceRange || 10);
  const [popularity, setPopularity] = useState(initialFilters.popularity || '');
  const [isKidFriendly, setIsKidFriendly] = useState(initialFilters.isKidFriendly || false);
  const [isPetFriendly, setIsPetFriendly] = useState(initialFilters.isPetFriendly || false);
  const [ageRange, setAgeRange] = useState(initialFilters.ageRange || 18);

  const vibes = ['Cozy', 'Adventurous', 'Social', 'Romantic', 'Secluded'];

  const toggleVibeSelection = (vibe) => {
    setSelectedVibes((prev) =>
      prev.includes(vibe)
        ? prev.filter((item) => item !== vibe) // Remove the vibe if already selected
        : [...prev, vibe] // Add the vibe if not already selected
    );
  };

  const handleApplyFilters = () => {
    const filters = {
      partySize,
      foodSelected,
      cuisine,
      dietaryRestrictions,
      rating,
      selectedVibes,
      distanceRange,
      popularity,
      isKidFriendly,
      isPetFriendly,
      ageRange,
    };
    onApplyFilters(filters); // Pass filters to the parent component
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Party Size */}
      <Text style={styles.label}>Party Size:</Text>
      <TextInput
        style={styles.input}
        value={String(partySize)}
        onChangeText={(text) => setPartySize(Number(text))}
        keyboardType="numeric"
      />

      {/* Food Selected */}
      <Text style={styles.label}>Food Selected:</Text>
      <TouchableOpacity onPress={() => setFoodSelected(!foodSelected)}>
        <Text>{foodSelected ? 'Yes' : 'No'}</Text>
      </TouchableOpacity>

      {/* Cuisine */}
      <Text style={styles.label}>Cuisine:</Text>
      <TextInput
        style={styles.input}
        value={cuisine}
        onChangeText={setCuisine}
        placeholder="e.g., Italian, Mexican"
      />

      {/* Rating */}
      <Text style={styles.label}>Minimum Rating:</Text>
      <TextInput
        style={styles.input}
        value={String(rating)}
        onChangeText={(text) => setRating(Number(text))}
        keyboardType="numeric"
      />

      {/* Vibes */}
      <Text style={styles.label}>Vibes:</Text>
      <View style={styles.vibesContainer}>
        {vibes.map((vibe) => (
          <TouchableOpacity
            key={vibe}
            style={[
              styles.vibeButton,
              selectedVibes.includes(vibe) && styles.selectedVibeButton,
            ]}
            onPress={() => toggleVibeSelection(vibe)}
          >
            <Text style={styles.vibeButtonText}>{vibe}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Distance Range */}
      <Text style={styles.label}>Max Distance (km):</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={50}
        step={1}
        value={distanceRange}
        onValueChange={setDistanceRange}
      />
      <Text>{distanceRange} km</Text>

      {/* Popularity */}
      <Text style={styles.label}>Popularity:</Text>
      <TextInput
        style={styles.input}
        value={popularity}
        onChangeText={setPopularity}
        placeholder="e.g., Trending, Popular"
      />

      {/* Kid Friendly */}
      <Text style={styles.label}>Kid Friendly:</Text>
      <Switch value={isKidFriendly} onValueChange={setIsKidFriendly} />

      {/* Pet Friendly */}
      <Text style={styles.label}>Pet Friendly:</Text>
      <Switch value={isPetFriendly} onValueChange={setIsPetFriendly} />

      {/* Age Range */}
      <Text style={styles.label}>Age Range:</Text>
      <Slider
        style={styles.slider}
        minimumValue={18}
        maximumValue={100}
        step={1}
        value={ageRange}
        onValueChange={setAgeRange}
      />
      <Text>{ageRange} years</Text>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  vibesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  vibeButton: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  selectedVibeButton: {
    backgroundColor: '#FFA726',
    borderColor: '#FFA726',
  },
  vibeButtonText: {
    fontSize: 14,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#888',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#FFA726',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Filters;