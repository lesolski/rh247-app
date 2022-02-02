import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const RidingScreen = (props) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        userInterfaceStyle={theme.dark ? "dark" : "light"}
        showsUserLocation={true}
      />
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
            style={[styles.dropdown, {backgroundColor:theme.colors.foreground}]}
          >
            <TouchableOpacity>
              <Ionicons
                name="car-outline"
                size={40}
                color={theme.colors.primary}
                style={{marginLeft:6}}
              />
            </TouchableOpacity>
            <View>
              <Ionicons
                name="chevron-down-outline"
                size={30}
                color={theme.colors.primary}
              />
            </View>
          </View>
          <View style={[styles.dropdown, {backgroundColor:theme.colors.foreground}]}>
            <TouchableOpacity>
              <Ionicons
                name="card-outline"
                size={40}
                color={theme.colors.primary}
                style={{marginLeft:6}}
              />
            </TouchableOpacity>
            <Text style={{marginRight:16, fontFamily:'roboto-mono', fontSize:20, color:theme.colors.text}}>
              ****6970
            </Text>
          </View>
        </View>
        <View style={{ flex: 2, alignItems:'center', justifyContent:'center' }}>
          <TouchableOpacity>
            <Ionicons 
              name="finger-print-outline"
              size={80}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
          <Text style={{color: theme.colors.text, paddingTop:17, fontSize:16}}>Hold for 3 seconds to start a ride</Text>
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
    bottom: "5%",
    height: 300,
    width: "95%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: { witdh: 6, height: 6 },
    shadowRadius: 20,
    borderWidth: 1,
  },
  settings: {
    flex: 0.5,
    width: "100%",
    paddingTop:30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  dropdown: {

    alignItems:'center',
    width:"48%",
    borderRadius:6,
    justifyContent:'space-between',
    flexDirection:'row',
  }
});
export default RidingScreen;
