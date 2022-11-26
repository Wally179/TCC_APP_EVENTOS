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
import { useCart } from "../../../Context/Cart";
import CartCata from "../../../components/Cart_Catalogo";
import CartPrice from "../../../components/Cart_Preço";

export default function Carrinho() {
  const navigation = useNavigation();

  const { cart, IDforne } = useCart();
  const IDforn = IDforne;
  return (
    <SafeAreaView style={styles.fundo}>
      <View style={styles.superior}>
        <View style={styles.linha1}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Catalogo", { IDforn })}
          >
            <Ionicons name="arrow-back-outline" size={35} color="grey" />
          </TouchableOpacity>
          <Text style={styles.titulo}> </Text>
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
            ListHeaderComponent={
              <Text style={styles.serviço}>Suas escolhas</Text>
            }
            ListHeaderComponentStyle={{ marginTop: 25 }}
            ListFooterComponent={<Text></Text>}
            ListFooterComponentStyle={{ paddingBottom: 150 }}
            contentContainerStyle={{ marginHorizontal: 20 }}
            data={cart}
            renderItem={({ item, index }) => {
              return <CartCata data={item} key={index} />;
            }}
            keyExtractor={(item, index) => item.id}
          />
        </SafeAreaView>
      </View>
      <CartPrice></CartPrice>
    </SafeAreaView>
  );
}
