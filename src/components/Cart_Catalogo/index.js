import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity , Dimensions, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { useCart } from '../../Context/Cart';

const {height,width}= Dimensions.get('screen');

export default function CartCata({data,index}) {
    const {remove} = useCart()
    const navigation = useNavigation(); 
    function remover(data,index){
        Alert.alert(
            "Remover o produto?",
            " ",
            [
              {
                text: "Não",
                onPress: () => {console.log(index)}
                },
              { 
                text: "Sim", 
                onPress: () => remove(index,data) 
              }
            ]
          );
    }
    return (
        <View style={[styles.item,{width:'100%', height:'auto'}]}>
            <TouchableOpacity style={styles.linha}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>{data.Nome_produto}</Text>
                    <Text style={styles.conteudo}>{data.Descricao_produto}</Text>
                    <Text style={styles.preço}>R$ {data.valor_produto}</Text>
                </View>
                <View>
                    
                    <Image source={require('../../../img/comidinhas.jpg')} style={{width:width/4, height:height/8, borderRadius:15,}}/>
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={() => remover(data,index)}><MaterialCommunityIcons name="delete" size={40} color="#31B1B9" /></TouchableOpacity>
        </View>
    )
}