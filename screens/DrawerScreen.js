// ./screens/DrawerScreen.js

import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Switch,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../contexts/ThemeContext";

const DrawerContent = (props) => {
  const { isThemeDark, toggleTheme } = React.useContext(ThemeContext);
  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      {/** Avatar + Name */}
      <SafeAreaView style={styles.drawerContainer}>
        <View style={[styles.avatar, { borderColor: theme.colors.primary }]}>
          <Image source={require("../assets/avatar.jpeg")} />
        </View>
        <Text style={styles.userText}>Sasha D.</Text>
      </SafeAreaView>

      {/* Render Screen Fields */}
      <DrawerItemList {...props} labelStyle={{ fontFamily: "roboto-mono" }} />

      {/** Theme Switch Toggle */}
      <Switch
        trackColor={{ false: "#fff", true: theme.colors.text }}
        thumbColor={isThemeDark ? theme.colors.primary : "#ccc"}
        onValueChange={toggleTheme}
        value={isThemeDark}
        style={{ alignSelf: "flex-end", marginRight: 10 }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: "center",
    height: 200,
  },

  avatar: {
    width: 150,
    height: 150,
    marginLeft: 16,
    borderRadius: 75,
    borderWidth: 2,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
  },

  userText: {
    marginLeft: 16,
    marginVertical: 12,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    fontFamily: "roboto-mono",
  },
});

export default DrawerContent;
