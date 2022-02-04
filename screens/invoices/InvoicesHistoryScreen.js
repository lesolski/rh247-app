// ./screens/ChekcInOutScreen.js
import React, { useState } from "react";
import { TouchableOpacity, View , Text, FlatList, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


import invoices from "../../data/invoices";

const CheckInOutScreen = (props) => {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState();
  const showModal = () => {};
  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          borderColor: theme.colors.text,
          borderBottomWidth: 0.2,
          borderTopWidth: 0.2,
          flexDirection: "row",
        }}
        onPress={showModal}
      >
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Ionicons
            name="receipt-sharp"
            color={theme.colors.text}
            size={40}
          />
        </View>

        <View style={{ flex: 3, justifyContent:'center'}}>
          <Text style={{fontSize:26, fontFamily:'roboto-mono', color:theme.colors.primary}}>{item.amount}</Text>
          <Text style={{fontSize:19, color: theme.colors.text}}>{item.date}</Text>
          <Text style={{fontSize:12, color: theme.colors.text, paddingTop:5}}>{item.employeeId}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={invoices}
        renderItem={(item) => _renderItem(item, theme)}
        keyExtractor={(item) => item.id}
        extraData={isSelected}
        refreshing={false}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    flex: 1,
  },

  list: {
    width: "100%",
  },
});

export default CheckInOutScreen;
