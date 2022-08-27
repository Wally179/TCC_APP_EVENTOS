import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Cata({produ}) {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.linha}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Bolo de Pote no brigadeiro - 200g</Text>
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