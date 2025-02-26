import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Replace this with your actual Google Maps API key
const GOOGLE_PLACES_API_KEY = 'AIzaSyD9QiCiNQXLgsCBLqcrjsJm867RKZ_bO9s'; // Add your API key here

const AttractionPage = ({ route, navigation }) => {
  const [attraction, setAttraction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // Favorite state

  // Extract place_id and name from route params
  const { place_id, name } = route.params;

  useEffect(() => {
    fetchAttractionDetails();
  }, []);

  /**
   * Fetch Attraction Details
   * ------------------------
   * Uses the Google Places Details API to fetch detailed information about the attraction.
   */
  const fetchAttractionDetails = async () => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
        params: {
          place_id,
          key: GOOGLE_PLACES_API_KEY,
          fields: 'name,formatted_address,photos,rating,user_ratings_total,website,opening_hours,international_phone_number',
        },
      });

      if (response.data.result) {
        setAttraction(response.data.result);
      }
    } catch (error) {
      console.error('Error fetching attraction details:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Render Loading State
   * --------------------
   * Displays a loading indicator while fetching attraction details.
   */
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  /**
   * Handle Missing Data
   * -------------------
   * Displays a fallback message if no attraction data is found.
   */
  if (!attraction) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Attraction not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>

          {/* Favorite Icon */}
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.favoriteButton}>
            <Icon
              name={isFavorite ? 'favorite' : 'favorite-border'}
              size={24}
              color={isFavorite ? '#FFA726' : '#333'}
            />
          </TouchableOpacity>
        </View>

        {/* Hero Image & Restaurant Information */}
        <Image
          source={{
            uri: attraction.photos && attraction.photos.length > 0
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos[0].photo_reference}&key=${GOOGLE_PLACES_API_KEY}`
              : 'https://via.placeholder.com/400', // Fallback image
          }}
          style={styles.heroImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantName}>{attraction.name}</Text>
          <Text style={styles.cuisineType}>Restaurant</Text>
          <TouchableOpacity style={styles.callToActionButton}>
            <Text style={styles.buttonText}>View Menu</Text>
          </TouchableOpacity>
        </View>

        {/* Essential Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Essential Details</Text>
          <Text style={styles.detailText}>📍 {attraction.formatted_address}</Text>
          <Text style={styles.detailText}>📞 {attraction.international_phone_number || 'Not available'}</Text>
          <Text style={styles.detailText}>🕒 Opening Hours:</Text>
          {attraction.opening_hours?.weekday_text.map((day, index) => (
            <Text key={index} style={styles.detailText}>{day}</Text>
          ))}
        </View>

        {/* Rating System */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rating</Text>
          <Text style={styles.ratingText}>
            ⭐ {attraction.rating} ({attraction.user_ratings_total} reviews)
          </Text>
        </View>

        {/* Popular Menu Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Menu Items</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder for menu item image
                  style={styles.menuItemImage}
                />
                <Text style={styles.menuItemName}>Item {item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Review Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.buttonText}>Write a Review</Text>
          </TouchableOpacity>
          {/* Example Review */}
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewerName}>John Doe</Text>
            <Text style={styles.reviewText}>⭐⭐⭐⭐⭐ - Great food and service!</Text>
            <Text style={styles.reviewTimestamp}>2 hours ago</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  favoriteButton: {
    padding: 8,
  },
  heroImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cuisineType: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  callToActionButton: {
    backgroundColor: '#FFA726',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  menuItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  menuItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  menuItemName: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  reviewButton: {
    backgroundColor: '#FFA726',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  reviewContainer: {
    marginBottom: 16,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  reviewTimestamp: {
    fontSize: 12,
    color: '#666',
  },
});

export default AttractionPage;