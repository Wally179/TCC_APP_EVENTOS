import React, { useState } from 'react';
import { View, FlatList, Text, Pressable, Keyboard,TextInput, TouchableOpacity,Animated, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Lista from '../../../components/Lista/Lista';
import styles from "./style";

const {height,width} = Dimensions.get('screen');


export default function Init() {
    const navigation = useNavigation();
    const baseURL = "";
    const perPage = 12;

    const [data, setData] = useState([
        { id: 1, full_name: 'Wallace', Rate: '4', img: require('../../../../img/logoapp.png'), conteudo: 'Wallace é um genio imparavel uma maquina com odio BILLLLLLLLLLLLLLLLL', min: "R$80", max: "R$950"},
        { id: 2, full_name: 'Pedro', Rate: '2', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 3, full_name: 'Pedro 2 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 4, full_name: 'Pedro 3 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 5, full_name: 'Pedro 4 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 6, full_name: 'Pedro 5 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 7, full_name: 'Pedro 6 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 8, full_name: 'Pedro 7 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 9, full_name: 'Pedro 8 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
        { id: 10, full_name: 'Pedro 9 a volta dos que nunca foi', Rate: '3', img: require('../../../../img/logoapp.png'), conteudo: 'Pedro', min: "R$40", max: "R$150"},
      ]);

      const [selecionado, setSelecionado] = useState("Buffet");
      const [op, setOp] = useState([
        {id:1, cate:'Buffet',ico:'cake'},  
        {id:2, cate:'Fotografia', ico:'camera'},
        {id:3, cate:'Decoração',ico:'balloon'},
        {id:4, cate:'Local',ico:'warehouse'},
        {id:5, cate:'Diversão',ico:'party-popper'},
      ]);

    const [scrollY, setScrollY] =useState(new Animated.Value(0))

      function mudarCategoria(){
      }
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
          <Animated.View style={[styles.superior,
          {height: scrollY.interpolate({
          inputRange: [10,160,185],
          outputRange:[300,50,0],
          extrapolate: 'clamp'
        })},
        {
          opacity:scrollY.interpolate({
            inputRange: [1,75,170],
            outputRange:[1,1,0],
            extrapolate: 'clamp'
            })}
        ]}>

            <View style={[styles.linha]}>
              <View style={styles.inputcontainer}>
                <TextInput 
                      placeholder='Pesquisa' 
                      placeholderTextColor="#E8F6F7"
                      style={styles.input}
                ></TextInput>
                <TouchableOpacity style={styles.seach}>
                  <Ionicons name={'md-search'} size={28} color="#E8F6F7" />
                </TouchableOpacity>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.icon}  onPress={ () => {navigation.toggleDrawer()}}>
                  <Ionicons name={'menu-sharp'} size={50} color="#E8F6F7" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.categoriatxt}>Categoria</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={op}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => 
              <TouchableOpacity style={styles.horizontal} onPress={ () => {mudarCategoria(),setSelecionado(item.cate)}}>
                <MaterialCommunityIcons name={item.ico} size={40} color="#31B1B9" />
                <Text style={styles.center}>{item.cate}</Text>
              </TouchableOpacity>
            }

            />
            </Animated.View>

       
          <FlatList
          style={styles.container}
          ListHeaderComponent={<Text style={styles.categoria}>{selecionado}</Text>}
          ListHeaderComponentStyle={{marginTop: 45}}
          contentContainerStyle={{ marginHorizontal: 20}}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Lista data={item}
          />}
          scrollEventThrottle={1}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {y:scrollY}
            },
          }],
          { useNativeDriver: false})}
          />
          
    </Pressable>

  );
}