import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [spots, setSpots] = useState([]);

  const addSpot = (newSpot) => {
    setSpots([...spots, newSpot]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Secret Spots</Text>
      <FlatList
        data={spots}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.spotCard}
            onPress={() => console.log(`Navigate to ${item.name}`)}
          >
            <Text style={styles.spotName}>{item.name}</Text>
            <Text style={styles.spotReview}>"{item.review}"</Text>
            <Text style={styles.spotRating}>{'⭐'.repeat(item.rating)}</Text>
            <Text style={styles.spotPrice}>{item.price}</Text>
            {item.address && <Text style={styles.spotAddress}>{item.address}</Text>}
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyCardText}>New spots will appear here!</Text>
          </View>
        }
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          const newSpot = {
            name: 'New Spot',
            review: 'A great place!',
            rating: 4,
            price: '$$',
            address: '123 Main St',
          };
          addSpot(newSpot);
        }}
      >
        <Text style={styles.addButtonText}>Enter new +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial Rounded MT Bold', // Use a playful font if available
  },
  spotCard: {
    backgroundColor: '#FFF0F5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  spotName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  spotReview: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  spotRating: {
    color: '#FFD700',
    marginBottom: 5,
  },
  spotPrice: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  spotAddress: {
    fontSize: 12,
    color: '#666',
  },
  emptyCard: {
    backgroundColor: '#FFC0CB',
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCardText: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#FF69B4',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;