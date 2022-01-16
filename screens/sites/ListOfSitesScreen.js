// ./screens/sites/ListOfSitesScreen.js

import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import SiteCard from '../../components/SiteCard';
// Styling
import COLORS from '../../constants/colors';

import SitesData from '../../data/sites';
const _renderItem = ({ item }) => <SiteCard name={item.name} cords={{lat:item.lat, lng:item.lng }} /> 

const ListOfSitesScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <FlatList 
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.idx}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems:'center',
    flex:1
  },
  pinnedMsg:{
    width:'90%',
    height:'25%',
    marginTop:20,
    borderRadius:15,
    borderColor:COLORS.primary,
    borderWidth:1,
  },

  labelText: {
    fontFamily:'roboto-mono', 
    fontSize:20, 
    color:COLORS.text
  }
});

export default ListOfSitesScreen;
