import React, { useEffect, useState } from "react";
import styles from "./style";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../Context/Cart";

const { height, width } = Dimensions.get("screen");

export default function Cata({ data, index }) {
  const { add } = useCart();
  const navigation = useNavigation();
  const [Imagem, setImagem] = useState(
    "https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/2427/no-image.png"
  );
  useEffect(() => {
    if (data.imagem_produto !== null) {
      setImagem(data.imagem_produto);
    }
  }, []);

  return (
    <TouchableOpacity
      style={[styles.item, { width: "100%", height: "auto" }]}
      onPress={() => add(data, index)}
    >
      <View style={styles.linha}>
        <View style={styles.container}>
          <Text style={styles.titulo}>{data.Nome_produto}</Text>
          <Text style={styles.conteudo}>{data.Descricao_produto}</Text>
          <Text style={styles.preço}>R$ {data.valor_produto}</Text>
        </View>
        <View>
          <Image
            source={{ uri: Imagem }}
            resizeMode="cover"
            style={{ width: width / 4, height: height / 8, borderRadius: 15 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
