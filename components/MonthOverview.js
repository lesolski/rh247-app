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
  mainContainer: {
    alignItems: "center",
  },

  box: {
    flexDirection: "row",
    height: 300,
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
    borderWidth: 1,
    borderColor: COLORS.primary,
    margin: 5,
  },

  leftBottom: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    margin: 5,
  },

  rightTop: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    margin: 5,
  },

  rightBottom: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.primary,
    margin: 5,
  },

  bigText: {
    fontFamily: "roboto-mono",
    color: COLORS.primary,
    fontSize: 60,
  },

  smallText: {
    fontFamily: "roboto-mono",
    color: COLORS.primary,
    fontSize: 12,
  },

  labelText: {
    fontFamily: "roboto-mono",
    fontSize: 20,
    color: COLORS.text,
  },
});

export default MonthOverview;
