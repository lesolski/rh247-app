import React, { useState } from 'react';
import { Button } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

// import screens
import DrawerContent from './screens/DrawerContent';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import HelpScreen from './screens/HelpScreen';
import CScreen from './navigation/ColleaguesTabNavigation'

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
  return Font.loadAsync({
    'roboto-mono': require('./assets/fonts/roboto-mono-regular.ttf')
  });
};

const Drawer = createDrawerNavigator();

export default function App() {
  // Loader
  const [fontLoaded, setFontLoaded] = useState(false);

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
          component={CScreen} 
          options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
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