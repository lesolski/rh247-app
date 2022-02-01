// ./components/MonthOverview.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import COLORS from "../constants/colors";
import { useTheme } from '@react-navigation/native';

const MonthOverview = (props) => {
  const theme = useTheme();
  return (
    <View style={[styles.mainContainer, props.style]}>
      <View style={styles.box}>
        <View style={styles.leftPart}>
          <View style={[styles.field, { flex:3, backgroundColor: theme.colors.foreground}]}>
            <Text style={[styles.bigText, { color: theme.colors.primary}] }>7</Text>
            <Text style={[styles.smallText, { color: theme.colors.text}]}>Deployments</Text>
          </View>
          <View style={[styles.field, { flex:2, backgroundColor: theme.colors.foreground}]}>
            <Text style={[styles.bigText, { color: theme.colors.primary}] }>325</Text>
            <Text style={[styles.smallText, { color: theme.colors.text}]}>Kilometers</Text>
         </View>
        </View>

        <View style={styles.rightPart}>
          <View style={[styles.field, {flex: 2, backgroundColor: theme.colors.foreground}]}>
            <Text style={[styles.bigText, { color: theme.colors.primary}] }>82</Text>
            <Text style={[styles.smallText, { color: theme.colors.text}]}>Hours</Text>
         </View>
          <View style={[styles.field, { flex:3, backgroundColor: theme.colors.foreground}]}>
            <Text style={[styles.bigText, { color: theme.colors.primary}] }>6</Text>
            <Text style={[styles.smallText, { color: theme.colors.text}]}>Invoices</Text>
         </View>
        </View>
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  // main container needs to adjust to overviewBox in the screen 
  mainContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  box: {
    flexDirection: "row",
    height: "100%",
    width: "90%",
  },

  leftPart: {
    flex: 1,
  },

  rightPart: {
    flex: 1,
  },

  field : {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
    shadowOpacity:0.4,
    shadowColor: 'black',
    shadowOffset: {width:2, height:2},
    shadowRadius:5
  },

  bigText: {
    fontFamily: "roboto-mono",
    fontSize: 60,
  },

  smallText: {
    fontFamily: "roboto-mono",
    fontSize: 12,
  },

  labelText: {
    fontFamily: "roboto-mono",
    fontSize: 20,
  }

});


export default MonthOverview;
