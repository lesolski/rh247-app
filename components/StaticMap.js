// ,/components/StaticMap.js

import React from "react";
import { View, Image, StyleSheet } from "react-native";
import KEYS from "../secrets";

const StaticMap = (props) => {
  let MAP_URL;
  if (props.location) {
    MAP_URL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=15&size=1000x1000&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&map_id=297f820b9f5c5871&key=${KEYS.GOOGLE_MAPS_API}`;
  }
  console.log(MAP_URL);
  return (
    <View style={{ ...styles.mapBox, ...props.style }}>
      {props.location ? (
        <Image source={{ uri: MAP_URL }} style={styles.mapImage} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default StaticMap;
