import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Task = ({item, onPress, color, backgroundColor, opacity={opacity}}) => {
  const theme = useTheme();
  console.log(color);
  console.log(backgroundColor);
  console.log(opacity);
  return (
    <View opacity={opacity}>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.border,
        {
          shadowColor: theme.colors.primary,
          backgroundColor : theme.colors.foreground
        },
      ]}
      opacity={opacity}
    >
      <View style={styles.up}>
        <View>
          <Text
            style={{
              fontFamily: "roboto-mono",
              fontSize: 26,
              color: color
            }}
          >
            {item.client}
          </Text>
        </View>
        <Ionicons
          name="globe-outline"
          color={color}
          size={25}
        />
      </View>
      <View style={styles.mid}>
        <Text style={{color: color, marginTop:10}}>{item.client}</Text>
        <Text style={{color: color}}>{item.client}</Text>
        <Text style={{color: color, marginBottom:10}}>{item.client}</Text>
      </View>
      <View style={styles.down}>
        <View>
          <Ionicons
            name="time-outline"
            color={color}
            size={25}
          />
        </View>
        <View></View>
      </View>
    </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  border: {
    height: 160,
    minWidth: "90%",
    maxWidth:"90%",
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
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginLeft:10,
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
