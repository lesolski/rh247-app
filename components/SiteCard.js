// ./components/SiteCard.js

import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

// Styling imports
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const SiteCard = (props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.colors.foreground }]}
    >
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.primary,
          },
        ]}
      >
        <Ionicons name="business" size={40} color={theme.colors.primary} />
        {/* remove icon and add image in production with props 
        <Image
          source={{
            uri: "https://image.shutterstock.com/image-vector/cloud-data-center-abstract-monogram-260nw-1886798524.jpg",
          }}
          style={{ width: 80, height: 80 }}
        /> */}
      </View>
      <View>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <Ionicons />
          <Text
            style={[styles.text, { fontSize: 19, color: theme.colors.primary }]}
          >
            {props.item.ref}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons />
          <Text style={[styles.text, { color: theme.colors.text}]}>
            {props.item.client}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons />
          <Text style={[styles.text, { color: theme.colors.text }]}>
            {props.item.city}, {props.item.country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },

  avatar: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    marginRight: 15,
    margin: 5,
    overflow: "hidden",
  },

  text: {
    fontFamily: "roboto-mono",
  },
});

export default SiteCard;
