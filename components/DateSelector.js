import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

// function to get current week
function getWeekDays(current) {
  var week = new Array();
  // Starting Monday not Sunday
  current.setDate(current.getDate() - current.getDay() + 1);
  for (var i = 0; i < 5; i++) {
    week.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return week;
}

const weekDays = getWeekDays(new Date());
const dates = [];
weekDays.forEach((item, idx) => {
  dates.push({
    id: idx + 1,
    date: item.getDate(),
    day:
      item.toLocaleDateString("us-EN", { weekday: "long" }).substring(0, 3) +
      ".",
  });
});

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.date}</Text>
    <Text style={[styles.title, textColor, { fontSize: 14 }]}>{item.day}</Text>
  </TouchableOpacity>
);

const DateSelector = () => {
  const [selectedId, setSelectedId] = useState(null);
  const theme = useTheme();

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? theme.colors.primary : theme.colors.foreground;
    const color =
      item.id === selectedId ? theme.colors.foreground : theme.colors.primary;

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
    <FlatList
      data={dates}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 8, paddingHorizontal:2 }}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    padding: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
  },

  title: {
    fontSize: 32,
  },
});

export default DateSelector;
