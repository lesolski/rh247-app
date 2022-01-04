import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';


import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import SelectCard from '../components/SelectCard';
import CategoryCard from '../components/CategoryCard';

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
              dayName='Sat'
              style={styles.date}>
          </SelectCard>
          <SelectCard
              dateNum={2}
              dayName='Sat'
              style={styles.date}>
           </SelectCard>
          <SelectCard
              dateNum={3}
              dayName='Sat'
              style={styles.date}>
           </SelectCard>
          <SelectCard
              dateNum={4}
              dayName='Sat'
              style={styles.date}>
          </SelectCard>
          <SelectCard
            dateNum={5}
            dayName='Sat'
            style={styles.date}>
           </SelectCard>

            
        </View>
        <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>Category</Text>
        </View>
        <View style={styles.categoryContainer}>
          <View style={{flexDirection:'row'}}>
            <CategoryCard 
              style={styles.card} 
              category={'site'} 
              icon={'desktop-outline'}>
            </CategoryCard>
            <CategoryCard 
              style={styles.card} 
              category={"materials"}>
            </CategoryCard>
          </View >

          <View style={{flexDirection:'row'}}>
            <CategoryCard 
              style={styles.card} 
              category={"travel"} 
              icon={"airplane-outline"}>
            </CategoryCard>
            <CategoryCard 
              style={styles.card} 
              category={"tools"} 
              icon={"construct-outline"}>
            </CategoryCard>
           </View>
        </View>

        <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>Amount</Text>
        </View>

        <View style={{flexDirection:'row'}}>
            <View style={styles.input}>
                <TextInput 
                  style={{width:'100%', height:'100%', fontSize:30, textAlign:'center', color:COLORS.text}} 
                  placeholder="€" 
                  placeholderTextColor={COLORS.primary}
                  keyboardType='numeric'
                  keyboardAppearance='dark'/>
            </View>
        </View>
        {/* UPLOAD PICTURE TITLE */}
        <View style={styles.categoryTitle}>
            <Text style={styles.categoryTitleText}>Upload Image</Text>
        </View>
        {/* UPLOAD PICTURE CARD */}
        <View style={styles.cameraUploadBox}>
            <TouchableOpacity style={{alignItems:'center'}}>
              <Ionicons 
                name="camera-outline"
                size={60}
                color={COLORS.primary}
              />
              <Text style={{color: COLORS.text, fontFamily:'roboto-mono'}}>Click on camera to add a photo</Text>
            </TouchableOpacity>
        </View>
        {/* SUBMIT BUTTON */}
        <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Claim</Text>
        </TouchableOpacity>
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
        backgroundColor: COLORS.foreground,
        borderRadius:10,
    },

    input: {
        width:'100%',
        height:50,
        shadowColor:'black',
        backgroundColor: COLORS.foreground,
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
        color: COLORS.text,
        fontFamily:'roboto-mono'
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
        color:'grey',
        fontFamily:'roboto-mono'
    },
    categoryContainer: {
        flexDirection:'column',
        alignItems:'center'
    },
    cameraUploadBox:{
        width:'100%',
        height:'22%',
        borderRadius:10,
        backgroundColor: COLORS.foreground,
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
        marginTop:28,
        height:50,
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.background,
        borderColor: COLORS.primary,
        borderWidth: 3,
        borderRadius:15,
    },
    buttonText:{
        fontSize:25,
        fontWeight:'bold',
        color: COLORS.primary,
        fontFamily:'roboto-mono'
    },
    date:{
      flex:1,
      height:70,
      marginHorizontal:6,
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
    }
});


export default ExpenseScreen;