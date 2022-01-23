// ./navigation/ColleaguesTabNavigation.js

import React from "react";
import { Pressable } from "react-native";

// Styling imports
import { Ionicons } from "@expo/vector-icons";

// Navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useTheme } from "@react-navigation/native";

// Screen imports
import ColleaguesScreen from "./../screens/colleagues/ColleaguesScreen";

const Tabs = createBottomTabNavigator();

const ColleaguesTabNavigator = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Tabs.Navigator
      initialRouteName="RH247"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "RH247") {
            iconName = focused ? "people-circle" : "people-circle-outline";
          } else if (route.name === "Extern") {
            iconName = focused ? "people" : "people-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
          borderBottomColor: theme.colors.primary,
          borderBottomWidth: 2,
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: "roboto-mono",
        },
        tabBarActiveTintColor: theme.colors.primary,
      })}
    >
      <Tabs.Screen
        name="RH247"
        component={ColleaguesScreen}
        options={{
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons
                name="menu-outline"
                size={32}
                color={theme.colors.primary}
              />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="Extern"
        component={ColleaguesScreen}
        options={{
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons
                name="menu-outline"
                size={32}
                color={theme.colors.primary}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default ColleaguesTabNavigator;
