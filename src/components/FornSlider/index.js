import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

  const {height,width} = Dimensions.get('screen');

export default function SolicitaForn({opi}) {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity style={[styles.item,{width:width*0.9, height:height/5.2}]}>
          <View style={styles.linha}>
              <Image source={require('../../../img/comidinhas.jpg')} style={{width:70, height:70, borderRadius:20}}/>
              <View style={styles.titulo}>
                <Text style={styles.textTitulo}>Nome do Usuario/Evento</Text>
                <Text style={styles.textSubTitulo}>Rua Doutor Joaquim Coutinho Marques, Caneleira, Santos</Text>
              </View>
          </View>
          <View style={styles.linha2}>
            <Ionicons style={styles.icon} name={"time"} size={35} color="#E8F6F7" ></Ionicons>
            <View>
            <Text style={styles.white}>Quinta-feira, 28 de Agosto</Text>
            <Text style={styles.white}>17:00 - 23:00</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
}