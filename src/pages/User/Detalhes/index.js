import React from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView, View,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
export default function Detalhes({route}) {
  const navigation = useNavigation();
  const { IDforn } = route.params;
  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.superior}>
        <View style={styles.linha1}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Init')}><Ionicons name="arrow-back-outline" size={35} color="grey" /></TouchableOpacity>
          <Image source={require('../../../../img/logoapp.png') } style={{width:40, height:40,}}/>
          <TouchableOpacity style={styles.btn}><Ionicons name="menu" size={35} color="grey" /></TouchableOpacity>
        </View >
        <View style={styles.linha2}>
          <View style={styles.slide}></View>
          <View style={styles.infos}>
            <Text style={styles.titulo}>Nome do fornecedor</Text>
            <Text style={styles.categoria}>Especialidade</Text>
            <View style={styles.infoIcon1}>
              <View style={styles.IconInfo}>
                <Ionicons name="md-star-sharp" size={24} color="#FFC000" />
              </View>
              <View style={styles.TXTContainer}>
                <Text style={styles.IconTXT}>Nota</Text>
                <Text style={styles.IconTXT}>4,8 de 5</Text>
              </View>
            </View>
            <View style={styles.infoIcon2}>
              <View style={styles.IconInfo}><FontAwesome name="users" size={24} color="#585CE5" /></View>
              <View style={styles.TXTContainer}>
                <Text style={styles.IconTXT}>Clientes</Text>
                <Text style={styles.IconTXT}>2000+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.container1}>
          <View style={styles.container2}>
          <Text style={styles.titulos}>Informação</Text>
          <Text style={styles.descri}>Texto generico sobre informação do serviço, ou algo da empresa que ficaria aqui e tals, estou escrevendo qualquer coisa para enrolar e ver como ficaria a art no geral.</Text>
          <Text style={styles.titulos}>Localização</Text>
          <MapView style={styles.map} />
          <Text style={styles.titulos}>Review</Text>
          <Text style={styles.descri}>Texto generico sobre informação do serviço, ou algo da empresa que ficaria aqui e tals, estou escrevendo qualquer coisa para enrolar e ver como ficaria a art no geral.</Text>
          </View>
          
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.botao}>
            <Text style={styles.btntxt}>Contratar serviço</Text>
            <Text style={styles.btntxt2}>Valor entre $$ a $$</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}