// ./screens/HelpScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import COLORS from "../constants/colors";

const HelpScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>This is version v0.0.1</Text>
      <Text style={[styles.text, { fontSize: 14 }]}>Now piss off.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "roboto-mono",
    color: COLORS.text,
  },
});

export default HelpScreen;
