import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

  const {height,width} = Dimensions.get('screen');

export default function FornProduto({data}) {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity style={[styles.item,{width:'80%', height:height/8}]}>
          <View style={styles.bloco}><View style={styles.quadrado}><Text adjustsFontSizeToFit numberOfLines={2} style={{textAlign:'center', color:'white'}}>150 pedidos</Text></View></View>
          <View style={styles.bloco2}><Text adjustsFontSizeToFit numberOfLines={3} style={{textAlign:'center', color:'white'}}>Bolo de Pote Cenoura com Brigadeiro 180g</Text></View>
          <View style={styles.bloco3}><Text adjustsFontSizeToFit numberOfLines={1} style={{textAlign:'center', color:'white'}}>R$ 98,50</Text></View>
        </TouchableOpacity>
    )
}