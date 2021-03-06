// ./components/RideInfoCard.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';

import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const RideInfoCard = (props) => {
  const theme = useTheme();
  return (
    <View style={{ ...styles.card, ...props.style, ...{backgroundColor: theme.colors.foreground} }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.DestinationLeft}>
          <Text style={styles.destinationText}> {props.start}</Text>
        </View>
        <View style={{ flex: 0.5, alignItems: "center" }}>
          <Ionicons
            name="arrow-forward-outline"
            size={32}
            color={theme.colors.text}
          />
        </View>
        <View style={styles.DestinationRight}>
          <Text style={styles.destinationText}> {props.end}</Text>
        </View>
      </View>
      <View style={styles.infoBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="calendar-outline" size={18} color={theme.colors.primary} />
          <Text style={styles.infoText}> 12.12.2021 </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="time-outline" size={20} color={theme.colors.primary} />
          <Text style={styles.infoText}> 12h </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="speedometer-outline"
            size={20}
            color={theme.colors.primary}
          />
          <Text style={styles.infoText}> ~1100km</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    borderRadius: 15,
    padding: 6,
  },

  DestinationLeft: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  DestinationRight: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  destinationText: {
    fontFamily: "roboto-mono",
    fontSize: 22,
  },

  infoBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: COLORS.text,
  },

  infoText: {
    fontFamily: "roboto-mono",
    fontSize: 15,
  },
});
export default RideInfoCard;
