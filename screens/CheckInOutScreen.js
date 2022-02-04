import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const StartEngine = (props) => {
  const theme = useTheme();
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.outerCircle,
          {
            borderColor: theme.colors.primary,
            backgroundColor: theme.colors.background,
            shadowColor: theme.colors.primary
          },
        ]}
      >
        <View
          style={[styles.innerCircle, { borderColor: theme.colors.primary }]}
        >
          <Text style={{fontSize:12, fontFamily:'roboto-mono', color:'#ccc'}}>ENGINE</Text>
          <Text style={{fontSize:16, fontFamily:'roboto-mono', color:"#fff"}}>START</Text>
        </View>
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
    height: 100,
    width: 100,
    borderRadius: 150,
    borderWidth: 4,
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
    height: 80,
    width: 80,
    borderRadius: 140,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartEngine;
