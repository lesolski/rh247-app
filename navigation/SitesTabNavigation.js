import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// Styling imports
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

// Screen imports
import ListOfSitesScreen from '../screens/sites/ListOfSitesScreen';
import AddSiteScreen from '../screens/sites/AddSiteScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, DarkTheme } from '@react-navigation/native';

// THEME SETTINGS
const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background:COLORS.background 
  }
};

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator 
      theme={MyTheme}
      initialRouteName='List of sites'
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.foreground, borderBottomColor: COLORS.primary, borderBottomWidth:2},
        headerTintColor: COLORS.primary, 
        headerTitleStyle: {
          fontSize:20,
          fontFamily: 'roboto-mono',
        },
      }}>
      <Stack.Screen 
        name="List of sites" 
        component={ListOfSitesScreen} 
        options={{
          headerRight:({focused, size}) => (
            <Pressable style={{marginRight:5}} 
              onPress={ () => navigation.navigate('Add site')}>
              <Ionicons
                name= {'add'}
                size={40}
                color={COLORS.primary}
              />
            </Pressable>
            ),
          headerLeft: () => (
            <Pressable style={{marginLeft:10}} 
              onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons
                name= 'menu-outline'
                size={32}
                color={COLORS.primary}
              />
            </Pressable>
            ),
        }}
      />
      <Stack.Screen 
        name="Add site" 
        component={AddSiteScreen} 
        options={{
       }}
        />
    </Stack.Navigator>
  );
}

export default StackNavigator;