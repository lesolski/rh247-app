// ./App.js

// React + RN
import React, { useState } from 'react';

// Redux
import { createStore, combineReducers } from 'redux';

// expo imports
import AppLoading  from 'expo-app-loading';

// React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

// styling imports
import COLORS from './constants/colors'
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

// Screens 
import DrawerContent from './screens/DrawerScreen';
import CScreen from './navigation/TabNavigation';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import HelpScreen from './screens/HelpScreen';
import ColleaguesScreen from './screens/ColleaguesScreen';


// THEME SETTINGS
const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'rgb(33, 33, 33)'
  }
};

// load fonts first
const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-mono': require('./assets/fonts/roboto-mono-regular.ttf')
  });
};

const Drawer = createDrawerNavigator();

export default function App() {
  // Loader state
  const [fontLoaded, setFontLoaded] = useState(false);

  // Check wether or not the font is loaded
  if (!fontLoaded){
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: COLORS.primary,
          drawerType:'back',
          headerStyle: { backgroundColor: COLORS.foreground, borderBottomColor: COLORS.primary, borderBottomWidth:2, },
          headerTintColor: COLORS.primary, 
          headerTitleStyle: {
            fontSize:20,
            fontFamily: 'roboto-mono',
          },
          drawerLabelStyle:{
              fontFamily:'roboto-mono',
            }
        }}
        >

        {/* REGISTERING SCREENS*/}
        <Drawer.Screen
          name="Home" 
          component={HomeScreen} 
          options={{
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
          component={ProfileScreen} 
          options={{
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
        <Drawer.Screen 
          name="Reports" 
          component={HomeScreen} 
          options={{
            title:'Reports',
            drawerIcon: ({focused, size}) => (
              <Ionicons
              name='logo-stackoverflow'
              size={size}
              color={focused ? COLORS.primary: 'grey'}
              />
           ),
          }} 
        />

        <Drawer.Screen 
          name="Rides" 
          component={HomeScreen} 
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
          name="Claim Invoice" 
          component={ExpenseScreen} 
          options={{
            drawerLabel:'Claim Invoice',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name= {focused ? 'receipt' : 'receipt-outline'}
                size={size}
                color={focused ? COLORS.primary: 'grey'}
              />
            ),
          }}
        />

        <Drawer.Screen 
          name="Colleagues" 
          component={ColleaguesScreen} 
          options={{
          title:'Colleagues',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name= {focused ? 'people' : 'people-outline'}
              size={size}
              color={focused ? COLORS.primary: 'grey'}
              />
           ),
          }} 
        />

        <Drawer.Screen 
          name="Help" 
          component={HelpScreen} 
          options={{
            title:'Help',
            drawerIcon: ({focused, size}) => (
              <Ionicons
              name= {focused ? 'help-circle' : 'help-circle-outline'}
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
