import React, { useState} from 'react';
import { Text, FlatList, TouchableOpacity, SafeAreaView, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import Cata from '../../../components/Catalogo';

export default function Catalogo({route}) {
    const navigation = useNavigation();
    const { IDforn } = route.params;
    const [produ, setItems] = useState([
        {id:1, produto:'BOLO', descri:'AAAAAAAAAAAAAAAAAAAAAAAAAAA', valor:'18'},
        {id:2, produto:'BOLO', descri:'AAAAAAAAAAAAAAAAAAAAAAAAAAA', valor:'18'}
      ]);
  return (
    <SafeAreaView style={styles.fundo}>
    <View style={styles.superior}>
      <View style={styles.linha1}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Detalhes',{IDforn})}><Ionicons name="arrow-back-outline" size={35} color="grey" /></TouchableOpacity>
        <Text style={styles.titulo}>Nome do fornecedor</Text>
        <TouchableOpacity style={styles.btn}><Ionicons name="menu" size={35} color="grey" /></TouchableOpacity>
      </View >
    </View>
    <View>
    <FlatList
          style={styles.container}
          ListHeaderComponent={<Text style={styles.categoria}>Serviços</Text>}
          ListHeaderComponentStyle={{marginTop: 45}}
          contentContainerStyle={{ marginHorizontal: 20}}
          data={produ}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Cata data={produ}
          />}
          />
    </View>
    </SafeAreaView>
  )
}
