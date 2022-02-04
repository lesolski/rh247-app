import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet, TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";

// Expo
import * as ImagePicker from "expo-image-picker";

// Styling
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

// Components
import DateSelector from "../../components/DateSelector";
import CategoryCard from "../../components/CategoryCard";

// calculate week number
var currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(), 0, 1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var weekNum = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);

const NewInvoiceScreen = (props) => {
  const theme = useTheme();

  // image picker
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ScrollView
        style={{ width: "100%", flex: 1 }}
        contentContainerStyle={{ alignItems: "center" }}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View
            style={[
              styles.categoryTitle,
              {
                justifyContent: "space-between",
              },
            ]}
          >
            <Text
              style={[styles.categoryTitleText, { color: theme.colors.title }]}
            >
              Choose Date
            </Text>
            <Text
              style={[
                styles.categoryTitleText,
                { color: theme.colors.title, fontSize: 14 },
              ]}
            >
              Week {weekNum}
            </Text>
          </View>
          <View style={{ height: 100, width:'100%' }}>
            {/* render flat list here */}
            <DateSelector />
          </View>

          {/* CATEGORY LABEL */}
          <View style={styles.categoryTitle}>
            <Text
              style={[styles.categoryTitleText, { color: theme.colors.title }]}
            >
              Category
            </Text>
          </View>

          {/* CATEGORY CARDS */}
          <View style={styles.categoryContainer}>
            {/* LEFT SIDE  */}
            <View style={{ flexDirection: "row" }}>
              <CategoryCard
                style={styles.card}
                category={"site"}
                icon={"desktop-outline"}
              ></CategoryCard>
              <CategoryCard
                style={styles.card}
                category={"materials"}
              ></CategoryCard>
            </View>

            {/* RIGHT SIDE  */}
            <View style={{ flexDirection: "row" }}>
              <CategoryCard
                style={styles.card}
                category={"travel"}
                icon={"airplane-outline"}
              ></CategoryCard>
              <CategoryCard
                style={styles.card}
                category={"tools"}
                icon={"construct-outline"}
              ></CategoryCard>
            </View>
          </View>

          {/* AMOUNT LABEL */}
          <View style={styles.categoryTitle}>
            <Text
              style={[styles.categoryTitleText, { color: theme.colors.title }]}
            >
              Amount
            </Text>
          </View>

          {/* AMOUNT INPUT */}
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles.input,
                { backgroundColor: theme.colors.foreground },
              ]}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: 30,
                  textAlign: "center",
                  color: theme.colors.text,
                }}
                placeholder="€"
                placeholderTextColor={theme.colors.primary}
                keyboardType="numeric"
                keyboardAppearance={theme.dark ? "dark" : "light"}
              />
            </View>
          </View>

          {/* UPLOAD PICTURE CARD */}

          {!image && (
            <View style={{ flex: 1, minHeight: 200, width: "100%" }}>
              <View style={styles.categoryTitle}>
                <Text
                  style={[
                    styles.categoryTitleText,
                    { color: theme.colors.title },
                  ]}
                >
                  Upload Image
                </Text>
              </View>
              <View
                style={[
                  styles.cameraUploadBox,
                  { backgroundColor: theme.colors.foreground },
                ]}
              >
                <Pressable style={{ alignItems: "center" }} onPress={pickImage}>
                  <Ionicons
                    name="camera-outline"
                    size={60}
                    color={theme.colors.primary}
                  />
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontFamily: "roboto-mono",
                    }}
                  >
                    Click on camera to add a photo
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          {image && (
            <View
              style={{
                flex: 1,
                width: "100%",
                minHeight: 400,
                alignItems: "center",
              }}
            >
              <View
                style={[
                  styles.categoryTitle,
                  { flexDirection: "row", justifyContent: "space-between" },
                ]}
              >
                <Text
                  style={[
                    styles.categoryTitleText,
                    { color: theme.colors.title },
                  ]}
                >
                  Upload Image
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={pickImage}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={[styles.categoryTitleText, { color: "orange" }]}
                    >
                      retake
                    </Text>
                    <Ionicons
                      name="camera-outline"
                      size={22}
                      color={"orange"}
                      style={{ marginTop: 3, marginLeft: 3 }}
                    />
                  </Pressable>
                </View>
              </View>
              <View
                style={[
                  styles.cameraUploadBox,
                  { backgroundColor: theme.colors.foreground },
                ]}
              >
                <Image
                  source={{ uri: image }}
                  style={{ flex: 1, width: 300, height: 300 }}
                  resizeMode="contain"
                />
              </View>
            </View>
          )}

          {/* SUBMIT BUTTON */}
          <TouchableOpacity
            style={[
              styles.submitButton,
              {
                backgroundColor: theme.colors.foreground,
                borderColor: theme.colors.primary,
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: theme.colors.primary }]}>
              Claim
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    marginBottom: 30,
  },

  card: {
    flex: 1,
    height: 50,
    padding: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
  },

  input: {
    width: "100%",
    height: 50,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "400",
    color: COLORS.text,
    fontFamily: "roboto-mono",
  },

  categoryTitle: {
    marginTop:10,
    width: "96%",
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 6,
  },

  categoryTitleText: {
    fontSize: 20,
    fontFamily: "roboto-mono",
  },

  categoryContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  cameraUploadBox: {
    flex: 1,
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
  },

  imageBox: {
    alignItems: "center",
    justifyContent: "center",
  },

  cameraIcon: {
    fontSize: 75,
  },

  submitButton: {
    marginTop: 28,
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
  },

  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.primary,
    fontFamily: "roboto-mono",
  },
});

export default NewInvoiceScreen;
