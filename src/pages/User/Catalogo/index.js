import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import Cata from "../../../components/Catalogo";
import axios from "axios";
import { useCart } from "../../../Context/Cart";
import CartPrice from "../../../components/Cart_Preço";

export default function Catalogo({ route }) {
  const navigation = useNavigation();
  const { IDforn, nome } = route.params;
  const { IDarmazenar } = useCart();
  const baseURL = "http://192.168.15.90:3000/api/fornecedor/";
  const [data, setData] = useState([]);
  useEffect(() => {
    loadApi();
  }, [IDforn, setData]);
  async function loadApi() {
    await axios.get(baseURL + IDforn + "/produto/").then((response) => {
      setData(response.data);
      IDarmazenar(IDforn);
    });
  }
  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.superior}>
        <View style={styles.linha1}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Detalhes", { IDforn })}
          >
            <Ionicons name="arrow-back-outline" size={35} color="grey" />
          </TouchableOpacity>
          <Text style={styles.titulo}>{nome}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Ionicons name="menu" size={35} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.flat}
            ListHeaderComponent={<Text style={styles.serviço}>Serviços</Text>}
            ListHeaderComponentStyle={{ marginTop: 25 }}
            ListFooterComponent={<Text></Text>}
            ListFooterComponentStyle={{ paddingBottom: 150 }}
            contentContainerStyle={{ marginHorizontal: 20 }}
            data={data}
            renderItem={({ item, index }) => {
              return <Cata data={item} key={index} />;
            }}
            keyExtractor={(item, index) => item.id}
          />
        </SafeAreaView>
      </View>
      <CartPrice />
    </SafeAreaView>
  );
}
