import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import colors from "../constants/colors";

const RideSwitch = (props) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.outerCircle,
        {
          borderColor: props.stop ? "red" : colors.primary,
          backgroundColor: theme.colors.background,
          shadowColor: props.stop ? "red" : colors.primary,
        },
      ]}
    >
      <View style={[styles.innerCircle, { borderColor: props.stop ? "red" : colors.primary }]}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "roboto-mono",
            color: theme.colors.text,
          }}
        >
          RIDE
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontFamily: "roboto-mono",
            color: theme.colors.fullContrast,
          }}
        >
          {props.stop ? "STOP" : "START"}
        </Text>
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
  outerCircle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2.6,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  innerCircle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1.8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RideSwitch;
