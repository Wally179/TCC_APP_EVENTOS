import React from 'react';
import Lottie from 'lottie-react-native';
import styles from "./style";
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation()
  return (
    <Lottie source={require('../../../img/Load.json')} autoPlay loop={false} onAnimationFinish={() => navigation.navigate('Login')} style={styles.fundo}/>
  );
}