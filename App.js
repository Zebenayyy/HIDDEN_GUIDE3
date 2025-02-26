import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen'; // Import the Homepage
import LogIn from './screens/LogIn'; // Import the LogIn screen
import Registration from './screens/Registration'; // Import the Registration screen
import Quiz1 from './screens/Quiz1'; // Import the Quiz1 screen
import Quiz2 from './screens/Quiz2'; // Import Quiz2
import Quiz3 from './screens/Quiz3'; // Import Quiz3
import Filters from './screens/Filters'; // Import Filters
import RecommendedPlaces from './screens/RecommendedPlaces'; // Import RecommendedPlaces
import AttractionPage from './screens/AttractionPage'; // Import AttractionPage

const Stack = createStackNavigator();

const App = () => {
  const [quizData, setQuizData] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* Homepage */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        {/* LogIn Screen */}
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={({ navigation }) => ({
            headerTitle: 'Log In', // Title for the LogIn screen
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#F2B5C1', // Light pink background
            },
          })}
        />
        {/* Registration Screen */}
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={({ navigation }) => ({
            headerTitle: 'Register', // Title for the Registration screen
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#F2B5C1', // Light pink background
            },
          })}
        />
        {/* Quiz1 Page */}
        <Stack.Screen
          name="Quiz1"
          component={Quiz1}
          options={({ navigation }) => ({
            headerTitle: '', // Remove title
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.navigate('RecommendedPlaces')} // Skip to RecommendedPlaces
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#F2B5C1', // Light pink background
            },
          })}
          initialParams={{ setQuizData }}
        />
        {/* Quiz2 Page */}
        <Stack.Screen
          name="Quiz2"
          component={Quiz2}
          options={({ navigation }) => ({
            headerTitle: '', // Remove title
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.navigate('RecommendedPlaces')} // Skip to RecommendedPlaces
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#F2B5C1', // Light pink background
            },
          })}
          initialParams={{ quizData, setQuizData }}
        />
        {/* Quiz3 Page */}
        <Stack.Screen
          name="Quiz3"
          component={Quiz3}
          options={({ navigation }) => ({
            headerTitle: '', // Remove title
            headerLeft: () => (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back
              >
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.navigate('RecommendedPlaces')} // Skip to RecommendedPlaces
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#F2B5C1', // Light pink background
            },
          })}
          initialParams={{ quizData, setQuizData }}
        />
        {/* Filters Page */}
        <Stack.Screen
          name="Filters"
          component={Filters}
          options={({ navigation }) => ({
            headerTitle: 'Filters',
            headerStyle: {
              backgroundColor: '#F2B5C1', // Light pink background
            },
          })}
          initialParams={{
            initialFilters: quizData.filters || {}, // Pass quizData.filters as initialFilters
            onApplyFilters: (filters) => {
              setQuizData((prev) => ({ ...prev, filters })); // Update quizData with applied filters
              navigation.navigate('RecommendedPlaces', { filters }); // Navigate to RecommendedPlaces
            },
            onCancel: () => navigation.goBack(), // Go back when canceled
          }}
        />
        {/* RecommendedPlaces Page */}
        <Stack.Screen
          name="RecommendedPlaces"
          component={RecommendedPlaces}
          options={{ headerShown: false }}
          initialParams={{ quizData }}
        />
        {/* AttractionPage */}
        <Stack.Screen
          name="AttractionPage"
          component={AttractionPage}
          options={({ route }) => ({
            headerTitle: route.params?.name || 'Attraction', // Use the attraction's name as the title
            headerStyle: {
              backgroundColor: '#F2B5C1', // Light pink background
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles for the back button and skip button
const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10, // Add spacing from the edge
  },
  backButtonText: {
    fontSize: 24,
    color: '#E75A7C', // Darker pink color for the arrow
  },
  skipButton: {
    marginRight: 10, // Add spacing from the edge
  },
  skipButtonText: {
    fontSize: 16,
    color: '#E75A7C', // Darker pink color for the text
    fontWeight: 'bold',
  },
});

export default App;