import React, { useState } from 'react';
import { View, FlatList, Text, Pressable, Keyboard,TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Lista from '../../../components/Lista/Lista';
import styles from "./style";

export default function Init() {
    const navigation = useNavigation();
    const baseURL = "";
    const perPage = 12;

    const [data, setData] = useState([
        { id: 1, full_name: 'Wallace', Rate: '4', img: require('../../../../img/logoapp.png'), conteudo: 'Wallace é um genio imparavel uma maquina com odio BILLLLLLLLLLLLLLLLLL', min: "R$80", max: "R$950"},
        { id: 2, full_name: 'Pedro', Rate: '2', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 3, full_name: 'Pedro 2 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
    ]);




  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
        <View style={styles.superior}>
            <View style={styles.linha}>
              <View style={styles.inputcontainer}>
                <TextInput 
                      placeholder='Pesquisa' 
                      placeholderTextColor="#E8F6F7"
                      style={styles.input}
                ></TextInput>
                <TouchableOpacity>
                  <Ionicons name={'md-search'} size={28} color="#E8F6F7" />
                </TouchableOpacity>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.icon}>
                  <Ionicons name={'menu-sharp'} size={50} color="#E8F6F7" />
                </TouchableOpacity>
              </View>
            </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.categoria}>Artista</Text>
          <FlatList
          style={{marginTop: 45}}
          contentContainerStyle={{ marginHorizontal: 20}}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Lista data={item}/>}
          />
        </View>
    </Pressable>

  );
}