import React, {useState, useEffect} from 'react' ;
import styles from "./style";
import {Text, View, Image, TouchableOpacity} from 'react-native';


export default function TelaInicial () {
    return (
        <View style={styles.fundo}>
            <View style={styles.Logo}>
                <Image source={require('../../../img/logoapp2.png')}/>

                <Text style={styles.Textnome}>Clube de Luta Infantil</Text>
                <Text style = {styles.Textfrase}>Seja Bem Vindo ao Clube de Luta Infantil</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnEntrar}>
                    <Text style={styles.btntext}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegistro}>
                    <Text style={styles.btntext}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )


}