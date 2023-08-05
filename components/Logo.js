import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
//importing flipkart image
import flipkartLogo from '../images/flipkartBasket.png';

// for custom fonts
import { useFonts } from 'expo-font';

// Responsive Font Size related imports
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight
} from "react-native-responsive-dimensions";

const Logo = () => {

    //requiring custom font for the app
    const [fontsLoaded] = useFonts({
        'custom-font': require('../fonts/Roboto-MediumItalic.ttf'),
        // Add more custom fonts here if needed
      });

      //checking if the font is loaded or not!
      if (!fontsLoaded) {
        return null; // You can show a loading screen while the fonts are loading
      }

  return (
    <SafeAreaView>
        <Pressable style = {styles.headerContainer}>
            <Image source={flipkartLogo} style = {styles.headerImage}/>
            <Text style = {styles.headerText}>Flipkart</Text>
        </Pressable>
        <StatusBar style='auto' />
    </SafeAreaView>
  )
}

export default Logo

const styles = StyleSheet.create({
    headerContainer : {
        marginHorizontal : '2%' , 
        marginVertical : '7%' ,
        flexDirection : 'row' , 
        alignItems : 'center'
    } , 
    headerImage : {
        height : responsiveHeight(7) , 
        width : responsiveWidth(13)
    } ,
    headerText : {
        fontSize : responsiveFontSize(3) , 
        color : '#047BD5' , 
        fontWeight : 'bold' , 
        fontFamily : 'custom-font' , 
        fontStyle : 'italic'
    }
})