import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductsCircular from "./ProductsCircular";
import Discount from '../images/discount.png';
import Mobile from '../images/phone.webp'
import Laptop from '../images/laptop.webp'
import WashingMachine from '../images/wahingMachines.jpeg'
import beauty from '../images/beauty.webp'
import kitchen from '../images/kitchen.webp'
import fashion from '../images/fashion.jpeg'
import brands from '../images/brands.webp'
import medicines from '../images/medicines.jpeg'
import furniture from '../images/furniture.webp'

const ProductsCategory = () => {
  const productData = [
    {
      id: 1,
      color: "orange",
      name : 'Top Offers' ,
      image : Discount , 
      bgColor : '#ff7f50'
    },
    {
      id: 2,
      color: "green",
      name : 'Mobiles' ,
      image : Mobile , 
      bgColor : '#55efc4'
    },
    {
      id: 3,
      color: "orange",
      name : 'Electronics & Accessories' ,
      image : Laptop , 
      bgColor : '#ff7f50'
    },
    {
      id: 4,
      color: "green",
      name : 'TVs & Appliances' ,
      image : WashingMachine , 
      bgColor : '#55efc4'
    },
    { 
      id: 5,
      color: "orange" , 
      name : 'Beauty, Toys, Food, Sports' ,
      image : beauty , 
      bgColor : '#ff7f50'
    },
    { 
      id: 6,
      color: "green" , 
      name : 'Next-Gen Brands' , 
      image : brands , 
      bgColor : '#55efc4'
    },
    {
      id : 7 , 
      color : 'orange' , 
      name : 'Home & Kitchen' , 
      image : kitchen , 
      bgColor : '#ff7f50'
    },
    {
      id : 8 , 
      color : 'green' , 
      name : 'Fashion' , 
      image : fashion , 
      bgColor : '#55efc4'
    },
    {
      id : 9 , 
      color : 'orange' , 
      name : 'Medicines' ,
      image : medicines , 
      bgColor : '#ff7f50'
    },
    {
      id : 10 , 
      color : 'green' , 
      name : 'Furniture & Mattresses' , 
      image : furniture , 
      bgColor : '#55efc4'
    }
  ];

  return (
    <SafeAreaView style={styles.circularContainer}>
      {
        productData.map((product) => (
          <ProductsCircular key = {product.id} color = {product.color} name = {product.name} image = {product.image} bgColor = {product.bgColor}/>
        ))
      }
    </SafeAreaView>
  );
};

export default ProductsCategory;

const styles = StyleSheet.create({
  circularContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 8,
    marginVertical: 6,
    justifyContent: "space-between",
  },
});
