// ./screens/ProfileScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

// styling imports
import { Ionicons } from "@expo/vector-icons";

const Profile = (props) => {
  const theme = useTheme();

  const InfoRow = (props) => {
    return (
      <View
        style={[
          styles.infoBox,
          { borderBottomWidth: 1, borderColor: theme.colors.text },
        ]}
      >
        <Ionicons
          name={props.iconName}
          size={30}
          color={theme.colors.text}
        />
        <Text style={[styles.infoText, { color: theme.colors.text }]}>
          {props.info}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainBox}>
      <View style={[styles.avatarBox, { borderColor: theme.colors.primary }]}>
        <Ionicons
          name="person-outline"
          size={80}
          color={theme.colors.primary}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={[styles.userNameText, { color: theme.colors.title}]}>
          {props.name}Sasa D.
        </Text>
      </View>
      <InfoRow iconName="mail-outline" info={"sasa.djuric@gmail.com"} />
      <InfoRow iconName="globe-outline" info={"Vienna, Austria"} />
      <InfoRow iconName="medal-outline" info={"Filed Engineer LVL 2"} />
      <InfoRow iconName="call-outline" info={"+38163179171"} />
      <InfoRow iconName="logo-whatsapp" info={"+38163179171"} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarBox: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 3,
  },

  userNameText: {
    fontSize: 32,
    fontFamily: "roboto-mono",
  },

  infoBox: {
    marginTop: 10,
    width: "80%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },

  infoText: {
    fontSize: 18,
    fontFamily: "roboto-mono",
  },
});

export default Profile;

