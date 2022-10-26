import React from 'react';
import { AppRoutes } from './src/Routes';
import Catalogo from './src/components/Catalogo';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  return (
      <AppRoutes/>
  );
}
