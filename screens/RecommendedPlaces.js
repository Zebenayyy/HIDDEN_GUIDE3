import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import Filters from './Filters'; // Import the Filters component
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// Replace this with your actual Google Maps API key
const GOOGLE_PLACES_API_KEY = 'AIzaSyD9QiCiNQXLgsCBLqcrjsJm867RKZ_bO9s'; // Add your API key here

const RecommendedPlaces = ({ route }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterVisible, setIsFilterVisible] = useState(false); // Controls modal visibility
  const { filters: initialFilters = {} } = route.params || {};
  const [filters, setFilters] = useState(initialFilters);
  const navigation = useNavigation(); // Hook for navigation

  // Function to fetch user's location
  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Permission to access location was denied');
      return null;
    }

    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      console.log('User Location: ', { latitude, longitude });
      return { latitude, longitude };
    } catch (error) {
      console.error('Error fetching user location:', error);
      return null;
    }
  };

  // Fetch places based on location and filters
  const fetchPlaces = async (location) => {
    setLoading(true);
    try {
      const radius = filters.distanceRange ? filters.distanceRange * 1000 : 5000; // Default to 5 km
      const type = filters.keyword || 'restaurant';

      const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          location: `${location.latitude},${location.longitude}`,
          radius,
          type,
          key: GOOGLE_PLACES_API_KEY,
        },
      });

      console.log('API Response:', response.data); // Log the API response
      if (response.data.status === 'OK') {
        setPlaces(response.data.results);
      } else {
        console.warn('No results found. API Status:', response.data.status);
      }
    } catch (error) {
      console.error('Error fetching places:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initialize location and fetch places
  useEffect(() => {
    const initialize = async () => {
      const userLocation = await getUserLocation();
      const defaultLocation = userLocation || { latitude: 41.8781, longitude: -87.6298 }; // Chicago
      fetchPlaces(defaultLocation);
    };
    initialize();
  }, [filters]); // Re-run when filters change

  // Render each place item with navigation to AttractionPage
  const renderPlaceItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('AttractionPage', { place_id: item.place_id, name: item.name })
      }
      style={styles.placeItem}
    >
      <Text style={styles.placeName}>{item.name}</Text>
      <Text style={styles.placeAddress}>{item.vicinity || 'Address not available'}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Filter Button */}
      <View style={styles.header}>
        <Text style={styles.title}>Recommended Places</Text>
        <TouchableOpacity onPress={() => setIsFilterVisible(true)} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFA726" />
      ) : (
        <FlatList
          data={places}
          keyExtractor={(item) => item.place_id}
          renderItem={renderPlaceItem}
          ListEmptyComponent={<Text>No places found. Try adjusting your filters.</Text>}
        />
      )}

      {/* Filters Modal */}
      <Modal visible={isFilterVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Filters
              initialFilters={filters}
              onApplyFilters={(appliedFilters) => {
                setIsFilterVisible(false); // Close the modal
                setFilters(appliedFilters); // Update filters
              }}
              onCancel={() => setIsFilterVisible(false)} // Close the modal
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#FFA726',
    borderRadius: 8,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  placeItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  placeAddress: {
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'flex-end', // Align modal to the bottom
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: '80%', // Limit modal height
  },
});

export default RecommendedPlaces;