import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const FirstScreen = props => {
  return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>This is version v0.2.1</Text>
        <Text style={[styles.text, {fontSize:14}]}>Now piss off.</Text>
      </View>
  );
};

const SecondScreen = props => {
  return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>This is version v0.0.1</Text>
        <Text style={[styles.text, {fontSize:14}]}>Now piss off.</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    fontFamily:'roboto-mono',
    color: COLORS.text
  }
});

const Tab = createBottomTabNavigator();

const Tabs = ( navData ) => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="First" 
        component={FirstScreen} 
        options={{
          tabBarShowIcon: true,
          tabBarIcon:({focused, size}) => (
            <Ionicons
              name= {focused ? 'newspaper' : 'newspaper-outline'}
              size={size}
              color={focused ? COLORS.primary: 'grey'}
            />),
          headerShown: false,
          tabBarBounces:true,
        }}
      />
      <Tab.Screen 
        name="Second" 
        component={SecondScreen} 
        options={{
          tabBarShowIcon: true,
          tabBarIcon: ({focused, size}) => (
            <Ionicons
            name= {focused ? 'add' : 'add-outline'}
            size={32}
            color={focused ? COLORS.primary: 'grey'}
            />),
          headerShown: false}}
        />
    </Tab.Navigator>
  );
}

export default Tabs;