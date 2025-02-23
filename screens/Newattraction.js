// NewAttraction.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const NewAttraction = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState('$');
  const [review, setReview] = useState('');

  const handleUpload = () => {
    const newSpot = {
      name,
      address,
      rating,
      price,
      review,
    };
    navigation.navigate('MySecretSpots', { newSpot });
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#FFF0F5' }]}>
      <Text style={styles.newAttractionTitle}>New Attraction</Text>

      {/* Name Field */}
      <Text style={styles.label}>*Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter the name of the place"
      />

      {/* Address Field */}
      <Text style={styles.label}>*Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter the address"
      />

      {/* Rating System */}
      <Text style={styles.label}>Rating:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Text style={star <= rating ? styles.starFilled : styles.starEmpty}>⭐</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Price Slider */}
      <Text style={styles.label}>Price:</Text>
      <View style={styles.priceContainer}>
        <TouchableOpacity onPress={() => setPrice('$')}>
          <Text style={price === '$' ? styles.priceSelected : styles.priceOption}>$</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPrice('$$')}>
          <Text style={price === '$$' ? styles.priceSelected : styles.priceOption}>$$</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPrice('$$$')}>
          <Text style={price === '$$$' ? styles.priceSelected : styles.priceOption}>$$$</Text>
        </TouchableOpacity>
      </View>

      {/* Review Box */}
      <Text style={styles.label}>Review:</Text>
      <TextInput
        style={styles.reviewInput}
        value={review}
        onChangeText={setReview}
        placeholder="Write your review here..."
        multiline
        maxLength={300}
      />
      <Text style={styles.wordCount}>{300 - review.length} words left</Text>

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  newAttractionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  starFilled: {
    fontSize: 24,
    color: '#FFD700',
    marginHorizontal: 2,
  },
  starEmpty: {
    fontSize: 24,
    color: '#ccc',
    marginHorizontal: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  priceOption: {
    fontSize: 18,
    color: '#ccc',
    marginHorizontal: 5,
  },
  priceSelected: {
    fontSize: 18,
    color: '#FF69B4',
    marginHorizontal: 5,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    height: 100,
    textAlignVertical: 'top',
  },
  wordCount: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  uploadButton: {
    backgroundColor: '#FF69B4',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewAttraction;