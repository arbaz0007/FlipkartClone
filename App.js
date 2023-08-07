import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';
import Carousel from './components/Carousel';
import ProductsCategory from './components/ProductsCategory';

export default function App() {
  return (
    <SafeAreaView>
      <Logo/>
      <Carousel/>
      <ProductsCategory/>
    </SafeAreaView>
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
