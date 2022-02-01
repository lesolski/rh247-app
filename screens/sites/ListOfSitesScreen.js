// ./screens/sites/ListOfSitesScreen.js

import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  RefreshControl,
} from "react-native";

// Redux imports
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";

// Components imports
import SiteCard from "../../components/SiteCard";

// Styling imports
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

// pass item object and unpack it in SiteCard component via props and style it there
const _renderItem = ({ item }) => <SiteCard item={item} />;

const ListOfSitesScreen = () => {
  const listOfSites = useSelector((state) => state.sites.sites);
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.mainContainer}>
      {/* Search Bar*/}
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          color={theme.colors.primary}
          size={30}
          style={{ paddingBottom: 4 }}
        />
        <TextInput
          style={[styles.searchText, { color: theme.colors.primary }]}
          placeholder="Search for a site"
          placeholderTextColor={theme.colors.text}
        />
      </View>

      {/* List of Sites*/}
      <FlatList
        data={listOfSites}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.primary}
          />
        }
        showsVerticalScrollIndicator={false}
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
    width: "100%",
  },
});

export default ListOfSitesScreen;
