// ./App.js

// React + RN
import React, { useState } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';

// Redux
import { createStore, combineReducers } from 'redux';

// Expo imports
import AppLoading from 'expo-app-loading';

// React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

// styling imports
import COLORS from './constants/colors'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import * as Font from 'expo-font';
import MyTheme from './constants/theme';

// Screens 
import DrawerContent from './screens/DrawerScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import HelpScreen from './screens/HelpScreen';
import RidesScreen from './screens/RidesScreen';
import EmptyScreen from './screens/EmptyScreen';

import ColleaguesTabsNavigator from './navigation/ColleaguesTabNavigation';
import SitesStackNavigator from './navigation/SitesStackNavigation';



// load fonts first
const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-mono': require('./assets/fonts/roboto-mono-regular.ttf')
  });
};

const Drawer = createDrawerNavigator();

export default function App( { navigation } ) {

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
        screenOptions={ ({ navigation })  => ({
          drawerActiveTintColor: COLORS.primary,
          drawerType:'back',
          headerStyle: { backgroundColor: COLORS.foreground, borderBottomColor: COLORS.primary, borderBottomWidth:2},
          headerTintColor: COLORS.primary, 
          headerTitleStyle: {
            fontSize:20,
            fontFamily: 'roboto-mono',
          },
          drawerLabelStyle:{
              fontFamily:'roboto-mono',
            },
          headerLeft: () => (
            <TouchableOpacity 
              style={{marginLeft:10}} 
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
              <Ionicons
                name= 'menu-outline'
                size={28}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          )}
        )}>

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
          name="CheckIns" 
          component={EmptyScreen} 
          options={{
            title:'Check IN/OUT',
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name= {focused ? 'time' : 'time-outline'}
                size={size}
                color={focused ? COLORS.primary: 'grey'}
              />
            ),
          }}
        />

        <Drawer.Screen 
          name="Rides" 
          component={RidesScreen} 
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
          name="Invoices" 
          component={ExpenseScreen} 
          options={{
            drawerLabel:'Invoices',
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
          name="Sites" 
          component={SitesStackNavigator} 
          options={{
            title:'Sites',
            drawerIcon: ({focused, size}) => (
              <FontAwesome5
              name='building'
              size={size}
              color={focused ? COLORS.primary: 'grey'}
              />
            ),
            headerShown:false
          }} 
        />

        <Drawer.Screen 
          name="Colleagues" 
          component={ColleaguesTabsNavigator} 
          options={{
          title:'Colleagues',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name= {focused ? 'people' : 'people-outline'}
              size={size}
              color={focused ? COLORS.primary: 'grey'}
              />
           ),
           headerShown:false
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
