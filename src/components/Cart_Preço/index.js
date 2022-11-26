import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../../Context/Cart";
import { useNavigation } from "@react-navigation/native";

export default function CartPrice() {
  const { cart, totalValue } = useCart();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={() => navigation.navigate("Carrinho")}
    >
      <View style={styles.bloco3}>
        <Ionicons name="cart-outline" size={34} color="white" />
        <Text style={styles.contador}>{Object.keys(cart).length}</Text>
      </View>
      <View style={styles.bloco2}>
        <Text style={styles.btntxt}>Ver carrinho</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.btntxt2} adjustsFontSizeToFit>
          R$ {totalValue}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
