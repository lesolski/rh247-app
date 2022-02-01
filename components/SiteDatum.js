// ./components/CategoryCard.js

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const SiteDatum = (props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.card,
        ...props.style,
        backgroundColor: theme.colors.foreground,
      }}
    >
      <Text
        style={[styles.categoryText, !props.isSelected ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : '', {color: theme.colors.text}]}
      >
        {props.category}
      </Text>
        <Ionicons
          name={
            props.isSelected
              ? "checkmark-circle-outline"
              : "close-circle-outline"
          }
          size={25}
          color={props.isSelected ? theme.colors.primary : theme.colors.text}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    borderRadius: 10,
  },

  categoryText: {
    marginLeft: 6,
    fontFamily: "roboto-mono",
    fontSize: 20,
  },
});

export default SiteDatum;
