import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';
import * as Camera from 'expo-camera';


// Styling imports
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons'


const SiteCard = (props) => {
  return (
    <View style={styles.card}>
      <Text>
        {props.site_name}
      </Text>
    </View>

  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    alignContent: 'center',
  }

});

export default SiteCard;
