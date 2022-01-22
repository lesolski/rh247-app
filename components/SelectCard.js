// ./components/SelectCard.js

import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import COLORS from "../constants/colors";

const SelectCard = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.shadow,
        ...props.style,
        ...(props.isSelected
          ? { backgroundColor: COLORS.primary }
          : { backgroundColor: COLORS.foreground }),
      }}
      onPress={props.onPress}
      activeOpacity={0.3}
    >
      <Text
        style={[
          styles.dateText,
          props.isSelected
            ? { color: COLORS.foreground }
            : { color: COLORS.primary },
        ]}
      >
        {props.dateNum}
      </Text>
      <Text
        style={[
          styles.dayText,
          props.isSelected
            ? { color: COLORS.foreground }
            : { color: COLORS.text },
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
    backgroundColor: "white",
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
