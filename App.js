import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Import the Homepage
import LogIn from './screens/LogIn'; // Login page
import Registration from './screens/Registration'; // Registration page
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; // Forgot Password page
import ExploreScreen from './screens/ExploreScreen'; // Explore page

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* Homepage */}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        {/* Login */}
        <Stack.Screen 
          name="Login" 
          component={LogIn} 
          options={{ headerShown: false }} 
        />
        {/* Registration */}
        <Stack.Screen 
          name="Registration" 
          component={Registration} 
          options={{ title: 'Register' }} 
        />
        {/* Forgot Password */}
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ title: 'Forgot Password' }} 
        />
        {/* Explore */}
        <Stack.Screen 
          name="Explore" 
          component={ExploreScreen} 
          options={{ title: 'Explore' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;