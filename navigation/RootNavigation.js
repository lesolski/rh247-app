// ./navigation/RootNavigation.js

import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

// Screens
import DrawerContent from "../screens/DrawerScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import HelpScreen from "../screens/HelpScreen";
import RidesScreen from "../screens/RidesScreen";
import EmptyScreen from "../screens/EmptyScreen";
import ShipmentsScreen from "../screens/ShipmentsScreen";
import RidingScreen from "../screens/RidingScreen";
import InvoicesHistoryScreen from "../screens/InvoicesHistoryScreen";

// Navigators
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import ColleaguesTabsNavigator from "./ColleaguesTabNavigation";
import SitesStackNavigator from "./SitesStackNavigation";

// Styling
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../contexts/ThemeContext";
import { DarkTheme, LightTheme } from "../constants/Theme";

const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  const [isThemeDark, setIsThemeDark] = useState(true);

  let theme = isThemeDark ? DarkTheme : LightTheme;
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({ toggleTheme, isThemeDark }),
    [toggleTheme, isThemeDark]
  );

  return (
    <ThemeContext.Provider value={preferences}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            drawerActiveTintColor: theme.colors.primary,
            drawerInactiveTintColor: theme.colors.text,
            drawerType: "slide",
            headerStyle: {
              backgroundColor: theme.colors.headerAndTabs,
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: 2,
            },
            drawerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.headerText,
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "roboto-mono",
            },
            drawerLabelStyle: {
              fontFamily: "roboto-mono",
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <Ionicons
                  name="menu-outline"
                  size={28}
                  color={theme.colors.headerText}
                />
              </TouchableOpacity>
            ),
          })}
        >
          {/* REGISTERING SCREENS*/}
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerLabel: "Home",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="CheckIns"
            component={InvoicesHistoryScreen}
            options={{
              title: "Check IN/OUT",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "time" : "time-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Rides"
            component={RidingScreen}
            options={{
              title: "Rides",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "car" : "car-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Invoices"
            component={ExpenseScreen}
            options={{
              drawerLabel: "Invoices",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "receipt" : "receipt-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Sites"
            component={SitesStackNavigator}
            options={{
              title: "Sites",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "business" : "business-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
              headerShown: false,
            }}
          />

          <Drawer.Screen
            name="Shipments"
            component={ShipmentsScreen}
            options={{
              title: "Shipments",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "cube" : "cube-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Colleagues"
            component={ColleaguesTabsNavigator}
            options={{
              title: "Colleagues",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "people" : "people-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
              headerShown: false,
            }}
          />

          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Profile",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Help"
            component={HelpScreen}
            options={{
              title: "Help",
              drawerIcon: ({ focused, size }) => (
                <Ionicons
                  name={focused ? "help-circle" : "help-circle-outline"}
                  size={size}
                  color={focused ? theme.colors.primary : theme.colors.text}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default RootNavigation;
