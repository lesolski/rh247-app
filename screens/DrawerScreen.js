// ./screens/DrawerScreen.js

import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/** Avatar + Name */}
      <SafeAreaView style={styles.drawerContainer}>
        <View style={styles.avatar}>
          <Image source={require("../assets/avatar.jpeg")} />
        </View>
        <Text style={styles.userText}>Sasha D.</Text>
      </SafeAreaView>

      {/* Render Screen Fields */}
      <DrawerItemList {...props} labelStyle={{ fontFamily: "roboto-mono" }} />

      {/* Push down the Signout Button */}
      <View style={{ height: 150 }}></View>

      {/** Sign-Out Button */}
      <DrawerItem
        label="Sign Out"
        labelStyle={{ fontFamily: "roboto-mono" }}
        icon={({ size, focused }) => (
          <Ionicons
            name="log-out-outline"
            size={size}
            color={focused ? COLORS.primary : "grey"}
          />
        )}
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
    borderColor: COLORS.primary,
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
