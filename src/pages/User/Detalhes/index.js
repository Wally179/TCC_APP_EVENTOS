import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import axios, { Axios } from "axios";
import { FontAwesome } from "@expo/vector-icons";
import MapView, { Marker, Callout } from "react-native-maps";
import Carousel from "react-native-snap-carousel-v4";

export default function Detalhes({ route }) {
  const [origin, setOrigen] = useState({
    latitude: -23.9762,
    longitude: -46.3179,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const { IDforn } = route.params;  
  const [data, setData] = useState([]);
  const baseURL = "http://192.168.15.90:3000/api/fornecedor/";
 
  useEffect(() => {
    loadApi()
  }, [IDforn,setData]);
  const nome = data.Nome_fantasia_fornecedor 

  async function loadApi() {
    await axios.get(baseURL+IDforn).then((response) => {
      setData(response.data);
    });
  }
  const { height, width } = Dimensions.get("screen");
  const slides = [
    {
      image: require("../../../../img/comidinhas.jpg"),
    },
    {
      image: require("../../../../img/comidinhas2.jpg"),
    },
  ];

  function renderItem({ item }) {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.ImagemSlide} />
      </View>
    );
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.superior}>
        <View style={styles.linha1}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("InicialUser")}
          >
            <Ionicons name="arrow-back-outline" size={35} color="grey" />
          </TouchableOpacity>
          <Image
            source={require("../../../../img/logoapp.png")}
            style={{ width: 40, height: 40, alignSelf: "center" }}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.toggleDrawer()}
          >
            <Ionicons name="menu" size={35} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.linha2}>
          <View style={styles.containerslide}>
            <Carousel
              layout="tinder"
              layoutCardOffset={10}
              data={slides}
              sliderWidth={width / 2.7}
              itemWidth={width / 2.7}
              renderItem={renderItem}
              loop
            ></Carousel>
          </View>
          <View style={styles.infos}>
            <Text style={styles.titulo}>{data.Nome_fantasia_fornecedor}</Text>
            <Text style={styles.categoria}>{data.Tipo_servico_fonercedor}</Text>
            <View style={styles.infoIcon1}>
              <View style={styles.IconInfo}>
                <Ionicons name="md-star-sharp" size={24} color="#FFC000" />
              </View>
              <View style={styles.TXTContainer}>
                <Text style={styles.IconTXT}>Nota</Text>
                <Text style={styles.IconTXT}>{data.nota_fornecedor} de 5</Text>
              </View>
            </View>
            <View style={styles.infoIcon2}>
              <View style={styles.IconInfo}>
                <FontAwesome name="users" size={24} color="#585CE5" />
              </View>
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
            <Text style={styles.descri}>
              {data.Descricao_fornecedor}
            </Text>
            <Text style={styles.titulos}>Localização</Text>
            <MapView
              style={styles.map}
              initialRegion={origin}
              zoomEnabled={true}
              minZoomLevel={15}
              showsUserLocation={true}
              loadingEnabled={true}
            >
              <Marker coordinate={origin} pinColor="#31B1B9">
                <Callout>
                  <Text>Seu Evento</Text>
                </Callout>
              </Marker>
            </MapView>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Catalogo", { IDforn,nome},)}
      >
        <Text style={styles.btntxt}>Contratar serviço</Text>
        <Text style={styles.btntxt2}>Valor entre {data.valor_min} a {data.valor_max}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
