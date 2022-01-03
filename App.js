import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// import screens
import ExpenseScreen from './screens/ExpenseScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerContent from './screens/DrawerContent';
import { Ionicons } from '@expo/vector-icons';

import COLORS from './constants/colors'


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          drawerType:'back',
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
            fontSize:20
          }
        }}
        >

        {/* REGISTERING SCREENS*/}
        <Drawer.Screen
          name="Home" 
          component={ExpenseScreen} 
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