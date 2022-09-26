import React, { useState,  useEffect} from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import { Ionicons,  FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import styles from "./style";

export default function MenuUser({navigation}) {
    const {height,width} = Dimensions.get('screen');
  return (
    <SafeAreaView style={[styles.fundo]}>
        <View style={[styles.linha1, {paddingTop: height/12}]}>
        <View style={{width:'70%',flexDirection: 'row'}}>
            <Image source={require('../../../img/comidinhas.jpg') } style={{width:width*0.14, height:width*0.14, borderRadius:25, alignSelf:'center'}}/>
        
            <View style={styles.caixas}>
                <Text numberOfLines={1} style={[styles.txtnome, { color:'#222133'}]}>Wallace Santos</Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.txtmail, { color:'#454A4D'}]}>Wallace-179@hotmail.com</Text>
            </View>
        </View >
        </View>

        <View style={styles.CardOpç}>
            <TouchableOpacity style={styles.opç}><MaterialIcons name="house" size={28} color="#454A4D" /><Text style={[styles.txtop, {marginLeft:width/30}]}>Inicio</Text></TouchableOpacity>
            <TouchableOpacity style={styles.opç}><FontAwesome name="id-card" size={28} color="#454A4D" /><Text style={[styles.txtop, {marginLeft:width/30}]}>Perfil</Text></TouchableOpacity>
            <TouchableOpacity style={styles.opç}><Ionicons name="notifications" size={28} color="#454A4D" /><Text style={[styles.txtop, {marginLeft:width/30}]}>Notificação</Text></TouchableOpacity>
            <TouchableOpacity style={styles.opç}><Ionicons name="location" size={28} color="#454A4D" /><Text style={[styles.txtop, {marginLeft:width/30}]}>Localização</Text></TouchableOpacity>
            <TouchableOpacity style={styles.opç}><Ionicons name="construct" size={28} color="#454A4D" /><Text style={[styles.txtop, {marginLeft:width/30}]}>Configuração</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.opçSair,{height:height/15}]}><MaterialIcons name="logout" size={28} color="#454A4D" /><Text style={[styles.txtop, {marginLeft:width/30}]}>Sair</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
