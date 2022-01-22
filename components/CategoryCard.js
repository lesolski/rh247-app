// ./components/CategoryCard.js

import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const SelectCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{
        ...styles.card,
        ...props.style,
        ...(isSelected
          ? { backgroundColor: COLORS.primary }
          : { backgroundColor: COLORS.foreground, backgroundOpacity: 0.2 }),
      }}
      onPress={() => (isSelected ? setIsSelected(false) : setIsSelected(true))}
      activeOpacity={0.3}
    >
      <Ionicons
        name={props.icon}
        size={25}
        color={isSelected ? COLORS.foreground : COLORS.primary}
      />
      <Text
        style={[
          styles.categoryText,
          isSelected ? { color: COLORS.foreground } : { color: COLORS.primary },
        ]}
      >
        {props.category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    marginLeft: 6,
    fontFamily: "roboto-mono",
    fontSize: 20,
  },
});

export default SelectCard;
