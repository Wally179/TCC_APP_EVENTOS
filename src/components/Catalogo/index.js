import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity , Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { useCart } from '../../Context/Cart';

const {height,width}= Dimensions.get('screen');

export default function Cata({data,index}) {
    const {add} = useCart()
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity style={[styles.item,{width:'100%', height:'auto'}]}  onPress={() => add(data,index)}>
            <View style={styles.linha}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>{data.Nome_produto}</Text>
                    <Text style={styles.conteudo}>{data.Descricao_produto}</Text>
                    <Text style={styles.preço}>R$ {data.valor_produto}</Text>
                </View>
                <View>
                    <Image source={require('../../../img/comidinhas.jpg')} style={{width:120, height:120}}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}