import React, { useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';

// import screens
import ExpenseScreen from './screens/ExpenseScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerContent from './screens/DrawerContent';

// styling imports
import COLORS from './constants/colors'
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

// expo imports
import AppLoading  from 'expo-app-loading';

// THEME SETTINGS
const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'rgb(33, 33, 33)'
  },
};

const fetchFonts = () => {
  Font.loadAsync({
    'roboto-mono': require('./assets/fonts/roboto-mono-regular.ttf')
  });
};

const Drawer = createDrawerNavigator();

export default function App() {
  // Loader
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded){
    console.log('aaaa')
    return <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => {
      return console.log(err);
    }}
    />
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor:'rgb(29,185,84)',
          drawerType:'back',
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.background, 
          headerTitleStyle: {
            fontWeight:'bold',
            fontSize:20
          }
        }}
        >

        {/* REGISTERING SCREENS*/}
        <Drawer.Screen
          name="Home" 
          component={HomeScreen} 
          options={{
            style:{backgroundColor:'white'},
            drawerLabel:'Home',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name= {focused ? 'home' : 'home-outline'}
                size={size}
                color={focused ? COLORS.primary: 'grey'}
              />
            ),
          }}
        />

        <Drawer.Screen 
          name="Profile" 
          component={ExpenseScreen} 
          options={{
            style:{backgroundColor:'white'},
            title:'Profile',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name= {focused ? 'person' : 'person-outline'}
                size={size}
                color={focused ? COLORS.primary: 'grey'}
              />
            ),
          }}
        />

        <Drawer.Screen name="Rides" component={ExpenseScreen} 
        options={{
            title:'Rides',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name= {focused ? 'car' : 'car-outline'}
                size={size}
                color={focused ? COLORS.primary: 'grey'}
              />
            ),
        }}
        />

        <Drawer.Screen 
          name="Supports" 
          component={ExpenseScreen} 
          options={{
            title:'Supports',
            drawerIcon: ({focused, size}) => (
              <Ionicons
              name= {focused ? 'people' : 'people-outline'}
              size={size}
              color={focused ? COLORS.primary: 'grey'}
              />
           ),
          }} 
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};