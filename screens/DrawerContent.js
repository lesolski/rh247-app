import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { 
    DrawerContentScrollView, 
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

const DrawerContent = props => {
    return(
        <DrawerContentScrollView {...props} >
            <View style={styles.drawerContainer}>
                <Image 
                  source={require('../assets/avatar.jpeg')}
                  style={styles.avatar}
                  />
                <Text style={styles.userText}>Sasa Djuric</Text>
            </View>
            <DrawerItemList {...props} />
            <View style={{height:100, flex:1}}></View>
            <DrawerItem label="Sign Out"> <Text>aaa</Text></DrawerItem>
            <DrawerItem label="Sign Out"> <Text>aaa</Text></DrawerItem>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
  drawerContainer:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
    height:200
  },
  avatar:{
    borderRadius:75,
    width:150,
    height:150,
    marginLeft:16
  },
  userText:{
    marginLeft:16,
    marginTop: 20,
    marginBottom:15,
    fontSize:25,
    fontWeight:'bold'

  }


});



export default DrawerContent;