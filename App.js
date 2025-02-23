// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Text>Hidden Guide</Text>
      <StatusBar style="auto" />
    </View>
=======
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          
          
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
>>>>>>> f9819c682e27bf12e8dd292efeed91718f10b6cd
  );
};

export default App;