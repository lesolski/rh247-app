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

// Navigators
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import ColleaguesTabsNavigator from "./ColleaguesTabNavigation";
import SitesStackNavigator from "./SitesStackNavigation";

// Styling
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { ThemeContext } from "../contexts/ThemeContext";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const myDefaultTheme = {
  ...DefaultTheme,
  colors: {
    primary: "rgb(66, 103, 178)",
    background: "rgb(245,245,245)",
    foreground: "rgb(255, 255, 255)",
    text: "rgb(18, 18, 18)",
    contrast_text: "rgb(33,33,33)",
    title: "rgb(18, 18, 18)"
  }
};

const myDarkTheme = {
  ...DarkTheme,
  colors: {
    primary: "rgb(29,185,84)",
    background: "rgb(33,33,33)",
    foreground: "rgb(18, 18, 18)",
    text: "rgb(179, 179, 179)",
    contrast_text: "rgb(255,255,255)",
    title: "rgb(150, 150, 150)"

  }
};

const Drawer = createDrawerNavigator();

export default RootNavigation = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? myDarkTheme : myDefaultTheme;
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  console.log(theme.dark);
  return (
    <ThemeContext.Provider value={preferences}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            drawerActiveTintColor: theme.colors.primary,
            drawerInactiveTintColor: theme.colors.text,
            drawerType: "back",
            headerStyle: {
              backgroundColor: isThemeDark ? theme.colors.foreground : theme.colors.primary,
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: 2,
            },
            drawerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: isThemeDark ? theme.colors.primary : theme.colors.background,
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
                  color={isThemeDark ? theme.colors.primary : theme.colors.background}
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
            component={EmptyScreen}
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
            component={RidesScreen}
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
