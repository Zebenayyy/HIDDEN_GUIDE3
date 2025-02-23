import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  Slider,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const Filters = ({ navigation }) => {
  const [filters, setFilters] = useState({
    partySize: 1,
    foodSelected: false,
    selectedCuisine: [],
    selectedDietary: [],
    rating: 0,
    selectedVibes: [],
    distanceRange: 0,
    popularity: '',
    isKidFriendly: false,
    isPetFriendly: false,
    ageRange: 0,
    maxPrice: 1,
    keyword: '',
  });

  const [expandedFilters, setExpandedFilters] = useState({
    partySize: true,
    foodOptions: false,
    cuisine: false,
    dietaryRestrictions: false,
    rating: true,
    distanceRange: true,
    popularity: false,
    vibes: false,
    kidFriendly: false,
    petFriendly: false,
    ageRange: false,
    priceRange: false,
  });

  const toggleFilter = (filterKey) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
  };

  const [loading, setLoading] = useState(false);

  const vibes = ['Cozy', 'Adventurous', 'Social', 'Romantic', 'Secluded'];
  const dietary = ['Vegan', 'Halal', 'Kosher', 'Vegetarian', 'Keto'];
  const cuisine = ['Italian', 'Mexican', 'Asian', 'American', 'Thai'];
  const popularityOptions = ['Tourist Attractions', 'Local Favorites', 'Secret Gems'];

  const toggleVibeSelection = (vibe) => {
    setFilters((prev) => ({
      ...prev,
      selectedVibes: prev.selectedVibes.includes(vibe)
        ? prev.selectedVibes.filter((item) => item !== vibe)
        : [...prev.selectedVibes, vibe],
    }));
  };

  const toggleDietarySelection = (option) => {
    setFilters((prev) => ({
      ...prev,
      selectedDietary: prev.selectedDietary.includes(option)
        ? prev.selectedDietary.filter((item) => item !== option)
        : [...prev.selectedDietary, option],
    }));
  };

  const toggleCuisineSelection = (option) => {
    setFilters((prev) => ({
      ...prev,
      selectedCuisine: prev.selectedCuisine.includes(option)
        ? prev.selectedCuisine.filter((item) => item !== option)
        : [...prev.selectedCuisine, option],
    }));
  };

  const handlePopularitySelection = (option) => {
    setFilters((prev) => ({
      ...prev,
      popularity: option,
    }));
  };

  const GOOGLE_MAPS_API_KEY = 'AIzaSyDnZkU7FcVHHdqzUjW5v58wXY_f0wLiaf4';

  const handleApplyFilters = async () => {
    setLoading(true);
    try {
      const query = `${filters.cuisine || 'restaurants'} in ${filters.location || 'Chicago'}`;
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
        params: {
          query,
          key: GOOGLE_MAPS_API_KEY,
        },
      });

      if (response.data.status === 'OK') {
        const places = response.data.results;
        console.log('Fetched places:', places);
        navigation.navigate('RecommendedPlaces', { filters, places });
      } else {
        console.warn('No results found. API Status:', response.data.status);
        Alert.alert('Error', 'No places found. Try adjusting your filters.');
      }
    } catch (error) {
      console.error('Error fetching places:', error.message);
      Alert.alert('Error', 'Failed to fetch places. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <TextInput
        value={filters.keyword || ''}
        onChangeText={(text) => setFilters((prev) => ({ ...prev, keyword: text }))}
        placeholder="Enter a keyword (e.g., restaurant name)"
        style={styles.searchBar}
      />

      {/* Party Size */}
      <TouchableOpacity onPress={() => toggleFilter('partySize')} style={styles.filterHeader}>
        <Text>Party Size</Text>
        <Text>{expandedFilters.partySize ? '▼' : '▶'}</Text>
      </TouchableOpacity>
      {expandedFilters.partySize && (
        <View style={styles.partySizeContainer}>
          <TouchableOpacity
            onPress={() => setFilters((prev) => ({ ...prev, partySize: Math.max(1, prev.partySize - 1) }))}
            style={styles.arrowButton}
          >
            <Text style={styles.arrowButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.partySizeValue}>{filters.partySize}</Text>
          <TouchableOpacity
            onPress={() => setFilters((prev) => ({ ...prev, partySize: prev.partySize + 1 }))}
            style={styles.arrowButton}
          >
            <Text style={styles.arrowButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Food Options */}
      <TouchableOpacity onPress={() => toggleFilter('foodOptions')} style={styles.filterHeader}>
        <Text>Food Options</Text>
        <Text>{expandedFilters.foodOptions ? '▼' : '▶'}</Text>
      </TouchableOpacity>
      {expandedFilters.foodOptions && (
        <>
          <View style={styles.row}>
            <Text>Food Selected:</Text>
            <Switch
              value={filters.foodSelected}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, foodSelected: value }))}
            />
          </View>

          {filters.foodSelected && (
            <>
              <Text>Dietary Restrictions:</Text>
              <View style={styles.dietaryRestrictionsContainer}>
                {dietary.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.checkbox,
                      filters.selectedDietary.includes(option) && styles.selectedCheckbox,
                    ]}
                    onPress={() => toggleDietarySelection(option)}
                  >
                    <Text>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </>
      )}

      {/* Add similar sections for other filters */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  partySizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  arrowButton: {
    padding: 8,
    backgroundColor: '#FFA726',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  arrowButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  partySizeValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dietaryRestrictionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  checkbox: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCheckbox: {
    backgroundColor: '#FFA726',
    borderColor: '#FFA726',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Filters;