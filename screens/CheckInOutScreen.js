import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Task from "../components/Task.js";

const Tasks = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const theme = useTheme();


  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.tasks}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flex: 2,
        }}
      >
        <Task selected={false}/>
        <Task onPress={() => setIsSelected(!isSelected)} selected={isSelected}/>
        <Task selected={false}/>

      </ScrollView>
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
