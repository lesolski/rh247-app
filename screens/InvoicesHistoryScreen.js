import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DATA from "../data/colleagues";

const _renderItem = ({ item }) => {
  return (
    <View style={{flex:1, height:100, width:'100%' }}>
      <Text> { item.idx }</Text>
    </View>
  );
};


const EmptyScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={DATA}
        renderItem={(item) => _renderItem(item)}
        keyExtractor={(item) => item.idx}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }



});

export default EmptyScreen;
