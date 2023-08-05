import { StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function Carousel() {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <SafeAreaView style ={[styles.card,styles.cardElevated]}>
            
        <Image
    source={{
        uri:'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
    
    }}
    style={styles.cardImage}
/>

        </SafeAreaView>
        <SafeAreaView style ={[styles.card,styles.cardElevated]}>
        <Image
    source={{
        uri:'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
    
    }}
    style={styles.cardImage}
/>
        </SafeAreaView>
        <SafeAreaView style ={[styles.card,styles.cardElevated]}>
        <Image
    source={{
        uri:'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
    
    }}
    style={styles.cardImage}
/>
        </SafeAreaView>
        <SafeAreaView style ={[styles.card,styles.cardElevated]}>
        <Image
    source={{
        uri:'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
    
    }}
    style={styles.cardImage}
/>
        </SafeAreaView>
        <SafeAreaView style ={[styles.card,styles.cardElevated]}>
        <Image
    source={{
        uri:'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
    
    }}
    style={styles.cardImage}
/>
        </SafeAreaView>
        <SafeAreaView style ={[styles.card,styles.cardElevated]}>
        <Image
         source={{
        uri:'https://images.unsplash.com/photo-1690184432588-81068877d852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
    
    }}
    style={styles.cardImage}
/>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headingText :{
        fontsize:24,
        fontWeight: 'bold',
        paddingHorizontal:10,
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        width:350,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        bordeRadius: 4,
        margin :8,
        
    },
    cardElevated:{

        elevation:5,
        shadowOffset:{
          width:1,
          height:1,
        }
    },
    shadowcolor:{ 
    shadowOpacity:0.5,
    shadorRadius:2
}, cardImage:{
    width:350,
    height:200
}

})