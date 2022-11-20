import React from 'react';
import { AppRoutes } from './src/Routes';
import Catalogo from './src/components/Catalogo';
import { LogBox, Text, View, TouchableOpacity, } from "react-native";
import CartProvider from './src/Context/Cart';



LogBox.ignoreLogs(["EventEmitter.removeListener"]);
LogBox.ignoreLogs(["errorForStackTrace"]);
export default function App() {
  return (
    <CartProvider>
      <AppRoutes/>
    </CartProvider>
  );

}
