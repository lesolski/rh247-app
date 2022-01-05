// ./screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styling
import COLORS from '../constants/colors';

// Components
import MonthOverview from '../components/MonthOverview';



const HomeScreen = props => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.pinnedMsg}>


      </View>
      <View style={{marginTop:20, 
                    marginBottom:8, 
                    width:'80%'}}>
        <Text style={styles.labelText}>Month overview</Text>
      </View>
      <MonthOverview />
    </View>
  )


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
    marginTop:20,
    marginBottom:8,
    width:'80%',
    fontFamily:'roboto-mono', 
    fontSize:20, 
    color:COLORS.text
  }
});

export default HomeScreen;
