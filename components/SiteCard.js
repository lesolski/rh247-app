// ./components/SiteCard.js
//
// this file contains SiteCard comonent as well as Modal
// that contains more information about site
//
import React, { useState } from "react";
import {
  RefreshControl,
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

import SiteDatum from "./SiteDatum";

// receives prop which is object item = {
// ref:
// client:
// coords:
//};
const SiteCard = (props) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={[styles.innerCard, { backgroundColor: theme.colors.foreground }]}
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
              style={[
                styles.text,
                { fontSize: 19, color: theme.colors.primary },
              ]}
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

        <Modal animationType="slide" visible={visible} transparent={true}>
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
                  paddingBottom: 30,
                }}
                showsVerticalScrollIndicator={false}
                bounces={true}
              >
                <View
                  style={{
                    alignItems: "center",
                    width: "100%",
                    minHeight: "100%",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
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
                          { color: theme.colors.primary, fontSize: 40 },
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
                      height: 300,
                      width: "100%",
                      overflow: "hidden",
                      marginTop: 5,
                      shadowColor: "black",
                      shadowOffset: { width: 4, height: 4 },
                      shadowOpacity: 0.2,
                      shadowRadius: 5,
                      padding: "5%",
                    }}
                  >
                    <MapView
                      initialRegion={{
                        latitude: parseFloat(props.item.lat),
                        longitude: parseFloat(props.item.lng),
                        latitudeDelta: 1.99223,
                        longitudeDelta: 1.99999,
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                        shadowColor: "black",
                        shadowOffset: { width: 4, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        borderRadius: 15,
                      }}
                      cacheEnabled={true}
                      userInterfaceStyle={theme.dark ? "dark" : "light"}
                    >
                      <Marker
                        coordinate={{
                          latitude: parseFloat(props.item.lat),
                          longitude: parseFloat(props.item.lng),
                        }}
                      />
                    </MapView>
                  </View>
                  <View style={{ width: "90%" }}>
                    <View
                      style={{
                        width: "100%",
                        flexDirection: "row",
                      }}
                    >
                      <SiteDatum
                        category={"food"}
                        isSelected={true}
                        style={{ flex: 1, padding: 5, margin: 5 }}
                        icon={"fast-food-outline"}
                      />
                      <SiteDatum
                        category={"parking"}
                        isSelected={true}
                        style={{ flex: 1, padding: 5, margin: 5 }}
                        icon="car-outline"
                      />
                    </View>
                    <View style={{ width: "100%", flexDirection: "row" }}>
                      <SiteDatum
                        category={"00/24"}
                        icon="time-outline"
                        isSelected={true}
                        style={{ flex: 1, padding: 5, margin: 5 }}
                      />
                      <SiteDatum
                        category={"escorted"}
                        icon="person-outline"
                        style={{ flex: 1, padding: 5, margin: 5 }}
                      />
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.modalTitleText,
                      {
                        marginTop: 12,
                        alignSelf: "flex-start",
                        marginLeft: 20,
                        marginBottom: 6,
                        color: theme.colors.title,
                      },
                    ]}
                  >
                    Comments
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      height: 50,
                      width: "90%",
                      backgroundColor: theme.colors.foreground,
                      borderRadius: 15,
                      marginBottom: 12,
                    }}
                  >
                    <Text> aaaaaa a</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 50,
                      width: "90%",
                      backgroundColor: theme.colors.foreground,
                      borderRadius: 15,
                      marginBottom: 12,
                    }}
                  >
                    <Text> aaaaaa a</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 50,
                      width: "90%",
                      backgroundColor: theme.colors.foreground,
                      borderRadius: 15,
                    }}
                  >
                    <Text> aaaaaa a</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    overflow:"hidden"
    },

  innerCard: {
    width:"90%",
    flex:1,
    flexDirection:"row",
    marginHorizontal:10,
    marginVertical:7,
    alignItems:"center",
    justifyContent:"flex-start",
    shadowColor: "black",
    shadowOffset: {width: 2, height:1 },
    shadowOpacity:0.4,
    shadowRadius:4,
    borderRadius:15,
    padding:8
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
