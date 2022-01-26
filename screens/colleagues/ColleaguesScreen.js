// ./screens/ColleaguesScreen.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

import COLORS from "../../constants/colors";
import DATA from "../../data/colleagues";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const renderItem = ({ item }, theme) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 6,
        alignItems: "center",
        backgroundColor: theme.colors.foreground,
        paddingVertical: 10,
        borderRadius: 15,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: 50,
          backgroundColor: theme.colors.primary,
          borderRadius: 25,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }} />
      </View>
      <View style={{ maxWidth: 200 }}>
        <Text style={[styles.text, { fontSize: 16, color: theme.colors.primary }]}>
          {item.name + " " + item.lastname}
        </Text>
        <Text style={[styles.text, {color: theme.colors.text}]}>{item.city}</Text>
        <Text style={[styles.text, {color: theme.colors.text}]}>{item.email}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-end",
          marginRight: 6,
        }}
      >
        <TouchableOpacity onPress={() => Alert.alert(item.phone)}>
          <Ionicons
            name="logo-whatsapp"
            size={36}
            color={"rgb(29,185,84)"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const _keyExtractor = (item, index) => item.idx;

const ColleaguesScreen = (props) => {
  const theme = useTheme();

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={DATA}
        renderItem={(item) => renderItem(item, theme)}
        keyExtractor={_keyExtractor}
        style={{ width: "90%", paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "roboto-mono",
    fontSize: 12,
  },
});

export default ColleaguesScreen;
