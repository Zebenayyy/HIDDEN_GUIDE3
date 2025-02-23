import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
//import { /*SafeAreaView, View, Text, TextInput, Button, */StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//import CustomDrawerContent from './CustomDrawerContent';
import {StyleSheet, View, Text, Button} from 'react-native';

import EventPage from './Hidden-Guide/screens/EventPage';
import HomeScreen from './Hidden-Guide/screens/HomeScreen';
import Itinerary from './Hidden-Guide/screens/Itinerary';
import LogIn from './Hidden-Guide/screens/LogIn';
import MapView from './Hidden-Guide/screens/MapView';
import OpenToApp from './Hidden-Guide/screens/OpenToApp';
import Options from './Hidden-Guide/screens/Options';
import ProfileScreen from './Hidden-Guide/screens/ProfileScreen';
import Quiz1 from './Hidden-Guide/screens/Quiz1';
import Quiz2 from './Hidden-Guide/screens/Quiz2';
import Quiz3 from './Hidden-Guide/screens/Quiz3';
import Recs from './Hidden-Guide/screens/Recs';
import Registration from './Hidden-Guide/screens/Registration';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ fontSize: 20, padding: 10 }}>Custom Drawer Content</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
}

const App = () => {
  return (

    /*<><View style={styles.container}>
      <Text>Hidden Guide</Text>
      <StatusBar style="auto" />
    </View>*/
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName ="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>

            {/*Supposed to define screens*/}
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Introduction" component={OpenToApp} />
            <Drawer.Screen name="Log In" component={LogIn} />
            <Drawer.Screen name="Registration" component={Registration} />
            <Drawer.Screen name="Quiz1" component={Quiz1} />
            <Drawer.Screen name="Quiz2" component={Quiz2} />
            <Drawer.Screen name="Quiz3" component={Quiz3} />
            <Drawer.Screen name="Options" component={Options} />
            <Drawer.Screen name="Map View" component={MapView} />
            <Drawer.Screen name="Recommendations" component={Recs} />
            <Drawer.Screen name="Event" component={EventPage} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Itinerary" component={Itinerary} />
          </Drawer.Navigator>
        </NavigationContainer>
        <StatusBar style="auto"/>
      </GestureHandlerRootView>/*</>*/
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*    <View style={styles.container}>
    <Text>Hidden Guide</Text>
    <StatusBar style="auto" />
  </View> */

export default App;

/* App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from './Hidden-Guide/screens/HomeScreen';
import ProfileScreen from './Hidden-Guide/screens/ProfileScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          
          
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;*/