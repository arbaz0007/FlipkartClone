import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <SafeAreaView>
      <Logo/>
      <Carousel/>
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
