import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Card from '../components/Card';
import SelectCard from '../components/SelectCard'

const ExpenseScreen = props => {

  const [isSelected, setIsSelected] = useState(false);

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1, justifyContent:'center', backgroundColor:'#'}}>
    <View style={{flex:1, alignItems:'center'}}>
    <View style={styles.mainContainer}>
        <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>Choose Date</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <SelectCard
              dateNum={1}
              dayName='Sat'>
           </SelectCard>
            <Card style={styles.date}>
              <Text style={styles.dateText}>2</Text>
              <Text>Sun.</Text>
            </Card>
            <SelectCard>
                <Text style={styles.dateText}>3</Text>
                <Text>Mon.</Text>
            </SelectCard>
            <Card style={styles.date}>
                <Text style={styles.dateText}>4</Text>
                <Text>Tue.</Text>
            </Card>
            <SelectCard style={styles.date}>
                <Text style={styles.dateText}>5</Text>
                <Text>Wed.</Text>
            </SelectCard>
        </View>
        <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>Category</Text>
        </View>
        <View style={styles.categoryContainer}>
            <View style={{flexDirection:'row'}}>
                <SelectCard style={styles.card}>
                    <Text style={styles.textStyle}>🏗 Site</Text>
                </SelectCard>
                <Card style={styles.card}>
                    <Text style={styles.textStyle}>🗺 Travel</Text>
                </Card>
            </View >
            <View style={{flexDirection:'row'}}>
                <Card style={styles.card}>
                    <Text style={styles.textStyle}>🛠 Tools </Text>
                </Card>
                <Card style={styles.card}>
                    <Text style={styles.textStyle}>🔩 Materials </Text>
                </Card>
            </View>
        </View>
        <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>Amount</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={styles.input}>
                <TextInput style={{width:'100%', height:'100%', fontSize:30, textAlign:'center'}} placeholder="€" keyboardType='numeric'/>
            </View>
        </View>
        {/* UPLOAD PICTURE TITLE */}
        <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>Upload Image</Text>
        </View>
        {/* UPLOAD PICTURE CARD */}
        <View style={styles.cameraUploadBox}>
            <TouchableOpacity>
            <Text style={styles.cameraIcon}>📷</Text>
            </TouchableOpacity>
            <Text style={{fontWeight:'500', color:'grey'}}>Click on camera to take a pic</Text>
        </View>
        {/* SUBMIT BUTTON */}
        <View style={styles.submitButton}>
            <Text style={styles.buttonText}>Add Expense</Text>
        </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        width:'90%',
        alignItems: 'center',
        marginTop: 15
    }, 
    card: {
        flex: 1,
        height:50,
        padding:5,
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    input: {
        width:'100%',
        height:50,
        shadowColor:'black',
        backgroundColor:'white',
        shadowOffset: {width:4, height:4},
        shadowRadius:6,
        shadowOpacity:0.3,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle: {
        fontSize:20,
        fontWeight:'400',
        color:'black'
    },
    categoryTitle: {
        marginTop:13,
        width:'96%',
        alignItems:'flex-end',
        flexDirection:'row',
        marginBottom:13
    },
    categoryTitleText: {
        fontSize:20,
        fontWeight:'300',
        color:'grey'
    },
    categoryContainer: {
        flexDirection:'column',
        alignItems:'center'
    },
    cameraUploadBox:{
        width:'100%',
        height:'20%',
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        shadowOpacity:0.3,
        shadowColor:'black',
        shadowOffset: {width:4, height:4},
        shadowRadius: 6
    },
    cameraIcon: {
        fontSize:75
    },
    submitButton:{
        marginTop:20,
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(55,127,242)',
        borderRadius:15,
    },
    buttonText:{
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    date:{
       flex:1,
       height:70,
       marginHorizontal:10,
       justifyContent:'center',
       alignItems:'center',
      shadowColor:'black',
        shadowOpacity: 0.10,
        shadowOffset: {width:4, height:4},
        shadowRadius:6,
        backgroundColor:'white',
        borderRadius:10

    },
    dateText:{
        fontSize:25,
        fontWeight:'600',
        marginBottom:3,
        color:'grey'
    }
});


export default ExpenseScreen;