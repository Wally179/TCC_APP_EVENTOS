import React, { useState } from 'react';
import styles from "./style";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Lista({data}) {
    return (
        <TouchableOpacity style={styles.item}>
            <View style={styles.linha}>
                <Text style={styles.textItem}>{data.full_name}</Text>
                <View style={styles.Rate}>
                    <Ionicons style={styles.icon} name={"md-star"} size={35} color="#E8F6F7" ></Ionicons>
                    <Text style={styles.Num}>{data.Rate}</Text>
                </View>
            </View>
            <View style={styles.linha2}>
                <View style={styles.logo}>
                    <Image source={data.img} style={styles.logoconte}/> 
                </View>
            <View style={styles.container}>
                 <Text style={styles.conteudo}>{data.conteudo}</Text>
                 <Text style={styles.ver}>Ver mais</Text>
            </View>
            </View>
            <Text style={styles.valor}>Preços entre: <Text>{data.min} a {data.max}</Text></Text>
        </TouchableOpacity>
    )
}