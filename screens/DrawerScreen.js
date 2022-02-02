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
import { Ionicons } from "@expo/vector-icons";

const DrawerContent = (props) => {
  const { isThemeDark, toggleTheme } = React.useContext(ThemeContext);
  const theme = useTheme();

  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      {/** Avatar + Name */}
      <SafeAreaView style={styles.drawerContainer}>
        <View style={[styles.avatar, { borderColor: theme.colors.primary }]}>
          <Ionicons name="person" color={theme.colors.primary} size={80} />
        </View>
        <Text style={[styles.userText, { color: theme.colors.contrast_text }]}>
          Sasha D.
        </Text>
      </SafeAreaView>

      {/* Render Screen Fields */}
      <DrawerItemList {...props} labelStyle={{ fontFamily: "roboto-mono" }} />

      {/** Theme Switch Toggle */}
      <View
        style={{
          marginVertical: 4,
          marginHorizontal: 10,
          flex: 1,
          marginTop: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 8,
            borderRadius: 4,
          }}
        >
          <Ionicons
            name={theme.dark ? "moon" : "moon-outline"}
            size={24}
            color={theme.dark ? theme.colors.primary : theme.colors.text}
          />
          <View style={styles.themeLabel}>
            <Text
              style={[
                { fontFamily: "roboto-mono", color: theme.colors.text },
                props.labelStyle,
              ]}
            >
              Dark Theme
            </Text>
          </View>
          <Switch
            trackColor={{
              false: theme.colors.foreground,
              true: theme.colors.foreground,
            }}
            thumbColor={theme.colors.primary}
            onValueChange={toggleTheme}
            value={isThemeDark}
            style={{ marginLeft: 63}}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: "center",
  },

  avatar: {
    width: 150,
    height: 150,
    marginLeft: 16,
    borderRadius: 75,
    borderWidth: 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
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

  themeLabel: {
    marginLeft: 32,
  },
});

export default DrawerContent;
