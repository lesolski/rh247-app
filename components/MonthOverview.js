// ./components/MonthOverview.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import COLORS from "../constants/colors";

const MonthOverview = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.box}>
        <View style={styles.leftPart}>
          <View style={styles.leftTop}>
            <Text style={styles.bigText}>7</Text>
            <Text style={styles.smallText}>Deployments</Text>
          </View>
          <View style={styles.leftBottom}>
            <Text style={styles.bigText}>123</Text>
            <Text style={styles.smallText}>Hours on clock</Text>
          </View>
        </View>

        <View style={styles.rightPart}>
          <View style={styles.rightTop}>
            <Text style={styles.bigText}>365</Text>
            <Text style={styles.smallText}>Kilometers</Text>
          </View>
          <View style={styles.rightBottom}>
            <Text style={styles.bigText}>6</Text>
            <Text style={styles.smallText}>Invoices</Text>
          </View>
        </View>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  // main container needs to adjust to overviewBox in the screen 
  mainContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  box: {
    flexDirection: "row",
    height: "30%",
    width: "90%",
  },

  leftPart: {
    flex: 1,
  },

  rightPart: {
    flex: 1,
  },

  leftTop: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
    backgroundColor: COLORS.foreground,
  },

  leftBottom: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
    backgroundColor: COLORS.foreground,
  },

  rightTop: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 15,
    backgroundColor: COLORS.foreground,
  },

  rightBottom: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: COLORS.foreground,
  },

  bigText: {
    fontFamily: "roboto-mono",
    color: COLORS.primary,
    fontSize: 60,
  },

  smallText: {
    fontFamily: "roboto-mono",
    color: COLORS.text,
    fontSize: 12,
  },

  labelText: {
    fontFamily: "roboto-mono",
    fontSize: 20,
    color: COLORS.text,
  },
});

export default MonthOverview;
