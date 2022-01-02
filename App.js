import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// import screens
import ExpenseScreen from './screens/ExpenseScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerContent from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor:'rgb(55,127,242)' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
            fontSize:20
          }
        }}
        >
        {/* Registering Screens with Navigator*/}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Claim Invoice" component={ExpenseScreen} options={{style:{backgroundColor:'white'}}} />
        <Drawer.Screen name="Rides" component={ExpenseScreen} />
        <Drawer.Screen name="Support" component={ExpenseScreen} />
        <Drawer.Screen name="Settings" component={ExpenseScreen} />
        <Drawer.Screen name="Sign Out" component={ExpenseScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};