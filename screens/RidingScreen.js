// ./screens/RidingScreen.js
//
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

// components import
import StartEngine from "../components/StartEngine";

const RidingScreen = (props) => {
  const [riding, setRiding] = useState(false);
  const [location, setLocation] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <View style={styles.container}>
      {!location && <MapView />}
      {location && (
        <MapView
          initialRegion={{
            latitude: location.coords.latitude - 0.02,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          style={styles.map}
          userInterfaceStyle={theme.dark ? "dark" : "light"}
          showsUserLocation={true}
        />
      )}
      <View
        style={[
          styles.overlay,
          {
            backgroundColor: theme.colors.background,
            shadowColor: theme.colors.primary,
            borderColor: theme.colors.primary,
          },
        ]}
      >
        <View style={styles.settings}>
          <View
            style={[
              styles.dropdown,
              { backgroundColor: theme.colors.foreground },
            ]}
          >
            <View style={{ paddingLeft: 20 }}>
              <Text
                style={{
                  fontSize: 22,
                  color: theme.colors.text,
                  fontFamily: "roboto-mono",
                }}
              >
                VD-035-V
              </Text>
            </View>
            <View style={{ paddingRight: 10 }}>
              <Ionicons
                name="chevron-down-outline"
                size={30}
                color={theme.colors.text}
              />
            </View>
          </View>
          <View
            style={[
              styles.dropdown,
              { backgroundColor: theme.colors.foreground },
            ]}
          >
            <TouchableOpacity>
              <Ionicons
                name="card-outline"
                size={30}
                color={theme.colors.primary}
                style={{ marginLeft: 6 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginRight: 16,
                fontFamily: "roboto-mono",
                fontSize: 20,
                color: theme.colors.text,
              }}
            >
              ****6970
            </Text>
          </View>
        </View>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={() => setRiding(!riding)}>
            <StartEngine stop={riding} />
          </TouchableOpacity>
          <Text
            style={{ color: theme.colors.text, fontSize: 20, marginTop: 25 }}
          ></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: "absolute",
    bottom: "2%",
    height: 300,
    width: "95%",
    borderRadius: 15,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: { witdh: 0, height: 0 },
    shadowRadius: 2,
    borderWidth: 1,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  settings: {
    flex: 0.5,
    width: "100%",
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  dropdown: {
    alignItems: "center",
    width: "48%",
    borderRadius: 6,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
export default RidingScreen;
