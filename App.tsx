import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator></StackNavigator> */}
      <MenuLateralBasico></MenuLateralBasico>
    </NavigationContainer>

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