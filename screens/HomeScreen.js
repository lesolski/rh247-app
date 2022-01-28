// ./screens/HomeScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Styling
import { useTheme } from '@react-navigation/native';

// Components
import MonthOverview from "../components/MonthOverview";

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.mainContainer}>

      <View style={{ height: "100%", width: "100%"}}>
        <Text style={[styles.labelText, { color: theme.colors.title }]}>Month overview</Text>
        <MonthOverview style={{height:"50%", height:300}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  labelText: {
    fontFamily: "roboto-mono",
    fontSize: 20,
  },
});

export default HomeScreen;
