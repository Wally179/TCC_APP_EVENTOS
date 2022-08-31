import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity , Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const {height,width}= Dimensions.get('screen');

export default function Cata({data}) {
    
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity style={[styles.item,{width:width/2, height:height/3}]}>
            <View style={styles.linha}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>{data.produto}</Text>
                    <Text style={styles.conteudo}>Delicioso bolo no pote de prestígio com massa de chocolate e cobertura de brigadeiro</Text>
                    <Text style={styles.preço}>R$ 16,99</Text>
                </View>
                <View>
                    <Image source={require('../../../img/comidinhas.jpg')} style={{width:120, height:120}}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}