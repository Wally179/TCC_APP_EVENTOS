import React, { useState} from 'react';
import { Text, FlatList, TouchableOpacity, SafeAreaView, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import Cata from '../../../components/Catalogo';

export default function Catalogo({route}) {
    const navigation = useNavigation();
    const { IDforn } = route.params;
    const [data, setData] = useState([
        {id:1, produto:'Bolo de Pote no brigadeiro - 200g', descri:'Delicioso bolo no pote de prestígio com massa de chocolate e cobertura de brigadeiro', valor:'R$ 16,99'},
        {id:2, produto:'Bolo de Pote no banoffee fit - 180g', descri:'Delicioso bolo no pote de banoffee LOW CARB', valor:'R$ 24,99'},
        {id:3, produto:'Bolo de Pote no  Cenoura com Brigadeiro Belga Fit - 180g', descri:'Delicioso bolo no pote de cenoura com brigadeiro belga fitness', valor:'R$ 24,99'},
        {id:4, produto:'Nome do produto', descri:'pequena descrição', valor:'R$'},
        {id:5, produto:'Nome do produto', descri:'pequena descrição', valor:'R$'},
      ]);
  return (
    <SafeAreaView style={styles.fundo}>
    <View style={styles.superior}>
      <View style={styles.linha1}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Detalhes',{IDforn})}><Ionicons name="arrow-back-outline" size={35} color="grey" /></TouchableOpacity>
        <Text style={styles.titulo}>Nome do fornecedor</Text>
        <TouchableOpacity style={styles.btn} onPress={ () => {navigation.toggleDrawer()}}><Ionicons name="menu" size={35} color="grey" /></TouchableOpacity>
      </View >
    </View>
    <View>
    <SafeAreaView style={styles.container}>
    <FlatList
          style={styles.flat}
          ListHeaderComponent={<Text style={styles.serviço}>Serviços</Text>}
          ListHeaderComponentStyle={{marginTop: 25}}
          ListFooterComponent={<Text></Text>}
          ListFooterComponentStyle={{paddingBottom:150}}
          contentContainerStyle={{ marginHorizontal: 20}}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Cata data={item}
          />}
          />
     </SafeAreaView>
    </View>

    <TouchableOpacity style={styles.botao}>
            <View style={styles.bloco3}>
            <Ionicons name="cart-outline" size={34} color="white" />   
            </View>
            <View style={styles.bloco2}>
            <Text style={styles.btntxt}>Ver carrinho</Text>
            </View>
            <View style={styles.bloco}>
            <Text style={styles.btntxt2}>R$3</Text>
            </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
