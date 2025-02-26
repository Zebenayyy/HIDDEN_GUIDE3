import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Explore Page!</Text>
      <Text style={styles.subtitle}>You are now logged in.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB3C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default ExploreScreen;