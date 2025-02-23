import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { /*SafeAreaView, View, Text, TextInput, Button, */StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from './CustomDrawerContent';
import {View, Text, Button} from 'react-native';

import EventPage from './screens/EventPage';
import Itinerary from './screens/Itinerary';
import LogIn from './screens/LogIn';
import MapView from './screens/MapView';
import OpenToApp from './screens/OpenToApp';
import Options from './screens/Options';
import Profile from './screens/Profile';
import Quiz1 from './screens/Quiz1';
import Quiz2 from './screens/Quiz2';
import Quiz3 from './screens/Quiz3';
import Recs from './screens/Recs';
import Registration from './screens/Registration';

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

    <><View style={styles.container}>
      <Text>Hidden Guide</Text>
      <StatusBar style="auto" />
    </View>
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
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Itinerary" component={Itinerary} />
          </Drawer.Navigator>
        </NavigationContainer>

      </GestureHandlerRootView></>
    
    
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