import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';



export default function Lista({data}) {
    const navigation = useNavigation(); 
    const IDforn = data.id  
    return (
        <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('Detalhes',{IDforn})}}>
            <View style={styles.linha}>
                <Text style={styles.textItem}>{data.Nome_fantasia_fornecedor}</Text>
                <View style={styles.Rate}>
                    <Ionicons style={styles.icon} name={"md-star"} size={35} color="#E8F6F7" ></Ionicons>
                    <Text style={styles.Num}>{data.nota_fornecedor}</Text>
                </View>
            </View>
            <View style={styles.linha2}>
                <View style={styles.logo}>
                    <Image source={require('../../../img/logoapp2.png') }  style={styles.logoconte}/> 
                </View>
            <View style={styles.container}>
                 <Text style={styles.conteudo}>{data.Descricao_fornecedor}</Text>
                 <Text style={styles.ver}>Ver mais</Text>
            </View>
            </View>
            <Text style={styles.valor}>Preços entre: <Text>{data.min} a {data.max}</Text></Text>
        </TouchableOpacity>
    )
}