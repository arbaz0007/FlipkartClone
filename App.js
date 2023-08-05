import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel/>
      <StatusBar style="auto" />
    </View>
=======
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';

export default function App() {
  return (
    <SafeAreaView>
      <Logo/>
    </SafeAreaView>
>>>>>>> 7a6774a4d408bb100813816f5205d697c216646f
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
