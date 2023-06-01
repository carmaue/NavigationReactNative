import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (

    <NavigationContainer>
      <AuthProvider>
        <MenuLateralBasico></MenuLateralBasico>
      </AuthProvider>
      {/* <StackNavigator></StackNavigator> */}
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
