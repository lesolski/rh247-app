import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "1",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "3",
  },
  {
    id: "2ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "4",
  },
  {
    id: "18694a0f-3da1-471f-bd96-145571e29d72",
    title: "5",
  },
  {
    id: "16694a0f-3da1-471f-bd96-145571e29d72",
    title: "5",
  },
  {
    id: "11694a0f-3da1-471f-bd96-145571e29d72",
    title: "5",
  },
  {
    id: "19694a0f-3da1-471f-bd96-145571e29d72",
    title: "5",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginHorizontal: 6,
    marginVertical: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 4 },
  },
  title: {
    fontSize: 30,
  },
});

export default App;
