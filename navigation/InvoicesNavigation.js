// ./navigation/SitesTabNavigation.js

import React from "react";
import { Pressable } from "react-native";

// Styling imports
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions, useTheme } from "@react-navigation/native";

// Screen imports
import NewInvoiceScreen from "../screens/invoices/NewInvoiceScreen";
import InvoicesHistoryScreen from "../screens/invoices/InvoicesHistoryScreen";

const Stack = createStackNavigator();

const InvoicesStackNavigator = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="New Invoice"
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
        name="New Invoice"
        component={NewInvoiceScreen}
        options={{
          headerRight: ({ focused, size }) => (
            <Pressable
              style={{ marginRight: 5 }}
              onPress={() => navigation.navigate("Invoices History")}
            >
              <Ionicons name={"archive-outline"} size={28} color={theme.colors.headerText} />
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
      <Stack.Screen name="Invoices History" component={InvoicesHistoryScreen} options={{}} />
    </Stack.Navigator>
  );
};

export default InvoicesStackNavigator;
