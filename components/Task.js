import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Task = (props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.border,
        {
          backgroundColor: theme.colors.foreground, 
          shadowColor: theme.colors.primary,
        },
      ]}
    >
      <View style={styles.up}>
        <View>
          <Text
            style={{
              fontFamily: "roboto-mono",
              fontSize: 26,
              color: props.selected ? theme.colors.primary : theme.colors.text,
            }}
          >
            {" "}
            WAW82{" "}
          </Text>
        </View>
        <Ionicons
          name="globe-outline"
          color={props.selected ? theme.colors.primary : theme.colors.text}
          size={25}
        />
      </View>
      <View style={styles.mid}></View>
      <View style={styles.down}>
        <View>
          <Ionicons
            name="time-outline"
            color={props.selected ? theme.colors.primary : theme.colors.text}
            size={25}
          />
        </View>
        <View></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  border: {
    height: 160,
    width: "95%",
    borderRadius: 25,
    overflow: "hidden",
    shadowRadius: 20,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    marginTop: 12,
  },

  up: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.2,
  },

  mid: {
    flex: 3,
  },

  down: {
    flex: 1,
    borderTopColor: "#ccc",
    borderTopWidth: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default Task;
