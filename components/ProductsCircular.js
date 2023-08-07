import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const ProductsCircular = (props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={[styles.orangeCircle, { borderColor: props.color , backgroundColor : props.bgColor }]}>
        <Image source={props.image} style={styles.image} resizeMode="cover"/>
      </TouchableOpacity>
      <Text style={styles.productName}>{props.name}</Text>
    </SafeAreaView>
  );
};

export default ProductsCircular;

const styles = StyleSheet.create({
  orangeCircle: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: 4,
    marginBottom: 10,
    marginVertical: 8,
  },
  productName: {
    fontSize: 10,
    textAlign: 'center',
    width: 65,
    fontWeight: 'bold',
  },
  image: {
    width: 56, // Make sure the image's width is less than the circle's width
    height: 56, // Make sure the image's height is less than the circle's height
    borderRadius: 28, // Set the borderRadius to half of the image's width/height to make it a circle
  },
});
