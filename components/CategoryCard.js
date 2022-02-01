// ./components/CategoryCard.js

import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const CategoryCard = (props) => {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{
        ...styles.card,
        ...props.style,
        ...(isSelected
          ? { backgroundColor: theme.colors.primary }
          : { backgroundColor: theme.colors.foreground }),
      }}
      onPress={() => (isSelected ? setIsSelected(false) : setIsSelected(true))}
      activeOpacity={0.3}
    >
      <Ionicons
        name={props.icon}
        size={25}
        color={isSelected ? theme.colors.foreground : theme.colors.text}
      />
      <Text
        style={[
          styles.categoryText,
          isSelected
            ? { color: theme.colors.foreground }
            : { color: theme.colors.text },
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

export default CategoryCard;
