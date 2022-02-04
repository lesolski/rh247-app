// ./screens/ShipmentsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const EmptyScreen = props => {
  const theme = useTheme();
  return (
    <View style={styles.mainContainer}>
      <Ionicons 
        name="cube-sharp"
        size={160}
        color={theme.colors.primary}
      />
      <Text style={{fontSize:30, fontFamily:'roboto-mono', textAlign:'center', color: theme.colors.text}}>No shippments assigned</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

});

export default EmptyScreen;
