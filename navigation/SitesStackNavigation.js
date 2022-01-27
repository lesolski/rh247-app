// ./navigation/SitesTabNavigation.js

import React from "react";
import { Pressable } from "react-native";

// Styling imports
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions, useTheme } from "@react-navigation/native";

// Screen imports
import ListOfSitesScreen from "../screens/sites/ListOfSitesScreen";
import AddSiteScreen from "../screens/sites/AddSiteScreen";
import MapViewScreen from "../screens/sites/MapViewScreen";

const Stack = createStackNavigator();

const SitesStackNavigator = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="List of sites"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.headerAndTabs,
          borderBottomColor: theme.colors.primary,
          borderBottomWidth: 2,
        },
        headerTintColor: theme.colors.headerText,
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: "roboto-mono",
        },
      }}
    >
      <Stack.Screen
        name="List of sites"
        component={ListOfSitesScreen}
        options={{
          headerRight: ({ focused, size }) => (
            <Pressable
              style={{ marginRight: 5 }}
              onPress={() => navigation.navigate("Add site")}
            >
              <Ionicons name={"add"} size={28} color={theme.colors.headerText} />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons
                name="menu-outline"
                size={28}
                color={theme.colors.headerText}
              />
            </Pressable>
          ),
        }}
      />

      <Stack.Screen name="Add site" component={AddSiteScreen} options={{}} />

      <Stack.Screen name="Map" component={MapViewScreen} options={{}} />
    </Stack.Navigator>
  );
};

export default SitesStackNavigator;
