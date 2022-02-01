// ./screens/HomeScreen.js

import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

// Styling
import { useTheme } from "@react-navigation/native";

// Components
import MonthOverview from "../components/MonthOverview";

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CircularProgress
          value={82}
          radius={160}
          duration={2000}
          textColor={theme.colors.text}
          textStyle={{fontFamily:'roboto-mono'}}
          maxValue={100}
          title={"/100h"}
          titleColor={theme.colors.text}
          titleStyle={{ fontFamily:'roboto-mono'}}
          inActiveStrokeWidth={40}
          activeStrokeWidth={40}
          activeStrokeColor={theme.colors.primary}
          inActiveStrokeColor={theme.colors.foreground}
          inActiveStrokeOpacity={0.7}
        />
      </View>
      <SafeAreaView style={{ flex: 1, justifyContent:'center'}}>
        <Text
          style={[
            styles.labelText,
            { color: theme.colors.text, alignSelf: "center", marginBottom: 6 },
          ]}
        >
          Month overview
        </Text>
        <MonthOverview style={{height:'80%'}}/>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  labelText: {
    fontFamily: "roboto-mono",
    fontSize: 20,
  },
});

export default HomeScreen;
