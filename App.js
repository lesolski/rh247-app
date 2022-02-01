// ./App.js

// React + RN
import React, { useState } from "react";
import 'react-native-reanimated';

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

// Expo imports
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

// Navigation
import RootNavigation from "./navigation/RootNavigation";

// load fonts first
const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-mono": require("./assets/fonts/roboto-mono-regular.ttf"),
  });
};

export default function App() {
  // Loader state
  const [fontLoaded, setFontLoaded] = useState(false);

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

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
