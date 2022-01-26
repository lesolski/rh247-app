import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

// Expo
import * as ImagePicker from "expo-image-picker";

// Styling
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

// Components
import DateSelector from "../components/DateSelector";
import CategoryCard from "../components/CategoryCard";

const ExpenseScreen = (props) => {
  const theme = useTheme();
  // selected
  const [selectedId, setSelectedId] = useState({});

  const handleSelection = (id) => {
    var selectedId = selectedId;
    if (selectedId === id) setSelectedId({ selectedItem: null });
    else setSelectedId({ selectedItem: id });
  };
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

  const categories = [
    { id: 1, name: "materials" },
    { id: 2, name: "shop" },
  ];

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.categoryTitle}>
            <Text
              style={[styles.categoryTitleText, { color: theme.colors.title }]}
            >
              Choose Date
            </Text>
          </View>
          <View style={{ height:200 }}>
            {/* render flat list here */}
            <DateSelector />
            <FlatList
              data={categories}
              extraData={selectedId}
              renderItem={(item) => _renderItem(item)}
            />
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
              style={[
                styles.categoryTitleText,
                {
                  color: theme.colors.title,
                },
              ]}
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

          {/* UPLOAD PICTURE LABEL */}
          <View style={styles.categoryTitle}>
            <Text
              style={[styles.categoryTitleText, { color: theme.colors.title }]}
            >
              Upload Image
            </Text>
          </View>

          {/* UPLOAD PICTURE CARD */}
          {!image && (
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
          )}
          {image && (
            <View
              style={{ ...styles.cameraUploadBox, ...{ overflow: "hidden" } }}
            >
              <Image
                source={{ uri: image }}
                style={{ flex: 1, width: 300, height: 300 }}
                resizeMode="contain"
              />
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
    marginTop: 15,
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
    marginTop: 13,
    width: "96%",
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 13,
  },

  categoryTitleText: {
    fontSize: 20,
    fontWeight: "300",
    color: "grey",
    fontFamily: "roboto-mono",
  },

  categoryContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  cameraUploadBox: {
    width: "100%",
    height: "30%",
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
    marginVertical: 28,
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

  date: {
    flex: 1,
    height: 70,
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    borderRadius: 10,
  },

  dateText: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 3,
  },
});

export default ExpenseScreen;
