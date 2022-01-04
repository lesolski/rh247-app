import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// styling imports
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons'


const HomeScreen = props => {
  return (
    <View style={styles.mainBox}>
      <View style={styles.avatarBox}>
        <Ionicons
          name="person-outline"
          size={80} 
          color={COLORS.primary}
        />
      </View>
      <View style={{marginTop:20}}> 
        <Text style={styles.userNameText}>Sasha DJURIC</Text>
      </View>
      <View style={styles.infoBox}>
        <Ionicons
          name='mail-outline'
          size={30}
          color={COLORS.text}
        />
        <Text style={styles.infoText}>
          sasa.djuric@remotehands24-7.com
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Ionicons
          name='mail-outline'
          size={30}
          color={COLORS.text}
        />
        <Text style={styles.infoText}>
          sasa.djuric@phoebe.fr
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Ionicons
          name='location-outline'
          size={30}
          color={COLORS.text}
        />
        <Text style={styles.infoText}>
          Vienna, Austria 
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Ionicons
          name='call-outline'
          size={30}
          color={COLORS.text}
        />
        <Text style={styles.infoText}>
           +43 67763179171
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Ionicons
          name='medal-outline'
          size={30}
          color={COLORS.text}
        />
        <Text style={styles.infoText}>
          Field Engineer LVL 2  
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  avatarBox: {
    marginTop: 15,
    height: 200,
    width: 200,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth:3,
    borderColor: COLORS.primary,
  },
  userNameText: {
    fontSize: 32,
    fontFamily: 'roboto-mono',
    color: COLORS.text 
  },
  infoBox: {
    marginTop: 10,
    width:'80%', 
    height:50, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems: 'center',
    borderBottomColor: COLORS.text,
    borderBottomWidth: 1
  },
  infoText: {
    fontSize:14,
    fontFamily:'roboto-mono',
    color: COLORS.text
  }
});

export default HomeScreen;