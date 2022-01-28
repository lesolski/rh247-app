// ./screens/sites/AddSiteScreen.js

import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

// Styling
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

// Redux
import { useSelector, useDispatch } from "react-redux";

const AddSiteScreen = (props) => {
  const theme = useTheme();
  console.log(theme.dark);

  const pinCoords = useSelector((state) => state.sites.coords);
  const dispatch = useDispatch();

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{ alignItems: "center" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Client Name Input*/}
      <View style={[styles.inputFieldBox, { marginTop: 30 }]}>
        <Text style={[styles.labelText, { color: theme.colors.title }]}>
          Client Name
        </Text>
        <TextInput
          style={[
            styles.inputText,
            { backgroundColor: theme.colors.foreground },
          ]}
        />
      </View>

      {/* Site Reference Input*/}
      <View style={styles.inputFieldBox}>
        <Text style={[styles.labelText, { color: theme.colors.title }]}>
          Site Reference
        </Text>
        <TextInput
          style={[
            styles.inputText,
            { backgroundColor: theme.colors.foreground },
          ]}
        />
      </View>

      <View style={{ width: "90%", height: 240, marginBottom: 12 }}>
        <Text style={[styles.labelText, { color: theme.colors.title }]}>
          Location
        </Text>
        {pinCoords ? (
          <View
            style={[styles.field, { backgroundColor: theme.colors.foreground }]}
          >
            <MapView
              region={{
                latitude: pinCoords.latitude,
                longitude: pinCoords.longitude,
                latitudeDelta: 0.0091,
                longitudeDelta: 0.0091,
              }}
              onPress={() => props.navigation.navigate("Map")}
              style={ [styles.field, {flex: 1, width:'100%', height:'100%', borderRadius:15 }]}
              userInterfaceStyle={theme.dark ? "dark" : "light"}
            >
              <Marker
                coordinate={pinCoords}
                title={"Site"}
                descriptions={"euNetworks"}
              />
            </MapView>
          </View>
        ) : (
          <View
            style={[styles.field, { backgroundColor: theme.colors.foreground }]}
          >
            <TouchableOpacity onPress={() => props.navigation.navigate("Map")}>
              <Ionicons
                name="map-outline"
                size={40}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
            <Text style={[styles.boxText, { color: theme.colors.primary }]}>
              Choose on map - click
            </Text>
          </View>
        )}
      </View>

      {/* CAMERA PICKER */}
      <View style={{ width: "90%", height: 240 }}>
        <Text style={[styles.labelText, { color: theme.colors.text }]}>
          Picture
        </Text>
        <View
          style={[styles.field, { backgroundColor: theme.colors.foreground }]}
        >
          <TouchableOpacity onPress={() => dispatch({})}>
            <Ionicons
              name="camera-outline"
              size={40}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
          <Text style={[styles.boxText, { color: theme.colors.primary }]}>
            Click on camera
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },

  inputFieldBox: {
    marginBottom: 12,
    width: "90%",
  },

  labelText: {
    width: "80%",
    fontFamily: "roboto-mono",
    fontSize: 18,
    alignSelf: "flex-start",
    paddingLeft: 10,
    marginBottom: 4,
  },

  inputText: {
    flex: 1,
    fontSize: 18,
    fontFamily: "roboto-mono",
    padding: 15,
    color: COLORS.primary,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
  },

  field: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
  },

  boxText: {
    fontFamily: "roboto-mono",
    fontSize: 14,
    color: COLORS.primary,
  },
});

export default AddSiteScreen;
