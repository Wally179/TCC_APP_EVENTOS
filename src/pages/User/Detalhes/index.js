import React, { useState,  useEffect} from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView, View,ScrollView, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MapView, {Marker, Callout} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel-v4';



export default function Detalhes({route}) {
  const [origin, setOrigen] = useState({
    latitude:  -23.55908,
		longitude: -46.66113,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
  })
 
 /* 
 import * as Location from 'expo-location';
 import * as Permissions from 'expo-permissions';
 EU ENLOUQUECI E FIZ UM NEGOCIO PARA USAR SEU GPS, MAS Não PRECISA NESSA TELA, MAS VAI USAR NO FUTURO EM OUTRA TELA
  useEffect(()=>{
    (async function(){
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
},[]); */
const {height,width} = Dimensions.get('screen'); 
const slides= [
    {
      image: require('../../../../img/comidinhas.jpg')
    },
    {
      image: require('../../../../img/comidinhas2.jpg')
    },
  ];

  function renderItem({ item }) {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.ImagemSlide} />
      </View>
    )
  }

  const navigation = useNavigation();
  const { IDforn } = route.params;
  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.superior}>
        <View style={styles.linha1}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('InicialUser')}><Ionicons name="arrow-back-outline" size={35} color="grey" /></TouchableOpacity>
          <Image source={require('../../../../img/logoapp.png') } style={{width:40, height:40, alignSelf:'center'}}/>
          <TouchableOpacity style={styles.btn} onPress={ () => navigation.toggleDrawer()}><Ionicons name="menu" size={35} color="grey" /></TouchableOpacity>
        </View >
        <View style={styles.linha2}>
          <View style={styles.containerslide}>
              <Carousel
              layout='tinder'
              layoutCardOffset={10}
              data={slides}
              sliderWidth={width/2.7}
              itemWidth={width/2.7}
              renderItem={renderItem}
              loop
              ></Carousel>
            </View>
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
          <MapView style={styles.map} 
            initialRegion={origin}
            zoomEnabled={true}
            minZoomLevel={17}
            showsUserLocation={false}
            loadingEnabled={true}
          >
            <Marker
            coordinate={origin}
            pinColor='#31B1B9'
            >
              <Callout><Text>Seu Evento</Text></Callout>
            </Marker>
          </MapView>
          <Text style={styles.titulos}>Review</Text>
          <Text style={styles.descri}>Texto generico sobre informação do serviço, ou algo da empresa que ficaria aqui e tals, estou escrevendo qualquer coisa para enrolar e ver como ficaria a art no geral.</Text>
          </View>
          
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Catalogo',{IDforn})}>
            <Text style={styles.btntxt}>Contratar serviço</Text>
            <Text style={styles.btntxt2}>Valor entre $$ a $$</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}