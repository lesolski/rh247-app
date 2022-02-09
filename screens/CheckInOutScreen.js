import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Task from "../components/Task.js";
import tasks from "../data/tasks.js";

const Tasks = (props) => {
  const [isSelected, setIsSelected] = useState(null);
  const theme = useTheme();

  const _renderItem = ({ item }) => {
    const backgroundColor = item.id === isSelected ? theme.colors.primary : theme.colors.foreground;
    const color = item.id === isSelected ? theme.colors.primary : theme.colors.text;
    const opacity = item.id === isSelected ? 1 : 0.8;

    return (
      <Task
        item={item}
        onPress={() => setIsSelected(item.id)}
        isSelected={isSelected}
        color={color}
        backgroundColor={backgroundColor}
        opacity={opacity}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={tasks}
        renderItem={(item) => _renderItem(item)}
        keyExtractor={(item) => item.id}
        extraData={isSelected}
        contentContainerStyle={{ alignItems: "center", width: "100%" }}
        style={{ flex: 1, width: "100%" }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.checkInOut}>
        <TouchableOpacity onPress={() => ""}>
          <Ionicons
            name={"finger-print-outline"}
            size={80}
            color={isSelected ? theme.colors.primary : theme.colors.text}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "roboto-mono",
            color: theme.colors.text,
            fontSize: 14,
          }}
        >
          {isSelected ? "Hold for 3 seconds to check IN" : "Select a task"}
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

  tasks: {
    width: "100%",
  },

  checkInOut: {
    flex: 0.25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tasks;
