// ./screens/sites/ListOfSitesScreen.js

import React from "react";
import { View, FlatList, TextInput, StyleSheet } from "react-native";

// Redux imports
import { useSelector } from "react-redux";

// Components imports
import SiteCard from "../../components/SiteCard";

// Styling imports
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

// pass item object and unpack it in SiteCard component via props and style it there
const _renderItem = ({ item }) => <SiteCard item={item} />;

const ListOfSitesScreen = () => {
  const listOfSites = useSelector((state) => state.sites.sites);

  return (
    <View style={styles.mainContainer}>
      {/* Search Bar*/}
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          color={COLORS.primary}
          size={30}
          style={{ paddingBottom: 4 }}
        />
        <TextInput
          style={styles.searchText}
          placeholder="Search for a site"
          placeholderTextColor={COLORS.text}
        />
      </View>

      {/* List of Sites*/}
      <FlatList
        data={listOfSites}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: "7%",
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.text,
    borderBottomWidth: 1,
    marginTop: 30,
    marginBottom: 9,
  },

  searchText: {
    flex: 1,
    fontSize: 22,
    marginLeft: 10,
    marginBottom: 4,
    color: COLORS.primary,
  },

  list: {
    marginTop: 20,
    width: "90%",
  },
});

export default ListOfSitesScreen;
