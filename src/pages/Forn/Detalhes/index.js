import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker, Callout } from "react-native-maps";
import FornProduto from "../../../components/FornProduto";

export default function DetalhesForn() {
  const navigation = useNavigation();
  const [origin, setOrigen] = useState({
    latitude: -23.55908,
    longitude: -46.66113,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [data, setData] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.linha1}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("FornInicial")}
        >
          <Ionicons name="arrow-back-outline" size={35} color="grey" />
        </TouchableOpacity>
        <Text style={styles.pedidoN}>Numero do pedido</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Ionicons name="menu" size={35} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.container2}>
              <Text style={styles.tituloUser}>Nome do evento/user</Text>
              <Text style={styles.descri}>Valor a receber pelo serviço</Text>
              <Text style={styles.titulos}>Localização</Text>
              <MapView
                style={styles.map}
                initialRegion={origin}
                zoomEnabled={true}
                minZoomLevel={17}
                showsUserLocation={false}
                loadingEnabled={true}
              >
                <Marker coordinate={origin} pinColor="#31B1B9">
                  <Callout>
                    <Text>Seu Evento</Text>
                  </Callout>
                </Marker>
              </MapView>
              <Text style={styles.titulos}>Produto</Text>
              <View style={styles.linhaP}>
                <View style={styles.bloco}>
                  <Text>Qnd</Text>
                </View>
                <View style={styles.bloco2}>
                  <Text>Produto</Text>
                </View>
                <View style={styles.bloco3}>
                  <Text>Preço</Text>
                </View>
              </View>
            </View>
          }
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{ marginBottom: 125 }}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <FornProduto data={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
