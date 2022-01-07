import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import RideInfoCard from '../components/RideInfoCard';

import COLORS from '../constants/colors';

const renderItem = ( {item}, props ) => {
  return <RideInfoCard 
          start={item.start} 
          end={item.end}
          style={styles.rideInfoCard} 
          />
};

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    start: "Belgrade",
    end: "Vienna"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    start: "Amsterdam",
    end: "Vienna",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    start: "Sofia",
    end: "Istanbul"
  },
  {
    id: "28694a0f-3da1-471f-bd96-145571e29d72",
    start: "Antwerpen",
    end: "Amsterdam"
  },
  {
    id: "28697a0f-3da1-471f-bd96-145571e29d72",
    start: "Antwerpen",
    end: "Amsterdam"
  },

];
const RidesScreen = props => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.startRideBox}>

      </View>
      <View style={styles.pastRidesBox}>
        <View style={{alignSelf:'flex-start' }}>
          <Text>Previous rides</Text>
        </View>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        />
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignItems:'center',
  },

  startRideBox: {
    flex:1,
    width:'100%',
    backgroundColor:COLORS.primary
  },
  
  pastRidesBox: {
    flex:1,
    width:'100%',
    backgroundColor: COLORS.background,
    alignItems: 'center'

  },
  flatListStyle:{
    width:'95%',

  },
});

export default RidesScreen;
