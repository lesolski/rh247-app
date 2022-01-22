// ./components/SiteCard.js

import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

// Styling imports
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const SiteCard = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.avatar}>
        <Ionicons name="business" size={40} color={COLORS.primary} />
        {/* remove icon and add image in production
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
          <Text style={[styles.text, { fontSize: 19, color: COLORS.primary }]}>
            {props.item.ref}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons />
          <Text style={styles.text}>{props.item.client}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons />
          <Text style={styles.text}>
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
    borderRadius: 20,
    marginBottom: 15,
    overflow: "hidden",
    backgroundColor: COLORS.foreground,
  },

  avatar: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginRight: 15,
    margin: 5,
    overflow: "hidden",
    backgroundColor: COLORS.background,
  },

  text: {
    fontFamily: "roboto-mono",
    color: COLORS.text,
  },
});

export default SiteCard;
