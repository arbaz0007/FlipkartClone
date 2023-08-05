import { StyleSheet, Text, SafeAreaView, Image , Dimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function Carousel() {
  return (
    <SafeAreaView>
      <ScrollView horizontal={true} style={styles.container}>
        <SafeAreaView style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://images.freekaamaal.com/post_images/1525685043.PNG",
            }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </SafeAreaView>
        <SafeAreaView style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://trak.in/wp-content/uploads/2019/07/Untitled-design-4-6.jpg",
            }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </SafeAreaView>
        <SafeAreaView style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://static.hub.91mobiles.com/wp-content/uploads/2018/07/Flipkart-Big-Shopping-days.jpg",
            }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </SafeAreaView>
        <SafeAreaView style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/37/34/b4/3734b4f5e0568f0033de6a8d254fbcde.jpg",
            }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginLeft : -12
  },
  card: {
    flex: 1,
    width: 350,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  shadowcolor: {
    shadowOpacity: 0.5,
    shadorRadius: 2,
  },
  cardImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});
