import React, {useState, useEffect} from 'react';
import styles from "./style";
import { Image, TouchableOpacity, Text, View, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function TelaInicial () {
    const navigation = useNavigation();    
    return (
        <View style={styles.fundo}>
            <View style={styles.Logo}>
                <Image source={require('../../../../img/logoapp.png')}/>

                <Text style={styles.Textnome}>Fast Fest</Text>
                <Text style = {styles.Textfrase}>Sua diversão mais ágil</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btntext} >Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegistro} onPress={() => navigation.navigate('Caduser')}>
                    <Text style={styles.btntext} >Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )


}