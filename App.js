// ./App.js

// React + RN
import React, { useState, useEffect } from "react";
import "react-native-reanimated";
import { View, Text } from "react-native";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

// Expo imports
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

// Navigation
import RootNavigation from "./navigation/RootNavigation";

// Permissions
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

// load fonts first
const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-mono": require("./assets/fonts/roboto-mono-regular.ttf"),
  });
};

export default function App() {
  // Loader state
  const [fontLoaded, setFontLoaded] = useState(false);
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [locationAllowed, setLocationAllowed] = useState(false);

  useEffect(() => {
    (async () => {
      let hasAllowedCamera = await ImagePicker.getCameraPermissionsAsync();
      if (hasAllowedCamera.granted) {
        setCameraAllowed(hasAllowedCamera.granted);
      } else {
        let resultCamera = await ImagePicker.requestCameraPermissionsAsync();
        setCameraAllowed(resultCamera.granted);
      }
      // Location Permission
      let hasAllowedLocation = await Location.getForegroundPermissionsAsync();
      if (hasAllowedLocation.granted) {
        setLocationAllowed(hasAllowedLocation.granted);
      } else {
        let resultLocation = await Location.requestForegroundPermissionsAsync();
        setLocationAllowed(resultLocation);
      }
    })();
  }, []);

  // Check wether or not the font is loaded
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  if (cameraAllowed && locationAllowed) {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Please grant Location and Camera Access in Settings</Text>
    </View>
  );
}
