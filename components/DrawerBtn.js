import React from 'react'
import {
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity
} from 'react-native';

import {FontAwesome5} from '@expo/vector-icons'

const DrawerBtn = props => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <TouchableOpacity 
                    style={{alignItems: "flex-end", margin:26}}
                    onPress={this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={24} color="161924" />
                </TouchableOpacity>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.text}>
                        {this.props.name}
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text:{
        color:"161924",
        fontSize:25,
        fontWeight:'500'
    }
});

export default DrawerButton;