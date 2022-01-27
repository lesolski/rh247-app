// ./components/SiteCard.js
//
// this file contains SiteCard comonent as well as Modal
// that contains more information about site
//
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

// Styling imports
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

// receives prop which is object item = {
// ref:
// client:
// coords:
//};
const SiteCard = (props) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.colors.foreground }]}
      onPress={() => setVisible(!visible)}
    >
      <View
        style={[
          styles.avatar,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.primary,
          },
        ]}
      >
        <Ionicons name="business" size={40} color={theme.colors.primary} />
        {/* remove icon and add image in production with props 
        <Image
          source={{
            uri: "https://image.shutterstock.com/image-vector/cloud-data-center-abstract-monogram-260nw-1886798524.jpg",
          }}
          style={{ width: 80, height: 80 }}
        /> */}
      </View>
      <View>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <Ionicons />
          <Text
            style={[styles.text, { fontSize: 19, color: theme.colors.primary }]}
          >
            {props.item.ref}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons />
          <Text style={[styles.text, { color: theme.colors.text }]}>
            {props.item.client}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons />
          <Text style={[styles.text, { color: theme.colors.text }]}>
            {props.item.city}, {props.item.country}
          </Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setVisible(!visible);
        }}
      >
        <View
          style={{
            marginTop: "auto",
            height: "85%",
            marginHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: theme.colors.primary,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.4,
            shadowRadius: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: theme.colors.background,
              borderWidth: 2,
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              borderColor: theme.colors.primary,
              borderBottomWidth: 0,
            }}
          >
            <Ionicons
              onPress={() => setVisible(!visible)}
              name="chevron-down-outline"
              size={40}
              color={theme.colors.primary}
              style={{ alignSelf: "center" }}
            />

            <ScrollView
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "flex-start",
                minHeight: "100%",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <View
                  info
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={[
                      styles.modalInfoView,
                      {
                        borderBottomColor: theme.dark
                          ? theme.colors.text
                          : theme.colors.primary,
                      },
                    ]}
                  >
                    <Ionicons
                      name="business-outline"
                      size={30}
                      color={
                        theme.dark ? theme.colors.text : theme.colors.primary
                      }
                    />
                    <Text
                      style={[
                        styles.modalTitleText,
                        { color: theme.colors.text, fontSize: 18 },
                      ]}
                    >
                      {props.item.ref}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.modalInfoView,
                      {
                        borderBottomColor: theme.dark
                          ? theme.colors.text
                          : theme.colors.primary,
                      },
                    ]}
                  >
                    <Ionicons
                      name="briefcase-outline"
                      size={30}
                      color={
                        theme.dark ? theme.colors.text : theme.colors.primary
                      }
                    />
                    <Text
                      style={[
                        styles.modalTitleText,
                        { color: theme.colors.text, fontSize: 18 },
                      ]}
                    >
                      {props.item.client}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.modalInfoView,
                      {
                        borderBottomColor: theme.dark
                          ? theme.colors.text
                          : theme.colors.primary,
                      },
                    ]}
                  >
                    <Ionicons
                      name="location-outline"
                      size={30}
                      color={
                        theme.dark ? theme.colors.text : theme.colors.primary
                      }
                    />
                    <Text
                      style={[
                        styles.modalTitleText,
                        { color: theme.colors.text, fontSize: 18 },
                      ]}
                    >
                      {props.item.lat}, {props.item.lng}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderColor:'yellow',
                    borderWidth:1,
                    height: "40%",
                    width: "90%",
                    overflow: "hidden",
                    borderRadius: 15,
                    marginTop: 5,
                  }}
                >
                  <MapView
                    initialRegion={{
                      latitude: parseFloat(props.item.lat),
                      longitude: parseFloat(props.item.lng),
                      latitudeDelta: 1.99223,
                      longitudeDelta: 1.99999,
                    }}
                    style={{ flex: 1 }}
                    cacheEnabled={true}
                  >
                    <Marker
                      coordinate={{
                        latitude: parseFloat(props.item.lat),
                        longitude: parseFloat(props.item.lng),
                      }}
                    />
                  </MapView>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "red",
                    borderWidth: 1,
                  }}
                >
                  <Text style={{ color: "white" }}>iiiii</Text>
                </View>
                <View>
                  <Text> </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },

  avatar: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    marginRight: 15,
    margin: 5,
    overflow: "hidden",
  },

  text: {
    fontFamily: "roboto-mono",
  },

  modalTitleText: {
    fontFamily: "roboto-mono",
    fontSize: 18,
  },

  modalInfoView: {
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingVertical: 4,
  },
});

export default SiteCard;
