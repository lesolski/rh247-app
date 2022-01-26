// ./components/SelectCard.js

import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const SelectCard = (props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{
        ...styles.shadow,
        ...props.style,
        ...(props.isSelected
          ? { backgroundColor: theme.colors.primary }
          : { backgroundColor: theme.colors.foreground }),
      }}
      onPress={props.onPress}
      activeOpacity={0.3}
    >
      <Text
        style={[
          styles.dateText,
          props.isSelected
            ? { color: theme.colors.foreground }
            : { color: theme.colors.primary },
        ]}
      >
        {props.dateNum}
      </Text>
      <Text
        style={[
          styles.dayText,
          props.isSelected
            ? { color: theme.colors.foreground }
            : { color: theme.colors.text },
        ]}
      >
        {props.dayName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    borderRadius: 10,
  },

  dateText: {
    fontFamily: "roboto-mono",
    fontSize: 30,
  },

  dayText: {
    fontFamily: "roboto-mono",
    fontSize: 15,
  },
});

export default SelectCard;
